export default {
    title: 'Neofonie Tech Radar — 2018.06 !!! WorkInProgress !!!',
    width: 1450,
    height: 1000,
    colors: {
        background: '#fff',
        grid:       '#bbb',
        inactive:   '#ddd'
    },
    quadrants: [
        { name: 'Platforms' },      // 0
        { name: 'Infrastructure' }, // 1
        { name: 'Frameworks' },     // 2
        { name: 'Data Management' } // 3
    ],
    rings: [
        { name: 'ADOPT',  color: '#93c47d' }, // 0
        { name: 'TRIAL',  color: '#93d2c2' }, // 1
        { name: 'ASSESS', color: '#fbdb84' }, // 2
        { name: 'HOLD',   color: '#efafa9' }  // 3
    ],
    svg_id: 'radar',
    print_layout: true,
    // zoomed_quadrant: 0,
    //ENTRIES
    entries: [
        {
            quadrant: 0,
            ring: 0,
            label: 'Java',
            active: false,
            moved: 0
        },
        {
            quadrant: 1,
            ring: 0,
            label: 'Docker',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: 'React',
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
            ring: 3,
            label: 'Backbone',
            active: false,
            moved: -1
        },
        {
            quadrant: 3,
            ring: 1,
            label: 'PostgreSQL',
            active: false,
            moved: 1
        }
    ]
};
