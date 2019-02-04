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
      quadrant: 0,
      ring: 0,
      label: "Foo",
      active: true,
      link: null,
      description: `
        Foo is the bar of baz
      `,
      moved: 0
    },
    // Infrastructure
    {
      quadrant: 1,
      ring: 0,
      label: "Bar",
      active: true,
      link: null,
      description: `
        Bar is the baz of bim
      `,
      moved: 0
    },
    // Tools
    {
      quadrant: 2,
      ring: 0,
      label: "Baz",
      active: true,
      link: null,
      description: `
        Baz is the bim of foo
      `,
      moved: 0
    },
    // Data Management
    {
      quadrant: 3,
      ring: 0,
      label: "Bim",
      active: true,
      link: null,
      description: `
        Bim is the foo of bar
      `,
      moved: 0
    }
  ]
  //ENTRIES
};

radar_visualization(config);
