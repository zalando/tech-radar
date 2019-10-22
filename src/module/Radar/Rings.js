import Module from "../../Module";
import Ring from './Ring.js';

export default class extends Module {
    constructor(radar) {
        super();
        this.label = 'RINGS';

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
            {radius: radius * getComputedStyle(document.documentElement).getPropertyValue('--radar-ring-0')},    // inner, means % size
            {radius: radius * getComputedStyle(document.documentElement).getPropertyValue('--radar-ring-1')},
            {radius: radius * getComputedStyle(document.documentElement).getPropertyValue('--radar-ring-2')},
            {radius: radius * getComputedStyle(document.documentElement).getPropertyValue('--radar-ring-3')}      // outer
        ];

        let i = 0;
        this.data.forEach(r => {
            const ring = new Ring({
                radar: this.radar,
                options: {
                    index: i,
                    ...this.radar.selectedRadar.rings[i],
                    radius: r.radius
                }
            });
            this.items.push(ring);
            this.radar.target.append(ring.target);
            i++;
        });
    }

    draw() {
        this.items.forEach(ring => {
            ring.draw();
        });
    }
}