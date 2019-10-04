import Module from "../../Module";

export default class extends Module {
    constructor(radar) {
        super();
        this.label = 'MENU';
        console.log(this.label, 'INIT');

        this.radar = radar;
        this.items = [];
    }

    draw() {
    }
};