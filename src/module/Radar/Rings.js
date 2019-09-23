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

        this.items = [
            {radius: shortestSide / 6}, // inner
            {radius: shortestSide / 4},
            {radius: shortestSide / 3},
            {radius: shortestSide / 2.3} // outer
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
            ring.style.left = `${(width / 2)-(r.radius-10)}px`;
            ring.style.top = `${(height / 2)-(r.radius-10)}px`;
            this.radar.target.append(ring);
        });
    }
};