#!/usr/bin/env ruby

require "json"
require "liquid"


class Hash
  def remap(hash={})
    each { |k,v| yield hash, k, v }
    hash
  end
end


class Layout

  def self.angles(start, step)
    Proc.new do
      Range.new(start, 90-start).step(step).to_a.shuffle +
      Range.new(start + (step * 0.5).to_i, 90-start).step(step).to_a.shuffle
    end
  end

  ANGLES = {
    adopt: angles(10, 15),
    trial: angles(8, 12), 
    assess: angles(6, 10), 
    hold: angles(4, 8), 
  }

  def self.instance(quadrant, ring)
    @instances ||= {}
    @instances["#{quadrant}:#{ring.to_s}"] ||= Layout.new(quadrant, ring)
  end

  def initialize(quadrant, ring)
    @offset = $offset[quadrant]
    @angles = ANGLES[ring].call
  end

  def next_angle
    @offset + @angles.shift.to_i
  end
end


class Blip
  attr_reader :name, :quadrant, :score

  def initialize(name, quadrant, score)
    @name, @quadrant, @score = name, quadrant, score
    @moved = false
  end

  def moved!
    @moved = true
  end

  def ring
    return :adopt if score >= 1.5
    return :trial if score >= 0
    return :assess if score >= -1
    return :hold
  end

  def radius
    return (30..90).to_a.sample if ring == :adopt
    # return (40 + (2 - score) * (60 / 0.5)).to_i if ring == :adopt
    return (110 + (1.5 - score) * (80 / 1.5)).to_i if ring == :trial
    return (210 + (0 - score) * (80 / 1)).to_i if ring == :assess
    return (310 + (-1 - score) * (80 / 1)).to_i
  end

  def angle
    Layout.instance(quadrant, ring).next_angle
  end

  def movement
    @moved ? "t" : "c"
  end

  def as_json
    { name: name, pc: { r: radius, t: angle }, movement: movement }
  end
end


class Radar
  def initialize(path)
    @blips = Radar.parse(path)
  end

  def [](name)
    @blips[name]
  end

  def track_moves(previous)
    @blips.each do |name, blip|
      blip.moved! if previous[name].nil? || previous[name].ring != blip.ring
    end
  end

  # render blips as json into js template
  def render
  puts $offset
    hash = Array.new
    snippets = @blips.values.group_by(&:quadrant).remap do |hash, key, value|
      quadrant_key =  "quadrant_#{hash.length / 2}"
      quadrant_title_key =  "quadrant_#{hash.length / 2}_title"
      hash[quadrant_key] = JSON.pretty_generate(value.sort_by(&:score).reverse.map(&:as_json))
      hash[quadrant_title_key] = key
    end
    puts snippets.keys
    template = Liquid::Template.parse(open("radar_data.js.liquid").read)
    open("radar_data.js", "w") do |out|
      out.puts template.render(snippets)
    end
  end

  def self.add_quadrant(quadrant)
    if $offset.keys.include? quadrant || $offset.length >= 4
      #ignore
    else
      $offset[quadrant] = $offset.length * 90
    end
  end

  # parse tab-separated data (exported from google doc)
  def self.parse(path)
    blips = {}
    open(path).each do |line|
      cols = line.split("\t")
      name, quadrant, score, votes, skip = cols[0], cols[1], cols[3], cols[4], cols[6]
      self.add_quadrant(quadrant)
      raise "PLEASE DELETE HEADER LINE: #{path}" if score == "AVG"
      next if skip == "TRUE"
      next if score.nil? || score.strip.empty?
      blip = Blip.new(name, quadrant, score.to_f)
      blips[blip.name] = blip
    end
    blips
  end
end

$offset = {}
files = Dir["data/*.tsv"]
radar = Radar.new(files.pop)
previous = files.pop
radar.track_moves(Radar.new(previous)) if previous
radar.render

