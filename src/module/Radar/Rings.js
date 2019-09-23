import Module from "../../Module";

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

        this.items = [
            {radius: radius * 0.4}, // inner, means 40 % size
            {radius: radius * 0.6},
            {radius: radius * 0.8},
            {radius: radius}        // outer
        ];
    }

    draw() {
        this.items.forEach(r => {
            const ring = document.createElement('div');
            const width = this.radar.target.getBoundingClientRect().width;
            const height = this.radar.target.getBoundingClientRect().height;

            ring.className = 'ring';
            ring.style.width = `${r.radius * 2}px`;
            ring.style.height = `${r.radius * 2}px`;
            ring.style.borderRadius = `${r.radius}px`;
            ring.style.left = `${(width / 2)-(r.radius)}px`;
            ring.style.top = `${(height / 2)-(r.radius)}px`;
            this.radar.target.append(ring);
        });
    }
};