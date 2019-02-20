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
  title: "Frontend Components Radar",
  quadrants: [
    { name: "Particles" },
    { name: "Wrench" },
    { name: "CORE" },
    { name: "CORE Labs" }
  ],
  rings: [
    { name: "STABLE", color: "#93c47d" },
    { name: "BETA", color: "#93d2c2" },
    { name: "ALPHA", color: "#fbdb84" },
    { name: "ABANDONED", color: "#efafa9" }
  ],
  print_layout: true,
  // zoomed_quadrant: 0,
  //ENTRIES
  entries: [
    // PARTICLES
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Breadcrumb",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ALPHA,
      label: "Bulk Editor",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.STABLE,
      label: "Calendar",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Checkbox",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.BETA,
      label: "Coach Marks",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "CollapsibleTabHeader",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.STABLE,
      label: "Configurable Field Set",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.STABLE,
      label: "CRUD Permissions Table",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Dashboard",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.STABLE,
      label: "Date Select",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Dialog",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.STABLE,
      label: "Feedback Banner",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.STABLE,
      label: "File Explorer",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.STABLE,
      label: "Filters",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Info Grid",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "List Adder",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "List Partial",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Modal",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.BETA,
      label: "Navigation Tiers",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Notification Bar",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.BETA,
      label: "Overflow Menu",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Paginator",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.BETA,
      label: "Phone Input",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Radio",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ALPHA,
      label: "Scoped Scroll",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ALPHA,
      label: "Search Bar",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.STABLE,
      label: "Select",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Sidebar List",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Spinner",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.BETA,
      label: "Sticky Footer",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.STABLE,
      label: "Table Row Adder",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Table View Control",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.STABLE,
      label: "Table",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Tabs",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Text Input",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.STABLE,
      label: "Tiered Select",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.BETA,
      label: "Tiny MCE",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Token",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Tooltip",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.PARTICLES,
      ring: RINGS.ABANDONED,
      label: "Uploader",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    // Wrench
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "ActionButton",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "AssigneePicker",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.STABLE,
      label: "AttachmentManager",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Batch Editor",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Bluebeam Modal Form",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Breadcrumbs",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.STABLE,
      label: "Bulk Attacher",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Button",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Callout List",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Charting",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Checkbox",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Checkbox Dropdown",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Date Picker",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.BETA,
      label: "Date Range Picker",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Dropdown Select",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Empty State",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.STABLE,
      label: "Feedback Button",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.STABLE,
      label: "File Tokens",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.STABLE,
      label: "Filters",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ALPHA,
      label: "Flip Card",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.STABLE,
      label: "FormSelect",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.STABLE,
      label: "Location Picker",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Modal",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "MultiToken Select",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.STABLE,
      label: "PayApp Table",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Quick Adder",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Paginator",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Panel",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Scrim",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Search Box",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Scroll Bar",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Token Picker",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.ABANDONED,
      label: "Sub Tabs",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.WRENCH,
      ring: RINGS.STABLE,
      label: "Wrench Indicator",
      active: true,
      link: null,
      description: '',
      moved: 0
    },

    // CORE
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Webpack",
      active: true,
      link: null,
      description: `
        Webpack is the dominant tool for bundling various module formats into a format compatible with browsers. Webpack's paradigm is to treat everything as a module, using purpose-built loaders to transform non-module files into modules. It is further extensible via its plugin system.
      `,
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Babel",
      active: true,
      link: null,
      description: `
        Babel.js has become the default compiler for writing next-generation JavaScript. Its ecosystem is huge, thanks to its plugin system. It allows developers to write ES6+ code that runs in the browser or on the server without sacrificing backward compatibility for older browsers, and with very little configuration. It has first-class support for different build-and-test systems, which makes integration with any current workflow simple. It is a great piece of software that has become the main driver of new language feature STABLEion and innovation.
      `,
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Prettier",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Jest",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.ABANDONED,
      label: "Mocha",
      active: true,
      link: null,
      description: `
        Mocha is a capable and well-STABLEed test runner, but we have found that Jest provides a superior feature set and developer experience.
      `,
      moved: 0
    },
    // Data Management
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.STABLE,
      label: "Postgresql",
      active: true,
      link: null,
      description: '',
      moved: 0
    }
  ]
};

radar_visualization(config);
