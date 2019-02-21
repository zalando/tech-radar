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
      label: "Avatar",
      active: true,
      link: null,
      description: ``,
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Badge",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Banner",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Breadcrumbs",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Button",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Calendar",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Card",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Checkbox",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Dropdown",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Empty State",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Field",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Font",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Header",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Icon",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Input",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Link",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Menu",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Modal",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Notation",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Overlay Trigger",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Pagination",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Popover",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Portal",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "RadioButton",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Search",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Segmented Controller",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Select",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Spinner",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Switch",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Table",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Tabs",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "TextArea",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Toast",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Token",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE,
      ring: RINGS.STABLE,
      label: "Tooltip",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    // CORE Labs
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.ALPHA,
      label: "Accordion",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.BETA,
      label: "Activity Feed",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.STABLE,
      label: "Bugsnag Provider",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.ABANDONED,
      label: "Card Board",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.BETA,
      label: "Content Placeholder",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.STABLE,
      label: "Date Picker",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.ALPHA,
      label: "Dropdown Select",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.STABLE,
      label: "File Attacher",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.ABANDONED,
      label: "File Explorer",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.STABLE,
      label: "File Browser",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.BETA,
      label: "File Viewer",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.STABLE,
      label: "Financials Utils",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.STABLE,
      label: "Highcharts Visuals",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.BETA,
      label: "List Viewer",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.STABLE,
      label: "Markup Toolbars",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.BETA,
      label: "Master Detail",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.STABLE,
      label: "Mentions",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.BETA,
      label: "MultiStep Manager",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.STABLE,
      label: "Pakaukau",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.STABLE,
      label: "PhraseApp Editor",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.ALPHA,
      label: "Signature Slider",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.ALPHA,
      label: "Star Rating",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.STABLE,
      label: "Toast Alert",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.ALPHA,
      label: "Tree",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
    {
      quadrant: QUADRANTS.CORE_LABS,
      ring: RINGS.STABLE,
      label: "Virtualized",
      active: true,
      link: null,
      description: '',
      moved: 0
    },
  ]
};

radar_visualization(config);
