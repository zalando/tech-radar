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
  title: "Example Tech Radar",
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
      label: "",
      active: true,
      link: null,
      description: ``,
      moved: 0
    },
    // Infrastructure
    {
      quadrant: QUADRANTS.INFRASTRUCTURE,
      ring: RINGS.ADOPT,
      label: "",
      active: true,
      link: null,
      description: ``,
      moved: 0
    },
    // Tools
    {
      quadrant: QUADRANTS.TOOLS,
      ring: RINGS.ADOPT,
      label: "",
      active: true,
      link: null,
      description: ``,
      moved: 0
    },
    // Data Management
    {
      quadrant: QUADRANTS.DATA_MANAGEMENT,
      ring: RINGS.ADOPT,
      label: "",
      active: true,
      link: null,
      description: ``,
      moved: 0
    }
  ]
  //ENTRIES
};

radar_visualization(config);
