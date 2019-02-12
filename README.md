# Motivation

At [Procore](http://procore.com), we maintain a technology radar to help our engineering teams
align on technology choices. Is is based on the [pioneering work
by ThoughtWorks](https://www.thoughtworks.com/radar).

This repository contains the code to generate the visualization:
[`radar.js`](/docs/radar.js) (based on [d3.js v4](https://d3js.org)), and was forked from work originally done by [Zalando](https://github.com/zalando/tech-radar).
Feel free to use and adapt it for your own purposes.

## Usage

1. include `d3.js`, `DOMPurify.js` and `radar.js`:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.13.0/d3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/1.0.9/purify.min.js"></script>
<script src="radar.js"></script>
```

2. insert an empty `svg` tag:

```html
<svg id="radar"></svg>
```

3. configure the radar visualization:

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
      quadrant: 3,                          // 0,1,2,3 (counting clockwise, starting from bottom right)
      ring: 2,                              // 0,1,2,3 (starting from inside)
      moved: -1,                            // -1 = moved out (triangle pointing down)
                                            //  0 = not moved (circle)
                                            //  1 = moved in  (triangle pointing up)
      description: "Some Description"       // some text or HTML to show when a legend item is clicked
   },
    // ...
  ]
});
```

Entries are positioned automatically so that they don't overlap.

## Local Development

1. install dependencies with yarn (or npm):

```
yarn
```

2. start local dev server:

### Client-side radar code
```
yarn dev
```

### Server-side Express code
```
yarn start
```
3. your default browser should automatically open and show the url

```
http://localhost:3000/
```

## Publishing

Prior to merging to master or publishing the radar.js visualization code, bump the version number:

```
yarn version [--major|--minor|--patch] [--new-version <version>]
```

A corresponding tag will be created and pushed to the remote.

### Radar Script
Changes to the radar.js visualization file can be published to gh-pages for use in other projects:
```
yarn publish:pages
```

### Radar Application
The radar application will be auto-deployed to Heroku when on push/merge to the remote master branch

## License

```
The MIT License (MIT)

Copyright (c) 2019 Procore Technologies, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
