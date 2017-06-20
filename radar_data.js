var h = 1000;
var w = 1450;

var radar_arcs = [
  {
    "name": "ADOPT",
    "r": 130
  },
  {
    "name": "TRIAL",
    "r": 220
  },
  {
    "name": "ASSESS",
    "r": 310
  },
  {
    "name": "HOLD",
    "r": 400
  }
];

var lastUpdate = "20.06.2017";
var secondLastUpdate = "12.04.2017";

// movement:
//   t = moved (triangle)
//   c = stayed put (circle)
//
// blipSize:
//  This is optional, if you omit this property, then blip size will be 70.
//
// url:
//  This is optional, if you add it then blips will be clickable to some URL.
//
// pc: (polar coordinates)
//  r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//  t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
var radar_data = [
  {
    "quadrant": "Frameworks & Libraries",
    "left" : 45,
    "top" : 188,
    "color" : "#8FA227",
    "items" : [
  {
    "name": "React",
    "pc": {
      "r": 52,
      "t": 49
    },
    "movement": "c"
  }
]
  },
  {
    "quadrant": "Data Management",
    "left": w-300+30,
    "top" : 188,
    "color" : "#587486",
    "items" : [
  {
    "name": "Redis",
    "pc": {
      "r": 54,
      "t": 139
    },
    "movement": "c"
  }
]
  },
  {
    "quadrant": "Platforms & Infrastructure",
    "left" :45,
    "top" : (h/2 + 38),
    "color" : "#DC6F1D",
    "items" : [
  {
    "name": "Terraform",
    "pc": {
      "r": 95,
      "t": 190
    },
    "movement": "c"
  }
]
  },
  {
    "quadrant": "Languages",
    "color" : "#B70062",
    "left"  : (w-300+30),
    "top" :   (h/2 + 38),
    "items" : [
  {
    "name": "Javascript",
    "pc": {
      "r": 89,
      "t": 280
    },
    "movement": "c"
  }
]
  }
];
