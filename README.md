# Motivation

At [Zalando](http://zalando.de), we maintain a [public Tech
Radar](http://zalando.github.io/tech-radar/) to help our engineering teams
align on technology choices. It is based on the [pioneering work
by ThoughtWorks](https://www.thoughtworks.com/radar).

This repository contains the code to generate the visualization:
[`radar.js`](/docs/radar.js) (based on [d3.js v4](https://d3js.org)).
Feel free to use and adapt it for your own purposes.

## Usage

1. include `d3.js` and `radar.js`:

```html
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="http://zalando.github.io/tech-radar/release/radar-0.7.js"></script>
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
    { name: "INNER",  color: "#5ba300" },
    { name: "SECOND", color: "#009eb0" },
    { name: "THIRD",  color: "#c7ba00" },
    { name: "OUTER",  color: "#e09b96" }
  ],
  print_layout: true,
  links_in_new_tabs: true,
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

Entries are positioned automatically so that they don't overlap.

As a working example, you can check out `docs/index.html` &mdash; the source of our [public Tech
Radar](http://zalando.github.io/tech-radar/).

## Deployment

Tech Radar is static, so it can be deployed as a static website to anywhere.

### Deploying to CloudFlare Pages with Authentication

If you need to have your Tech Radar accessed only by your people in your organization and not by everyone in public, there's a way to do it easily with using CloudFlare Pages.

![CloudFlare Access Login Page Example](https://blog.cloudflare.com/content/images/2020/02/multi-sso-login-2.png "CloudFlare Access Login Page Example")

> As an example, we'll use this repository's structure. So, we have a private repository for Tech Radar with index.html in it.

1. Connect your git repository to Pages and deploy. Choose framework as None and build output directory as `docs`. ( [https://developers.cloudflare.com/pages/get-started/#connect-your-git-provider-to-pages](https://developers.cloudflare.com/pages/get-started/#connect-your-git-provider-to-pages) )

2. In your just deployed Pages, go to Settings > General > and select Enable access policy.

3. Once the policy is added, click on Manage Policies and choose the just added policy.

4. Click on Overview and remove `*` from the subdomain and click Save application.

5. (optional) Add a custom domain, it can be something like `tech-radar.yourorganization.com` ( [https://developers.cloudflare.com/pages/how-to/custom-branch-aliases/](https://developers.cloudflare.com/pages/how-to/custom-branch-aliases/) ) and add ZeroTrust protection for your custom domain. ( [https://developers.cloudflare.com/cloudflare-one/applications/configure-apps/self-hosted-apps/](https://developers.cloudflare.com/cloudflare-one/applications/configure-apps/self-hosted-apps/) )

Now only the people who are allowed in your Zero Trust policies will be able to access to your Tech Radar.

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

## License

```
The MIT License (MIT)

Copyright (c) 2017-2022 Zalando SE

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
