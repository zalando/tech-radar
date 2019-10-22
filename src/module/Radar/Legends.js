import Module from "../../Module";
import Legend from './Legend.js';

export default class extends Module {
    constructor(radar) {
        super();
        this.label = 'LEGENDS';
        this.radar = radar;

        const target = document.createElement('div');
        target.id = 'legends';
        target.className = 'legends';
        this.radar.target.append(target);
        this.target = document.getElementById('legends');

        [0, 1, 2, 3].forEach(i => {
            const legend = new Legend({
                index: i,
                radar: this.radar,
                options: {
                    label: this.radar.quadrants.items[i].label
                },
                dots: this.radar.dots.segmented[i]
            });
            this.items.push(legend);
            this.target.append(legend.target)
        });
    }

    draw() {
        this.items.forEach(legend => {
            legend.draw();
        })
    }
}
