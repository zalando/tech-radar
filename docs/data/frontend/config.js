export default {
    title: 'Frontend',
    seed: {
        from: 20,
        to: 50
    },
    colors: {
        background: '#fff',
        grid: '#e60023',
        inactive: '#ddd'
    },
    quadrants: [
        {name: 'Frameworks'},                   // 0
        {name: 'Modules'},                      // 1
        {name: 'Techniques'},                   // 2
        {name: 'Environments'}                  // 3
    ],
    rings: [
        {name: 'ADOPT', color: '#93c47d'},    // 0
        {name: 'TRIAL', color: '#93d2c2'},    // 1
        {name: 'ASSESS', color: '#fbdb84'},   // 2
        {name: 'HOLD', color: '#efafa9'}      // 3
    ],
    dot: {
        offset: {
            x: 100,
            y: 100
        }
    },
    svg_id: 'radar',
    print_layout: true
}