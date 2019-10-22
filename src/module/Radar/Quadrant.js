import Module from "../../Module";
import QuadrantTemplate from './Templates/Quadrant.html';

export default class extends Module {
    constructor(args) {
        super();
        this.label = 'QUADRANT';

        this.index = args.index;
        this.radar = args.radar;
        this.options = args.options;

        this.label = args.options.label;
        this.radial_min = args.options.radial_min;
        this.radial_max = args.options.radial_max;
        this.factor_x = args.options.factor_x;
        this.factor_y = args.options.factor_y;


        this.target = document.createElement('div');
        this.target.classList.add('quadrant');
        this.target.setAttribute('data-label',this.label);

        this.target.onmouseenter = () => {
            this.target.classList.add('active');
        };
        this.target.onmouseleave = () => {
            this.target.classList.remove('active');
        };

        this.draw();
    }

    draw() {
        this.maxDimensions = this.radar.rings.items[3].target.getBoundingClientRect();
        this.width = this.maxDimensions.width / 2;
        this.height = this.maxDimensions.height / 2;

        if (this.radial_min === -1) {
            this.left = this.maxDimensions.left;
            this.top = this.maxDimensions.top;
        }
        if (this.radial_min === -0.5) {
            this.left = this.maxDimensions.left + this.width;
            this.top = this.maxDimensions.top;
        }
        if (this.radial_min === 0.5) { // ok
            this.left = this.maxDimensions.left;
            this.top = this.maxDimensions.top + this.height;
        }
        if (this.radial_min === 0) { // ok
            this.left = this.maxDimensions.left + this.width;
            this.top = this.maxDimensions.top + this.height;
        }
        this.target.style.width = `${this.width}px`;
        this.target.style.height = `${this.height}px`;
        this.target.style.left = `${this.left}px`;
        this.target.style.top = `${this.top + window.scrollY}px`;
    }

    get index() {
        return this._index;
    }

    set index(value) {
        this._index = value;
    }
}