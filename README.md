# Flaconi Technology Radar 
This Tech Radar is built by using the [AOE Technology Radar](https://github.com/AOEpeople/aoe_technology_radar), which contains the skeleton app.

## Contribute to the Technical Radar

### Create a new Technology Radar release
For a new Technology Radar release, create a folder of the release date (YYYY-MM-DD) under `./radar`.

### Maintaining content
The items are written in Markdown (`.md`) format.

Each file has a meta header where the attributes of the item are listed:

```
---
title:      "JavaScript"
ring:       adopt
quadrant:   languages-and-frameworks
tags: [frontend, coding]
---

Text goes here. You can use **markdown** here.
```

Following front-matter attributes are possible:

- **title**: Name of the Item
- **quadrant**: Quadrant. One of `languages-and-frameworks` (for `Languages and Frameworks` quadrant),
  `methods-and-patterns`(for `Techniques` quadrant), `platforms-and-aoe-services`
  (for `Platforms` quadrant), `tools` (for `Tools` quadrant)
- **ring**: Ring section in radar. One of `trial`, `assess`, `adopt`, `stop`
- **tags**: Optional tags for filtering.
- **featured**: (Optional, default "true") If you set this to "false", the item
  will not be visible in the radar quadrants but still be available in the overview.

The name of the .md file acts as item identifier and may overwrite items with
the same name from older releases.

If an item is overwritten in a new release, the attributes from the new item are
merged with the old ones, and a new history entry is created for that item.

You can integrate images in your markdown. Put the image files in your public folder and reference them:

```
![an image](/images/an-image.png)
```

### Content Guidelines
You can update the rings and the quadrants in the `config.json` file. If you update the names of the rings and quadrants,
you will need to update the technologies .md files accordingly.

The text on the "How to use the Flaconi Technology Radar" page can be updated in the `about.md` file.

## Development

### Host the application under a sub path
To host the application under a sub path, set the environment variable `PUBLIC_URL`, e.g. "/tech-radar".
The default is `/`.

> For local development you can use `/build` and use this for the following steps.

### Build the radar
```
yarn install
yarn serve
```

Then open the Tech Radar here: http://localhost:3000/tech-radar

### Build the radar with static files
```
yarn install
yarn build
```

## Note
The Flaconi Technology Radar are built starting from the [AOE Tech Radar content](https://www.aoe.com/techradar/index.html).
If you want to build your own Technical Radar you may want to have a look at the [AOE Tech Radar GitHub repository](https://github.com/AOEpeople/aoe_technology_radar).

## License

```
The MIT License (MIT)

Copyright (c) 2025 Flaconi Gmbh

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
