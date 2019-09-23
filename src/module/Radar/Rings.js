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

        this.items = [];
        this.data = [
            {radius: radius * 0.4}, // inner, means 40 % size
            {radius: radius * 0.58},
            {radius: radius * 0.7},
            {radius: radius * 0.8} // outer
        ];
    }

    draw() {
        const width = this.radar.target.getBoundingClientRect().width;
        const height = this.radar.target.getBoundingClientRect().height;
        this.data.forEach(r => {
            const ring = document.createElement('div');
            ring.className = 'ring';
            ring.style.width = `${r.radius * 2}px`;
            ring.style.height = `${r.radius * 2}px`;
            ring.style.borderRadius = `${r.radius}px`;
            ring.style.left = `${(width / 2)-(r.radius)}px`;
            ring.style.top = `${(height / 2)-(r.radius)}px`;
            this.items.push(ring);
            this.radar.target.append(ring);
        });
    }
};