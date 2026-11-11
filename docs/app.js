// TEQ Radar explorer: renders the radar as SVG and wires it to the entry list.
// No dependencies; geometry and numbering follow radar.js so blip numbers stay stable.
(function () {
  "use strict";

  var SVG_NS = "http://www.w3.org/2000/svg";

  var QUADRANTS = [
    { name: "Languages & Frameworks", short: "Languages", slug: "languages", file: "quadrant-0-languages-frameworks.json" },
    { name: "Platform & Infrastructure", short: "Platform", slug: "platform", file: "quadrant-1-platform-infrastructure.json" },
    { name: "Tools", short: "Tools", slug: "tools", file: "quadrant-2-tools.json" },
    { name: "Techniques", short: "Techniques", slug: "techniques", file: "quadrant-3-techniques.json" }
  ];

  // colors: accent/success/10, accent/tertiary/9, accent/caution/10, accent/danger/9
  // screen: brighter tone of the same hue for the dark radar screen
  // (success/9, link/hover, caution/9, brand/secondary); ink: blip number color
  var RINGS = [
    { name: "IN USE", color: "#307f35", screen: "#41ae49", ink: "#0d230f" },
    { name: "TRIAL", color: "#4766d2", screen: "#91a4e7", ink: "#16223a" },
    { name: "ASSESS", color: "#b06912", screen: "#f08f19", ink: "#301d05" },
    { name: "PHASE OUT", color: "#e20000", screen: "#f95759", ink: "#2d0000" }
  ];

  // IN USE holds most entries, so it gets the widest ring
  var RADII = [215, 295, 355, 400];
  var VIEW = 440; // half size of the full view box
  var BLIP_GAP = 25; // minimum distance between blip centers
  var AXIS_GAP = 15; // minimum distance of a blip from the axes
  var LABEL_LANE = 36; // free lane below the center for the ring names

  // quadrant angles (multiples of PI) and direction, same as radar.js
  var GEOMETRY = [
    { tMin: 0, tMax: 0.5, fx: 1, fy: 1 },
    { tMin: 0.5, tMax: 1, fx: -1, fy: 1 },
    { tMin: -1, tMax: -0.5, fx: -1, fy: -1 },
    { tMin: -0.5, tMax: 0, fx: 1, fy: -1 }
  ];

  var MOVEMENT = {
    "1": { text: "Moved in", tone: "success" },
    "-1": { text: "Moved out", tone: "caution" },
    "2": { text: "New", tone: "primary" }
  };

  var REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var $ = function (id) { return document.getElementById(id); };

  var state = { quadrant: null, query: "", hover: null, pinned: null };
  var entries = [];
  var viewBox = fullView();
  var viewAnimation = null;

  // ---------------------------------------------------------------- data

  Promise.all([
    fetchJson("config-metadata.json")
  ].concat(QUADRANTS.map(function (q) { return fetchJson("config/" + q.file); }))
  ).then(function (results) {
    var metadata = results[0];
    results.slice(1).forEach(function (data, quadrant) {
      data.entries.forEach(function (e) {
        entries.push({
          label: e.label,
          quadrant: quadrant,
          ring: e.ring,
          moved: e.moved || 0,
          link: e.link || null
        });
      });
    });
    // like the previous print layout, entries with "active": false are shown as well
    number(entries);
    place(entries);

    $("radar-date").textContent = "Edition " + metadata.date;
    renderStats();
    renderRingCards();
    renderTabs();
    renderRadar();
    renderList();
    bindControls();
    applyHash(true);
    syncLayout();
    startBeam();
    window.addEventListener("resize", syncLayout);
    document.body.classList.add("is-ready");
  }).catch(function (err) {
    $("entry-list").innerHTML = '<p class="panel__empty">The radar data could not be loaded.</p>';
    console.error("Error loading radar data", err);
  });

  function fetchJson(path) {
    return fetch(path).then(function (r) {
      if (!r.ok) { throw new Error(path + ": HTTP " + r.status); }
      return r.json();
    });
  }

  // ---------------------------------------------------------------- layout

  // reproducible pseudo random numbers (same generator as radar.js)
  var seed = 42;
  function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }
  function between(min, max) { return min + random() * (max - min); }
  function normalBetween(min, max) { return min + (random() + random()) * 0.5 * (max - min); }

  function ringInner(ring) { return ring === 0 ? 30 : RADII[ring - 1]; }

  // ids run Tools, Techniques, Platform, Languages; per ring alphabetically (as in radar.js)
  function number(list) {
    var id = 1;
    [2, 3, 1, 0].forEach(function (quadrant) {
      for (var ring = 0; ring < RINGS.length; ring++) {
        list.filter(function (e) { return e.quadrant === quadrant && e.ring === ring; })
          .sort(function (a, b) { return a.label.localeCompare(b.label); })
          .forEach(function (e) { e.id = id++; });
      }
    });
    list.sort(function (a, b) { return a.id - b.id; });
  }

  function clampToSegment(e) {
    var g = GEOMETRY[e.quadrant];
    var r = Math.sqrt(e.x * e.x + e.y * e.y);
    var t = Math.atan2(e.y, e.x);
    var rMin = ringInner(e.ring) + 13;
    var rMax = RADII[e.ring] - 13;
    r = Math.min(Math.max(r, rMin), rMax);
    var tLow = g.tMin * Math.PI;
    var tHigh = g.tMax * Math.PI;
    if (t < tLow - 0.5 || t > tHigh + 0.5) { t = (tLow + tHigh) / 2; } // wrapped around -PI/PI
    t = Math.min(Math.max(t, tLow), tHigh);
    var x = r * Math.cos(t);
    var y = r * Math.sin(t);
    // keep blips off the axes
    e.x = g.fx * Math.max(Math.abs(x), g.fy > 0 ? LABEL_LANE : AXIS_GAP);
    e.y = g.fy * Math.max(Math.abs(y), AXIS_GAP);
  }

  function place(list) {
    list.forEach(function (e) {
      var g = GEOMETRY[e.quadrant];
      var t = between(g.tMin * Math.PI, g.tMax * Math.PI);
      var r = normalBetween(ringInner(e.ring), RADII[e.ring]);
      e.x = r * Math.cos(t);
      e.y = r * Math.sin(t);
      clampToSegment(e);
    });
    // simple collision relaxation, deterministic
    for (var step = 0; step < 300; step++) {
      for (var i = 0; i < list.length; i++) {
        for (var j = i + 1; j < list.length; j++) {
          var a = list[i];
          var b = list[j];
          var dx = b.x - a.x;
          var dy = b.y - a.y;
          var d = Math.sqrt(dx * dx + dy * dy) || 0.01;
          if (d < BLIP_GAP) {
            var push = (BLIP_GAP - d) / 2;
            var ux = dx / d;
            var uy = dy / d;
            a.x -= ux * push; a.y -= uy * push;
            b.x += ux * push; b.y += uy * push;
          }
        }
      }
      list.forEach(clampToSegment);
    }
  }

  // ---------------------------------------------------------------- helpers

  function svg(tag, attrs, parent) {
    var node = document.createElementNS(SVG_NS, tag);
    Object.keys(attrs || {}).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    if (parent) { parent.appendChild(node); }
    return node;
  }

  function html(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (text !== undefined) { node.textContent = text; }
    return node;
  }

  function badge(moved) {
    var m = MOVEMENT[String(moved)];
    if (!m) { return null; }
    return html("span", "badge badge--" + m.tone, m.text);
  }

  function fullView() { return [-VIEW, -VIEW, 2 * VIEW, 2 * VIEW]; }

  function quadrantView(q) {
    var g = GEOMETRY[q];
    var pad = 30; // keep blips next to the axes fully visible
    var size = VIEW + pad;
    return [g.fx > 0 ? -pad : -VIEW, g.fy > 0 ? -pad : -VIEW, size, size];
  }

  function matches(e) {
    if (state.quadrant !== null && e.quadrant !== state.quadrant) { return false; }
    if (!state.query) { return true; }
    var q = state.query.toLowerCase();
    return e.label.toLowerCase().indexOf(q) !== -1 || String(e.id) === q;
  }

  // ---------------------------------------------------------------- stats & rings

  function renderStats() {
    var moved = entries.filter(function (e) { return e.moved === 1 || e.moved === -1; }).length;
    var fresh = entries.filter(function (e) { return e.moved === 2; }).length;
    $("stat-total").textContent = entries.length;
    $("stat-moved").textContent = moved;
    $("stat-new").textContent = fresh;

    var bar = $("ring-bar");
    var legend = $("ring-bar-legend");
    RINGS.forEach(function (ring, i) {
      var count = entries.filter(function (e) { return e.ring === i; }).length;
      var seg = html("span", "ring-bar__segment");
      seg.style.flexGrow = count;
      seg.style.backgroundColor = ring.screen;
      seg.title = ring.name + ": " + count;
      bar.appendChild(seg);

      var item = html("li", "ring-bar__item");
      var dot = html("span", "dot");
      dot.style.backgroundColor = ring.screen;
      dot.style.color = ring.screen;
      item.appendChild(dot);
      item.appendChild(document.createTextNode(ring.name + " "));
      item.appendChild(html("strong", null, String(count)));
      legend.appendChild(item);
    });
  }

  function renderRingCards() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-ring-card]"), function (card) {
      var i = Number(card.getAttribute("data-ring-card"));
      var count = entries.filter(function (e) { return e.ring === i; }).length;
      card.style.setProperty("--ring-color", RINGS[i].screen);
      card.querySelector(".ring-card__count").textContent = count + (count === 1 ? " technology" : " technologies");
    });
  }

  // ---------------------------------------------------------------- tabs

  function renderTabs() {
    var list = $("quadrant-tabs");
    var tabs = [{ label: "All", value: null }].concat(QUADRANTS.map(function (q, i) {
      return { label: q.short, value: i, title: q.name };
    }));
    tabs.forEach(function (t) {
      var b = html("button", "tabs__trigger", t.label);
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-controls", "radar-stage");
      b.setAttribute("data-quadrant", t.value === null ? "" : t.value);
      if (t.title) { b.title = t.title; }
      list.appendChild(b);
    });
    syncTabs();
  }

  function syncTabs() {
    Array.prototype.forEach.call(document.querySelectorAll(".tabs__trigger"), function (b) {
      var v = b.getAttribute("data-quadrant");
      var selected = (v === "" ? null : Number(v)) === state.quadrant;
      b.setAttribute("aria-selected", selected ? "true" : "false");
      b.tabIndex = selected ? 0 : -1;
    });
  }

  function setQuadrant(q, fromHash) {
    if (q === state.quadrant) { return; }
    state.quadrant = q;
    syncTabs();
    animateView(q === null ? fullView() : quadrantView(q));
    $("radar").classList.toggle("is-zoomed", q !== null);
    if (!fromHash) {
      var hash = q === null ? "" : "#" + QUADRANTS[q].slug;
      history.replaceState(null, "", location.pathname + location.search + hash);
    }
    if (state.pinned && !matches(byId(state.pinned))) { state.pinned = null; }
    hideTooltip();
    refresh();
  }

  function applyHash(initial) {
    var slug = location.hash.replace("#", "");
    var q = null;
    QUADRANTS.forEach(function (quadrant, i) { if (quadrant.slug === slug) { q = i; } });
    if (initial && q !== null) {
      // jump without animation on first load
      state.quadrant = q;
      setView(quadrantView(q));
      $("radar").classList.add("is-zoomed");
      syncTabs();
      refresh();
    } else {
      setQuadrant(q, true);
    }
  }

  // ---------------------------------------------------------------- radar

  var WIDE = window.matchMedia("(min-width: 1200px)");
  var MIN_EXPLORER_HEIGHT = 680;

  // on wide screens radar and list fill the rest of the first screen and the
  // radar card is as wide as the radar (see radar.css)
  function syncLayout() {
    var stage = $("radar-stage");
    var explorer = $("explorer");
    if (WIDE.matches) {
      var top = explorer.getBoundingClientRect().top + window.pageYOffset;
      explorer.style.height = Math.max(MIN_EXPLORER_HEIGHT, Math.round(window.innerHeight - top)) + "px";
      var cs = getComputedStyle(stage);
      var h = stage.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      explorer.style.setProperty("--radar-size", Math.max(320, Math.round(h)) + "px");
    } else {
      explorer.style.removeProperty("--radar-size");
      explorer.style.removeProperty("height");
    }
  }

  function setView(box) {
    viewBox = box;
    $("radar").setAttribute("viewBox", box.join(" "));
  }

  function animateView(target) {
    if (viewAnimation) { cancelAnimationFrame(viewAnimation); }
    if (REDUCED_MOTION) { setView(target); return; }
    var start = viewBox.slice();
    var t0 = performance.now();
    var duration = 550;
    var frame = function (now) {
      var p = Math.min(1, (now - t0) / duration);
      var k = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      setView(start.map(function (v, i) { return v + (target[i] - v) * k; }));
      viewAnimation = p < 1 ? requestAnimationFrame(frame) : null;
      if (!viewAnimation && (state.hover || state.pinned)) { focusEntry(state.hover || state.pinned, false); }
    };
    viewAnimation = requestAnimationFrame(frame);
  }

  function starPath(outer, inner) {
    var points = [];
    for (var i = 0; i < 10; i++) {
      var r = i % 2 ? inner : outer;
      var a = -Math.PI / 2 + i * Math.PI / 5;
      points.push((r * Math.cos(a)).toFixed(2) + "," + (r * Math.sin(a)).toFixed(2));
    }
    return "M" + points.join(" ") + "z";
  }

  function polarPoint(r, bearing) {
    var t = (bearing - 90) * Math.PI / 180;
    return [r * Math.cos(t), r * Math.sin(t)];
  }

  function sectorPath(q, ring) {
    var g = GEOMETRY[q];
    var t0 = g.tMin * Math.PI;
    var t1 = g.tMax * Math.PI;
    var R = RADII[ring];
    var r = ring === 0 ? 0 : RADII[ring - 1];
    var p = function (rad, t) { return (rad * Math.cos(t)).toFixed(1) + "," + (rad * Math.sin(t)).toFixed(1); };
    return "M" + p(R, t0) + "A" + R + "," + R + " 0 0,1 " + p(R, t1) +
      "L" + p(r, t1) + (r ? "A" + r + "," + r + " 0 0,0 " + p(r, t0) : "") + "z";
  }

  var fx = {};

  function renderRadar() {
    var root = $("radar");
    setView(viewBox);

    var grid = svg("g", { "class": "radar__grid" }, root);
    // ring bands (annuli), tinted in the ring color
    var circlePath = function (r) { return "M" + r + ",0A" + r + "," + r + " 0 1,0 " + -r + ",0A" + r + "," + r + " 0 1,0 " + r + ",0z"; };
    RADII.forEach(function (r, i) {
      var d = circlePath(r) + (i > 0 ? circlePath(RADII[i - 1]) : "");
      svg("path", { d: d, fill: RINGS[i].screen, "fill-rule": "evenodd", "class": "radar__band" }, grid);
      svg("circle", { r: r, "class": "radar__ring" }, grid);
    });
    svg("line", { x1: -RADII[3], y1: 0, x2: RADII[3], y2: 0, "class": "radar__axis" }, grid);
    svg("line", { x1: 0, y1: -RADII[3], x2: 0, y2: RADII[3], "class": "radar__axis" }, grid);

    // range ticks on the axes and a bearing scale around the outer ring
    var ticks = "";
    for (var d = 10; d < RADII[3]; d += 10) {
      var len = d % 50 === 0 ? 5 : 2.5;
      ticks += "M" + d + "," + -len + "v" + 2 * len + "M" + -d + "," + -len + "v" + 2 * len +
        "M" + -len + "," + d + "h" + 2 * len + "M" + -len + "," + -d + "h" + 2 * len;
    }
    for (var b = 0; b < 360; b += 5) {
      var inner = polarPoint(RADII[3], b);
      var outer = polarPoint(RADII[3] + (b % 30 === 0 ? 9 : 4), b);
      ticks += "M" + inner[0].toFixed(1) + "," + inner[1].toFixed(1) + "L" + outer[0].toFixed(1) + "," + outer[1].toFixed(1);
    }
    svg("path", { d: ticks, "class": "radar__ticks" }, grid);
    for (var deg = 0; deg < 360; deg += 30) {
      if (deg % 90 === 0) { continue; }
      var at = polarPoint(RADII[3] + 19, deg);
      var bt = svg("text", { x: at[0].toFixed(1), y: at[1].toFixed(1), "class": "radar__bearing" }, grid);
      bt.textContent = ("00" + deg).slice(-3);
    }

    // sector highlight and range line of the locked entry, below the blips
    fx.sector = svg("path", { "class": "fx__sector", d: "" }, root);
    fx.rangeCircle = svg("circle", { "class": "fx__range-circle", r: 0 }, root);
    fx.rangeLine = svg("line", { "class": "fx__range-line", x1: 0, y1: 0, x2: 0, y2: 0 }, root);

    // radar beam: a bright leading edge with a fading trail of thin wedges
    fx.beam = svg("g", { "class": "fx__beam" }, root);
    var slices = 28;
    for (var k = 0; k < slices; k++) {
      var a0 = polarPoint(RADII[3], -k * 2);
      var a1 = polarPoint(RADII[3], -(k + 1) * 2);
      svg("path", {
        d: "M0,0L" + a0[0].toFixed(1) + "," + a0[1].toFixed(1) + "A" + RADII[3] + "," + RADII[3] + " 0 0,0 " + a1[0].toFixed(1) + "," + a1[1].toFixed(1) + "z",
        "fill-opacity": (0.26 * Math.pow(1 - k / slices, 2.2)).toFixed(3)
      }, fx.beam);
    }
    svg("line", { x1: 0, y1: 0, x2: 0, y2: -RADII[3], "class": "fx__beam-edge" }, fx.beam);

    // ring names follow the bottom of each ring band (the less crowded half),
    // so narrow outer rings still have room for them; blips keep a lane free
    var labels = svg("g", { "class": "radar__ring-labels" }, root);
    var defs = svg("defs", {}, root);
    RINGS.forEach(function (ring, i) {
      var mid = (RADII[i] + (i === 0 ? RADII[0] * 0.55 : RADII[i - 1])) / 2;
      svg("path", { id: "ring-arc-" + i, d: "M" + -mid + ",0A" + mid + "," + mid + " 0 0,0 " + mid + ",0" }, defs);
      var t = svg("text", { fill: ring.screen, "class": "radar__ring-label" }, labels);
      var tp = svg("textPath", { href: "#ring-arc-" + i, startOffset: "50%" }, t);
      tp.textContent = ring.name;
    });

    // quadrant names in the corners
    QUADRANTS.forEach(function (q, i) {
      var g = GEOMETRY[i];
      var t = svg("text", {
        x: g.fx * (VIEW - 12),
        y: g.fy > 0 ? VIEW - 14 : -VIEW + 34,
        "text-anchor": g.fx > 0 ? "end" : "start",
        "class": "radar__quadrant-label",
        "data-quadrant": i
      }, root);
      t.textContent = q.name;
    });

    var layer = svg("g", { "class": "radar__blips" }, root);
    entries.forEach(function (e, index) {
      var ring = RINGS[e.ring];
      e.bearing = (Math.atan2(e.x, -e.y) * 180 / Math.PI + 360) % 360;
      e.range = Math.sqrt(e.x * e.x + e.y * e.y) / RADII[3];
      var g = svg("g", {
        "class": "blip",
        transform: "translate(" + e.x.toFixed(1) + "," + e.y.toFixed(1) + ")",
        "data-id": e.id
      }, layer);
      var lens = svg("g", { "class": "blip__lens" }, g);
      var body = svg("g", { "class": "blip__body" }, lens);
      body.style.setProperty("--delay", (350 + e.ring * 140 + (index % 14) * 18) + "ms");
      e.halo = svg("circle", { r: 15, fill: ring.screen, "class": "blip__halo" }, body);
      var textY = 0.5;
      if (e.moved === 1) {
        svg("path", { d: "M-12.5,7 12.5,7 0,-14.5z", fill: ring.screen }, body);
        textY = 2.5;
      } else if (e.moved === -1) {
        svg("path", { d: "M-12.5,-7 12.5,-7 0,14.5z", fill: ring.screen }, body);
        textY = -2;
      } else if (e.moved === 2) {
        svg("path", { d: starPath(15, 7.5), fill: ring.screen }, body);
        textY = 1.5;
      } else {
        svg("circle", { r: 11, fill: ring.screen }, body);
      }
      var label = svg("text", { y: textY, fill: ring.ink, "class": "blip__number" }, body);
      label.textContent = e.id;
      e.node = g;
      e.lens = lens;
      e.body = body;
    });

    // lock-on reticle (rebuilt on every lock so its animation restarts)
    fx.reticleLayer = svg("g", { "class": "fx__reticle-layer" }, root);

    // cursor crosshair
    fx.cursor = svg("g", { "class": "fx__cursor" }, root);
    svg("line", { x1: -2000, x2: 2000, y1: 0, y2: 0 }, fx.cursor);
    svg("line", { x1: 0, x2: 0, y1: -2000, y2: 2000 }, fx.cursor);
    svg("circle", { r: 6 }, fx.cursor);
  }

  // ---------------------------------------------------------------- effects

  // lock-on: sector glow, range line, reticle with sonar pings
  function lockOn(e) {
    if (fx.locked === e.id) { return; }
    fx.locked = e.id;
    var root = $("radar");
    root.style.setProperty("--lock-color", RINGS[e.ring].screen);
    fx.sector.setAttribute("d", sectorPath(e.quadrant, e.ring));
    fx.rangeCircle.setAttribute("r", (e.range * RADII[3]).toFixed(1));
    fx.rangeLine.setAttribute("x2", e.x.toFixed(1));
    fx.rangeLine.setAttribute("y2", e.y.toFixed(1));
    root.classList.add("is-locked");

    fx.reticleLayer.innerHTML = "";
    var r = svg("g", { "class": "reticle", transform: "translate(" + e.x.toFixed(1) + "," + e.y.toFixed(1) + ")" }, fx.reticleLayer);
    svg("circle", { r: 13, "class": "reticle__ping" }, r);
    svg("circle", { r: 13, "class": "reticle__ping reticle__ping--late" }, r);
    var spin = svg("g", { "class": "reticle__spin" }, r);
    svg("circle", { r: 22, "class": "reticle__ring" }, spin);
    var brackets = svg("g", { "class": "reticle__brackets" }, r);
    svg("path", { d: "M-27,-17V-27H-17M17,-27H27V-17M27,17V27H17M-17,27H-27V17" }, brackets);
  }

  function release() {
    if (!fx.locked) { return; }
    fx.locked = null;
    $("radar").classList.remove("is-locked");
    fx.reticleLayer.innerHTML = "";
  }

  // text decode effect for the HUD label
  var GLYPHS = "<>/[]{}=+*#%01ABCDEFXYZ";
  function decode(el, text) {
    if (el.decodeFrame) { cancelAnimationFrame(el.decodeFrame); }
    if (REDUCED_MOTION) { el.textContent = text; return; }
    var t0 = performance.now();
    var duration = 380;
    var step = function (now) {
      var p = Math.min(1, (now - t0) / duration);
      var shown = Math.floor(p * text.length);
      var out = text.slice(0, shown);
      for (var i = shown; i < text.length; i++) {
        out += text[i] === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      el.textContent = out;
      el.decodeFrame = p < 1 ? requestAnimationFrame(step) : null;
    };
    el.decodeFrame = requestAnimationFrame(step);
  }

  // radar beam: rotates continuously, blips ping when it passes them
  var BEAM_PERIOD = 6500;
  function startBeam() {
    if (REDUCED_MOTION) { fx.beam.style.display = "none"; return; }
    var angle = 0;
    var last = null;
    var frame = function (now) {
      if (last !== null) {
        var prev = angle;
        angle = (angle + (now - last) * 360 / BEAM_PERIOD) % 360;
        fx.beam.setAttribute("transform", "rotate(" + angle.toFixed(2) + ")");
        var wrapped = angle < prev;
        entries.forEach(function (e) {
          var hit = wrapped ? (e.bearing > prev || e.bearing <= angle) : (e.bearing > prev && e.bearing <= angle);
          if (hit) { ping(e); }
        });
      }
      last = now;
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  function ping(e) {
    if (!e.halo.animate) { return; }
    e.halo.animate([
      { transform: "scale(0.8)", opacity: 0.85 },
      { transform: "scale(2.4)", opacity: 0 }
    ], { duration: 1200, easing: "cubic-bezier(0.2, 0.9, 0.2, 1)" });
    e.body.animate([
      { filter: "brightness(1.9)" },
      { filter: "brightness(1)" }
    ], { duration: 900, easing: "ease-out" });
  }

  // magnifier around the cursor, crosshair and coordinate readout
  var lensFrame = null;
  function onRadarMove(ev) {
    if (ev.pointerType && ev.pointerType !== "mouse") { return; }
    var root = $("radar");
    var ctm = root.getScreenCTM();
    if (!ctm) { return; }
    var pt = root.createSVGPoint();
    pt.x = ev.clientX;
    pt.y = ev.clientY;
    var p = pt.matrixTransform(ctm.inverse());
    if (lensFrame) { cancelAnimationFrame(lensFrame); }
    lensFrame = requestAnimationFrame(function () {
      lensFrame = null;
      var radius = 85 * viewBox[2] / (2 * VIEW);
      var nearest = null;
      var nearestD = 20; // hit radius in radar units, independent of the magnifier
      entries.forEach(function (e) {
        var d = Math.sqrt((e.x - p.x) * (e.x - p.x) + (e.y - p.y) * (e.y - p.y));
        var s = d < radius ? 1 + 0.6 * Math.pow(1 - d / radius, 2) : 1;
        e.lens.style.transform = s > 1.001 ? "scale(" + s.toFixed(3) + ")" : "";
        if (d < nearestD && matches(e)) { nearest = e; nearestD = d; }
      });
      setHover(nearest ? nearest.id : null);
      fx.cursor.setAttribute("transform", "translate(" + p.x.toFixed(1) + "," + p.y.toFixed(1) + ")");
      root.classList.add("has-cursor");
      readout(p.x, p.y);
    });
  }

  function onRadarLeave() {
    if (lensFrame) { cancelAnimationFrame(lensFrame); lensFrame = null; }
    entries.forEach(function (e) { e.lens.style.transform = ""; });
    $("radar").classList.remove("has-cursor");
    $("radar-readout").classList.remove("is-visible");
  }

  function readout(x, y) {
    var r = Math.sqrt(x * x + y * y);
    var bearing = (Math.atan2(x, -y) * 180 / Math.PI + 360) % 360;
    var where = "OUT OF RANGE";
    if (r <= RADII[3]) {
      var ring = 0;
      while (r > RADII[ring]) { ring++; }
      var q = x >= 0 ? (y >= 0 ? 0 : 3) : (y >= 0 ? 1 : 2);
      where = RINGS[ring].name + " / " + QUADRANTS[q].short.toUpperCase();
    }
    var el = $("radar-readout");
    el.textContent = "BRG " + ("00" + bearing.toFixed(1)).slice(-5) + "°   RNG " + (r / RADII[3]).toFixed(2) + "   " + where;
    el.classList.add("is-visible");
  }

  // ---------------------------------------------------------------- list

  function renderList() {
    var list = $("entry-list");
    list.innerHTML = "";
    RINGS.forEach(function (ring, i) {
      var group = html("section", "group");
      group.setAttribute("data-ring", i);
      var title = html("h3", "group__title");
      var dot = html("span", "dot");
      dot.style.backgroundColor = ring.screen;
      title.appendChild(dot);
      title.appendChild(document.createTextNode(ring.name));
      title.appendChild(html("span", "group__count"));
      group.appendChild(title);
      var ul = html("ul", "group__list");
      entries.filter(function (e) { return e.ring === i; }).forEach(function (e) {
        var li = html("li", "entry");
        li.style.setProperty("--c", ring.screen);
        li.setAttribute("data-id", e.id);
        var button = html("button", "entry__main");
        button.type = "button";
        button.setAttribute("data-id", e.id);
        var num = html("span", "entry__num", String(e.id));
        num.style.backgroundColor = ring.screen;
        num.style.color = ring.ink;
        button.appendChild(num);
        var text = html("span", "entry__text");
        text.appendChild(html("span", "entry__label", e.label));
        text.appendChild(html("span", "entry__quadrant", QUADRANTS[e.quadrant].name));
        button.appendChild(text);
        var b = badge(e.moved);
        if (b) { button.appendChild(b); }
        li.appendChild(button);
        if (e.link) {
          var a = html("a", "entry__link");
          a.href = e.link;
          a.target = "_blank";
          a.rel = "noopener";
          a.setAttribute("aria-label", "Open " + e.label + " website");
          a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>';
          li.appendChild(a);
        }
        e.row = li;
        ul.appendChild(li);
      });
      group.appendChild(ul);
      list.appendChild(group);
    });
    refresh();
  }

  // ---------------------------------------------------------------- state -> view

  function byId(id) {
    for (var i = 0; i < entries.length; i++) { if (entries[i].id === id) { return entries[i]; } }
    return null;
  }

  function refresh() {
    var visible = 0;
    entries.forEach(function (e) {
      var ok = matches(e);
      if (ok) { visible++; }
      e.row.hidden = !ok;
      e.node.classList.toggle("is-dimmed", !ok);
    });
    Array.prototype.forEach.call(document.querySelectorAll("#entry-list .group"), function (group) {
      var ring = Number(group.getAttribute("data-ring"));
      var count = entries.filter(function (e) { return e.ring === ring && matches(e); }).length;
      group.hidden = count === 0;
      group.querySelector(".group__count").textContent = count;
    });
    $("radar").classList.toggle("is-filtered", !!state.query);
    $("result-count").textContent = visible + (visible === 1 ? " technology" : " technologies") +
      (state.quadrant === null ? "" : " in " + QUADRANTS[state.quadrant].name);
    $("empty-state").hidden = visible > 0;
    focusEntry(state.hover || state.pinned, false);
  }

  function focusEntry(id, scroll) {
    var root = $("radar");
    root.classList.toggle("has-focus", !!id);
    entries.forEach(function (e) {
      var on = e.id === id;
      e.node.classList.toggle("is-focus", on);
      e.row.classList.toggle("is-focus", on);
      e.row.classList.toggle("is-pinned", e.id === state.pinned);
    });
    var e = id ? byId(id) : null;
    if (e && !e.row.hidden) {
      lockOn(e);
      showTooltip(e);
      if (scroll) { scrollIntoList(e.row); }
    } else {
      release();
      hideTooltip();
    }
  }

  function scrollIntoList(row) {
    var list = $("entry-list");
    var top = row.offsetTop - list.offsetTop;
    if (top < list.scrollTop || top + row.offsetHeight > list.scrollTop + list.clientHeight) {
      list.scrollTo({ top: top - list.clientHeight / 3, behavior: REDUCED_MOTION ? "auto" : "smooth" });
    }
  }

  // HUD next to the locked blip, flips to the left near the right edge
  function showTooltip(e) {
    var tip = $("radar-tooltip");
    var stage = $("radar-stage").getBoundingClientRect();
    var blip = e.node.getBoundingClientRect();
    var ring = RINGS[e.ring];
    var move = MOVEMENT[String(e.moved)];
    if (tip.getAttribute("data-id") !== String(e.id)) {
      tip.setAttribute("data-id", e.id);
      tip.innerHTML = "";
      tip.style.setProperty("--hud-color", ring.screen);
      var head = html("div", "hud__head");
      head.appendChild(html("span", null, "TGT " + ("00" + e.id).slice(-3)));
      head.appendChild(html("span", "hud__ring", ring.name));
      tip.appendChild(head);
      var label = html("strong", "hud__label", e.label);
      tip.appendChild(label);
      var dl = html("dl", "hud__data");
      [
        ["SECTOR", QUADRANTS[e.quadrant].name],
        ["BEARING", e.bearing.toFixed(1) + "°"],
        ["RANGE", e.range.toFixed(2)],
        ["STATUS", move ? (e.moved === 2 ? "★ " : e.moved === 1 ? "▲ " : "▼ ") + move.text : "● No change"]
      ].forEach(function (row) {
        dl.appendChild(html("dt", null, row[0]));
        dl.appendChild(html("dd", null, row[1]));
      });
      tip.appendChild(dl);
      decode(label, e.label);
    }
    var cx = blip.left + blip.width / 2 - stage.left;
    var cy = blip.top + blip.height / 2 - stage.top;
    var gap = 36; // distance between blip and HUD
    var edge = 8; // minimum distance to the stage border
    var w = tip.offsetWidth;
    var h = tip.offsetHeight;
    var right = cx + gap + w <= stage.width - edge;
    var left = cx - gap - w >= edge;
    tip.classList.toggle("is-flipped", !right && left);
    tip.classList.toggle("is-stacked", !right && !left);
    if (right || left) {
      // beside the blip, vertically centered on it
      tip.style.left = cx + "px";
      tip.style.top = clamp(cy, h / 2 + edge, stage.height - h / 2 - edge) + "px";
    } else {
      // narrow screens: centered below the blip, or above it when there is no room
      var below = cy + gap + h <= stage.height - edge;
      tip.style.left = clamp(cx - w / 2, edge, stage.width - w - edge) + "px";
      tip.style.top = clamp(below ? cy + gap : cy - gap - h, edge, stage.height - h - edge) + "px";
    }
    tip.classList.add("is-visible");
  }

  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

  function hideTooltip() {
    var tip = $("radar-tooltip");
    tip.classList.remove("is-visible");
    tip.removeAttribute("data-id");
  }

  // ---------------------------------------------------------------- events

  function idFrom(target) {
    var node = target.closest ? target.closest("[data-id]") : null;
    return node ? Number(node.getAttribute("data-id")) : null;
  }

  function setHover(id) {
    if (id === state.hover) { return; }
    state.hover = id;
    focusEntry(id || state.pinned, false);
  }

  function pin(id, scroll) {
    state.pinned = state.pinned === id ? null : id;
    focusEntry(state.pinned, scroll);
  }

  function bindControls() {
    var radar = $("radar");
    var list = $("entry-list");

    radar.addEventListener("pointerleave", function () { setHover(null); onRadarLeave(); });
    radar.addEventListener("pointermove", onRadarMove);
    radar.addEventListener("click", function (ev) {
      var quadrantLabel = ev.target.closest(".radar__quadrant-label");
      if (quadrantLabel) {
        var q = Number(quadrantLabel.getAttribute("data-quadrant"));
        setQuadrant(state.quadrant === q ? null : q);
        return;
      }
      var id = state.hover || idFrom(ev.target);
      if (id && matches(byId(id))) { pin(id, true); } else if (state.pinned) { pin(state.pinned, false); }
    });

    list.addEventListener("pointerover", function (ev) { setHover(idFrom(ev.target)); });
    list.addEventListener("pointerleave", function () { setHover(null); });
    list.addEventListener("focusin", function (ev) { setHover(idFrom(ev.target)); });
    list.addEventListener("focusout", function () { setHover(null); });
    list.addEventListener("click", function (ev) {
      if (ev.target.closest(".entry__link")) { return; }
      var id = idFrom(ev.target);
      if (id) { pin(id, false); }
    });

    var search = $("search");
    search.addEventListener("input", function () {
      state.query = search.value.trim();
      refresh();
    });

    var tabs = $("quadrant-tabs");
    tabs.addEventListener("click", function (ev) {
      var b = ev.target.closest(".tabs__trigger");
      if (!b) { return; }
      var v = b.getAttribute("data-quadrant");
      setQuadrant(v === "" ? null : Number(v));
    });
    tabs.addEventListener("keydown", function (ev) {
      if (ev.key !== "ArrowRight" && ev.key !== "ArrowLeft") { return; }
      var buttons = Array.prototype.slice.call(tabs.querySelectorAll(".tabs__trigger"));
      var current = buttons.indexOf(document.activeElement);
      var next = buttons[(current + (ev.key === "ArrowRight" ? 1 : -1) + buttons.length) % buttons.length];
      next.focus();
      next.click();
      ev.preventDefault();
    });

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") {
        if (document.activeElement === search && search.value) {
          search.value = "";
          state.query = "";
          refresh();
        } else if (state.pinned) {
          pin(state.pinned, false);
        } else if (state.quadrant !== null) {
          setQuadrant(null);
        }
      }
    });

    window.addEventListener("hashchange", function () { applyHash(false); });
    window.addEventListener("resize", function () {
      var id = state.hover || state.pinned;
      if (id) { showTooltip(byId(id)); }
    });
  }
})();
