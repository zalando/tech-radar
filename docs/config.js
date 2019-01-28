const QUADRANTS = {
  LANGUAGES: 0,
  INFRASTRUCTURE: 1,
  FRAMEWORKS: 2,
  DATA_MANAGEMENT: 3
};

const RINGS = {
  ADOPT: 0,
  TRIAL: 1,
  ASSESS: 2,
  HOLD: 3
};
const config = {
  svg_id: "radar",
  width: 1450,
  height: 1000,
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
      quadrant: 0,
      ring: 0,
      label: "JavaScript",
      active: true,
      link: null,
      description:
        "JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. It is the only programming language that runs natively in browsers.",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Rails",
      active: true,
      link: null,
      description: "",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "React",
      active: true,
      link: null,
      description: "",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Redux",
      active: true,
      link: null,
      description: "",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 3,
      label: "jQuery",
      active: true,
      link: null,
      description: "",
      moved: 0
    },
    // Infrastructure
    {
      quadrant: 1,
      ring: 0,
      label: "Docker",
      active: true,
      link: null,
      description: "",
      moved: 0
    },
    // Tools
    {
      quadrant: 2,
      ring: 0,
      label: "Webpack",
      active: true,
      link: null,
      description: "",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Babel",
      active: true,
      link: null,
      description: "",
      moved: 0
    },
    // Data Management
    {
      quadrant: 3,
      ring: 0,
      label: "Postgresql",
      active: true,
      link: null,
      description: "",
      moved: 0
    }
  ]
  //ENTRIES
};

radar_visualization(config);
