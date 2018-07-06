export default {
    title: 'Neofonie Tech Radar — 2018.07 !!! WorkInProgress !!!',
    width: 1450,
    height: 1000,
    colors: {
        background: '#fff',
        grid:       '#bbb',
        inactive:   '#ddd'
    },
    quadrants: [
        { name: 'Platforms' },                  // 0
        { name: 'Infrastructure' },             // 1
        { name: 'Frameworks' },                 // 2
        { name: 'Data Management' }             // 3
    ],
    rings: [
        { name: 'ADOPT',  color: '#93c47d' },   // 0
        { name: 'TRIAL',  color: '#93d2c2' },   // 1
        { name: 'ASSESS', color: '#fbdb84' },   // 2
        { name: 'HOLD',   color: '#efafa9' }    // 3
    ],
    svg_id: 'radar',
    print_layout: true,
    // zoomed_quadrant: 0,
    //
    // ENTRIES
    //
    entries: [
        //
        // Platforms
        //
        {
            quadrant: 0,
            ring: 0,
            label: 'Java',
            active: false,
            moved: 0
        },
        {
            quadrant: 0,
            ring: 0,
            label: 'node.js',
            active: false,
            moved: 1
        },
        //
        // Infrastructure
        //
        {
            quadrant: 1,
            ring: 0,
            label: 'Docker',
            active: false,
            moved: 0
        },
        //
        // Frameworks
        //
        {
            quadrant: 2,
            ring: 0,
            label: 'React',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: 'Gulp',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: 'Flexbox',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: 'Sass',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 1,
            label: 'Vue.js',
            active: false,
            moved: 1
        },
        {
            quadrant: 2,
            ring: 1,
            label: 'Webpack',
            active: false,
            moved: 1
        },
        {
            quadrant: 2,
            ring: 1,
            label: 'Redux',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 1,
            label: 'jest',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 1,
            label: 'TestCafe',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 2,
            label: 'CSS-in-JS',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 2,
            label: 'CSSnext',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 2,
            label: 'Yarn',
            active: false,
            moved: -1
        },
        {
            quadrant: 2,
            ring: 2,
            label: 'CSS Grid',
            active: false,
            moved: 1
        },
        {
            quadrant: 2,
            ring: 2,
            label: 'Typescript',
            active: false,
            moved: -1
        },
        {
            quadrant: 2,
            ring: 2,
            label: 'Flow',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 2,
            label: 'Progressive Web Apps',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 2,
            label: 'Next.js',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 3,
            label: 'Backbone',
            active: false,
            moved: -1
        },
        {
            quadrant: 2,
            ring: 3,
            label: 'Bower',
            active: false,
            moved: -1
        },
        {
            quadrant: 2,
            ring: 3,
            label: 'Grunt',
            active: false,
            moved: -1
        },
        {
            quadrant: 2,
            ring: 3,
            label: 'Angular',
            active: false,
            moved: -1
        },
        {
            quadrant: 2,
            ring: 3,
            label: 'Less',
            active: false,
            moved: -1
        },
        {
            quadrant: 2,
            ring: 3,
            label: 'Coffeescript',
            active: false,
            moved: -1
        },
        //
        // Data Management
        //
        {
            quadrant: 3,
            ring: 1,
            label: 'PostgreSQL',
            active: false,
            moved: 1
        }
    ]
};
