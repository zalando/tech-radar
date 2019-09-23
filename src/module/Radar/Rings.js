import Module from "../../Module";
import Ring from './Ring.js';

export default class extends Module {
    constructor(radar) {
        super();
        this.label = 'RINGS';
        console.log(this.label, 'INIT');

        this.radar = radar;
        const width = this.radar.target.getBoundingClientRect().width;
        const height = this.radar.target.getBoundingClientRect().height;
        let shortestSide = height;
        if (height > width) {
            shortestSide = width;
        }
        const radius = shortestSide / 2;

        this.items = [];
        this.data = [
            {radius: radius * 0.35}, // inner, means % size
            {radius: radius * 0.55},
            {radius: radius * 0.75},
            {radius: radius * 0.9} // outer
        ];
    }

    draw() {
        let i = 0;
        this.data.forEach(r => {
            const ring = new Ring({
                radar : this.radar,
                options : {
                    ...this.radar.config.rings[i],
                    radius: r.radius
                }
            });
            this.items.push(ring);
            this.radar.target.append(ring.target);
            i++;
        });
    }
};