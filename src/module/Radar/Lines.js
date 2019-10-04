import Module from "../../Module";

export default class extends Module {
    constructor(radar) {
        super();
        this.label = 'LINES';
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
    }

    draw() {
    }
};