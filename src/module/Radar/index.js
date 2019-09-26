import Module from "../../Module";
import Config from '../../../data/config.js';
import Items from '../../../data/items.js';
import Dots from './Dots.js';
import Rings from './Rings.js';
import Quadrants from './Quadrants.js';
import Legends from './Legends.js';
import PageTemplate from './Templates/Page.html';

export default class extends Module {
    constructor() {
        super();
        return new Promise((resolve, reject) => {
            this.label = 'RADAR';
            console.log(this.label, 'INIT');

            this.config = Config;
            this.data = Items.map((dot, index) => {
                return {
                    index: index,
                    ...dot
                }
            });

            const splash = document.createElement('div');
            splash.id = 'splash';
            splash.className = 'splash';
            document.querySelector('body').append(splash);

            const target = document.createElement('div');
            target.id = 'radar';
            target.className = 'radar';
            document.querySelector('body').append(target);
            this.target = document.getElementById('radar');

            const pageTemplate = PageTemplate({
                scope : {

                }
            });
            const page = document.createElement('div');
            page.id = 'page';
            page.className = 'page';
            page.innerHTML = pageTemplate;
            document.querySelector('body').append(page);

            this.draw();

            this.rings = new Rings(this);
            this.rings.draw();

            this.quadrants = new Quadrants(this);
            this.quadrants.draw();

            this.dots = new Dots(this);
            this.dots.draw();

            this.legends = new Legends(this);
            this.legends.draw();

            this.on('ready', () => {
                resolve(this);
            });

            this.emit('ready');
        });
    }

    draw() {
        this.offset = {
            x: this.target.getBoundingClientRect().width / 2,
            y: this.target.getBoundingClientRect().height / 2
        };
    }
}