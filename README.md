# Motivation

At Invoca, we maintain a tech radar to help our engineering teams
align on technology choices. Currently we have two radars - one on the broader tech ecosystem and 
one focused on front end technologies. We will likely combine into one once we add filtering support.

This repository was forked from [Zalando's implementation](https://github.com/zalando/tech-radar).

This repository contains the code to generate the visualization:
[`radar.js`](/docs/radar.js) (based on [d3.js v4](https://d3js.org)).
Feel free to use and adapt it for your own purposes.

## Usage

Entries are added to the `entries` field as needed, with each entry declaring its `quadrant` and `timeline`.

Entries are positioned automatically so that they don't overlap. Each entry will end up in a table
outside the radar screen and will be a link. You should create headings to match the links describing
each item on the radar. For example, "React Testing Library" will have a link to "#react-testing-library".

### Timeline

The `timeline` in each entry is to show the historic "movement" of an entry.

A brand new entry would have only one entry in its timeline, but as it moves inward or outward on the rings each movement should be a separate entry in the timeline. The first entry in the timeline is displayed. Each timeline entry captures the date of the movement, a description of the movement, and an optional "direction" via the `moved` field.

The `moved` field conforms to the following:

* `-1` means the entry has momementum or movement outward (triangle pointing down or outward from the center)
* `0` means the entry no momementum or movement (a simple circle)
* `1` means the entry has momentum or movement inward (triangle pointing up or inward to the center)

## Example

Here is an example configuration of the radar visualization:

```js
radar_visualization({
  svg_id: "radar",
  width: 1450,
  height: 1000,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: "My Radar",
  quadrants: [
    { name: "Bottom Right" },
    { name: "Bottom Left" },
    { name: "Top Left" },
    { name: "Top Right" }
  ],
  rings: [
    { name: "INNER",  color: "#93c47d" },
    { name: "SECOND", color: "#b7e1cd" },
    { name: "THIRD",  color: "#fce8b2" },
    { name: "OUTER",  color: "#f4c7c3" }
  ],
  print_layout: true,
  entries: [
   {
      label: "Some Entry",
      quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
      ring: 2,              // 0,1,2,3 (starting from inside)
      moved: -1             // -1 = moved out (triangle pointing down)
                            //  0 = not moved (circle)
                            //  1 = moved in  (triangle pointing up)
   },
    // ...
  ]
});
```

## Local Development

1. install dependencies with yarn (or npm):

```
yarn 
```

2. start local dev server:

```
yarn start
```

3. your default browser should automatically open and show the url
 
```
http://localhost:3000/
```
