import { QUADRANTS, RINGS } from "./constants.js";

const config = {
  svg_id: "radar",
  width: 1450,
  height: 1000,
  description: {
    width: 300,
    height: 300
  },
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: "Procore Tech Radar",
  quadrants: [
    { name: "Languages and Frameworks" },
    { name: "Infrastructure" },
    { name: "Tools" },
    { name: "Data Management" }
  ],
  rings: [
    { name: "ADOPT", color: "#93c47d" },
    { name: "TRIAL", color: "#93d2c2" },
    { name: "ASSESS", color: "#fbdb84" },
    { name: "HOLD", color: "#efafa9" }
  ],
  print_layout: true,
  // zoomed_quadrant: 0,
  //ENTRIES
  entries: [
    // Languages and Frameworks
    {
      quadrant: QUADRANTS.LANGUAGES,
      ring: RINGS.ADOPT,
      label: "JavaScript",
      active: true,
      link: null,
      description: `
        JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language
        with first-class functions, and is best known as the scripting language for Web pages, but
        it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm
        scripting language that is dynamic, and supports object-oriented, imperative, and functional
        programming styles. It is the only programming language that runs natively in browsers.
      `,
      moved: 0
    },
    {
      quadrant: QUADRANTS.LANGUAGES,
      ring: RINGS.ADOPT,
      label: "React",
      active: true,
      link: null,
      description: `
        <a href="http://reactjs.org">React.js</a> stands out due to its design around a reactive
        data flow. Allowing only one-way data binding greatly simplifies the rendering logic and
        avoids many of the issues that commonly plague applications written with other frameworks.
        It has become our library of choice for building user interfaces on the web.
      `,
      moved: 0
    },
    {
      quadrant: QUADRANTS.LANGUAGES,
      ring: RINGS.ADOPT,
      label: "Redux",
      active: true,
      link: null,
      description: `
        With the increasing complexity of single-page JavaScript applications, we have seen a more
        pressing need to make client-side state management predictable.
        <a href="http://redux.js.org/"><strong>Redux</strong></a>, with its
        <a href="http://redux.js.org/docs/introduction/ThreePrinciples.html">three principles</a>
        of restrictions for updating state, has proven to be invaluable in our applications.
        <a href="https://egghead.io/courses/getting-started-with-redux">Getting Started with Redux</a>
        and <a href="https://egghead.io/courses/building-react-applications-with-idiomatic-redux">idiomatic Redux</a>
        tutorials are a good starting point for new and experienced users.
        Its minimal library design has spawned a rich set of tools, and we encourage you to check
        out the <a href="https://github.com/markerikson/redux-ecosystem-links">redux-ecosystem-links</a>
        project for examples, middleware and utility libraries. We also particularly like the
        testability story: Dispatching actions, state transitions and rendering can be unit-tested
        separately from one another and with minimal amounts of mocking.
      `,
      moved: 0
    },
    {
      quadrant: QUADRANTS.LANGUAGES,
      ring: RINGS.ADOPT,
      label: "Ruby",
      active: true,
      link: null,
      description: ``,
      moved: 0
    },
    {
      quadrant: QUADRANTS.LANGUAGES,
      ring: RINGS.ADOPT,
      label: "Rails",
      active: true,
      link: null,
      description: ``,
      moved: 0
    },
    {
      quadrant: QUADRANTS.LANGUAGES,
      ring: RINGS.HOLD,
      label: "jQuery",
      active: true,
      link: null,
      description: `
        jQuery was extremely important when introduced, and instrumental in pushing the client-side
        web forward, but its role has since been filled by more robust alternatives.
      `,
      moved: 0
    },
    {
      quadrant: QUADRANTS.LANGUAGES,
      ring: RINGS.ASSESS,
      label: "TypeScript",
      active: true,
      link: null,
      description: ``
    },
    // Infrastructure
    {
      quadrant: QUADRANTS.INFRASTRUCTURE,
      ring: RINGS.ADOPT,
      label: "Docker",
      active: true,
      link: null,
      description: ``,
      moved: 0
    },
    // Tools
    {
      quadrant: QUADRANTS.TOOLS,
      ring: RINGS.ADOPT,
      label: "Webpack",
      active: true,
      link: null,
      description: `
        Webpack is the dominant tool for bundling various module formats into a format compatible with browsers. Webpack's paradigm is to treat everything as a module, using purpose-built loaders to transform non-module files into modules. It is further extensible via its plugin system.
      `,
      moved: 0
    },
    {
      quadrant: QUADRANTS.TOOLS,
      ring: RINGS.ADOPT,
      label: "Babel",
      active: true,
      link: null,
      description: `
        Babel.js has become the default compiler for writing next-generation JavaScript. Its ecosystem is huge, thanks to its plugin system. It allows developers to write ES6+ code that runs in the browser or on the server without sacrificing backward compatibility for older browsers, and with very little configuration. It has first-class support for different build-and-test systems, which makes integration with any current workflow simple. It is a great piece of software that has become the main driver of new language feature adoption and innovation.
      `,
      moved: 0
    },
    {
      quadrant: QUADRANTS.TOOLS,
      ring: RINGS.ADOPT,
      label: "Prettier",
      active: true,
      link: null,
      description: ``,
      moved: 0
    },
    {
      quadrant: QUADRANTS.TOOLS,
      ring: RINGS.ADOPT,
      label: "Jest",
      active: true,
      link: null,
      description: ``,
      moved: 0
    },
    {
      quadrant: QUADRANTS.TOOLS,
      ring: RINGS.HOLD,
      label: "Mocha",
      active: true,
      link: null,
      description: `
        Mocha is a capable and well-adopted test runner, but we have found that Jest provides a superior feature set and developer experience.
      `,
      moved: 0
    },
    // Data Management
    // Data Management
    {
      quadrant: QUADRANTS.DATA_MANAGEMENT,
      ring: RINGS.ADOPT,
      label: "Postgresql",
      active: true,
      link: null,
      description: ``,
      moved: 0
    }
  ]
  //ENTRIES
};

radar_visualization(config);
