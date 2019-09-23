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
            {radius: shortestSide / 6},
            {radius: shortestSide / 4},
            {radius: shortestSide / 3},
            {radius: shortestSide / 2}
        ];
    }

    draw() {
        this.items.forEach(r => {
            const ring = document.createElement('div');
            ring.className = 'ring';
            this.radar.target.append(ring);
        });
    }
};