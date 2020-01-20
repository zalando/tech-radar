# Motivation

At KTech, we are working towards maintaining a Tech
Radar to help our engineering teams align on technology choices.
It is based on the [pioneering work
by ThoughtWorks](https://www.thoughtworks.com/radar).

This repository contains an adaptation of the open source version of
[Zalando's tech radar](https://github.com/zalando/tech-radar).

## To run

    docker-compose up

You can then view the radar on http://localhost:8080

## Local Development

This uses tbe browser-sync npm-based tool for auto-reloading when you modify the code.

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

## Backlog

### Tech backlog

* TODO Build pipeline
* TODO Rewrite this PoC (the necessary bits) into the forked Zalando codebase
* TODO Refactor Flask configuration to serve static assets more gracefully.
* TODO Figure out how to set up the links to the tech-specific pages.
* TODO Decide on final architecture; do we want to retrieve entries.json from somewhere else, for example?
* TODO Terraform to host this in AWS, including a nice URL and probably an ECS container.
* TODO Production configuration
* TODO Tests
* TODO Refactor to use Node/Express/Koa?
* TODO Find out what the "ACTIVE" column does!
* TODO Get a front end engineer and a designer to make the index page more exciting and branded properly.

### Process and culture backlog

* TODO Formulate a process for managing and updating the radar within EPG.
* TODO Write an RFC and any other accompanying documentation.
* TODO Decide on which quadrants we want to use
* TODO Decide how/when we "drop" blips off the radar

## License

```
The MIT License (MIT)

Copyright (c) 2017 Zalando SE

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
