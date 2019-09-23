import Module from "../../Module";
import Config from '../../../data/config.js';
import Items from '../../../data/items.js';
import Dots from './Dots.js';
import Rings from './Rings.js';
import Quadrants from './Quadrants.js';

export default class extends Module {
    constructor() {
        super();
        return new Promise((resolve, reject) => {
            this.label = 'RADAR';
            console.log(this.label, 'INIT');

            this.config = Config;
            this.data = Items;
            this.target = false;

            this.draw();

            this.rings = new Rings(this);
            this.rings.draw();

            this.quadrants = new Quadrants(this);
            this.quadrants.draw();

            this.dots = new Dots(this);
            this.dots.draw();

            this.on('ready', () => {
                resolve(this);
            });

            this.emit('ready');
        });
    }

    draw() {
        const target = document.createElement('div');
        target.id = 'radar';
        target.className = 'radar';
        document.querySelector('body').append(target);
        this.target = document.getElementById('radar');

        this.offset = {
            x: this.target.getBoundingClientRect().width / 2,
            y: this.target.getBoundingClientRect().height / 2
        };
    }
}