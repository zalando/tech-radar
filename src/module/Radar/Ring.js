import Module from "../../Module";

export default class extends Module {
    constructor(args) {
        super();
        this.label = 'RING';

        this.radar = args.radar;
        this.radius = args.options.radius;
        this.label = args.options.label;
        this.color = args.options.color;
        this.index = this.options.index;

        this.target = document.createElement('div');
        this.target.className = 'ring';
        this.target.setAttribute('data-label',this.label);
        this.draw();
    }

    draw(){
        const width = this.radar.target.getBoundingClientRect().width;
        const height = this.radar.target.getBoundingClientRect().height;
        this.target.style.width = `${this.radius * 2}px`;
        this.target.style.height = `${this.radius * 2}px`;
        this.target.style.borderRadius = `${this.radius}px`;
        this.target.style.left = `${(width / 2)-(this.radius)}px`;
        this.target.style.top = `${(height / 2)-(this.radius)}px`;
    }
}