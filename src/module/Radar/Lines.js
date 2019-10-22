import Module from "../../Module";

export default class extends Module {
    constructor(radar) {
        super();
        this.label = 'LINES';

        this.radar = radar;
        const reference = this.radar.rings.items[3].target.getBoundingClientRect();
        const horizontal = document.createElement('div');
        horizontal.classList.add('line', 'horizontal');
        horizontal.style.top = `${reference.top + window.scrollY + (reference.height / 2)}px`;
        horizontal.style.left = `${reference.left}px`;
        horizontal.style.width = `${reference.width}px`;
        this.radar.target.append(horizontal);

        const vertical = document.createElement('div');
        vertical.classList.add('line', 'vertical');
        vertical.style.top = `${reference.top + window.scrollY}px`;
        vertical.style.left = `${reference.left + (reference.width / 2)}px`;
        vertical.style.height = `${reference.height}px`;
        this.radar.target.append(vertical);
    }

    draw() {
    }
}