import Module from "../../Module";
import Dots from './Dots.js';
import Rings from './Rings.js';
import Quadrants from './Quadrants.js';
import Legends from './Legends.js';
import PageTemplate from './Templates/Page.html';

export default class extends Module {
    constructor(args) {
        super();
        return new Promise((resolve, reject) => {
            this.label = 'RADAR';
            console.log(this.label, 'INIT');

            this.config = args.config;
            this.data = args.data.map((dot, index) => {
                return {
                    index: index,
                    ...dot
                }
            });

            this.resizeTimeout = false;
            this.resizing = false;
            window.addEventListener('resize', () => {
                clearTimeout(this.resizeTimeout);
                this.resizeTimeout = setTimeout(() => {
                    this.resizeEnd();
                },500);
            });

            this.on('ready', () => {
                resolve(this);
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
                scope: {}
            });
            const page = document.createElement('div');
            page.id = 'page';
            page.className = 'page';
            page.innerHTML = pageTemplate;
            document.querySelector('body').append(page);

            this.build();
        });
    }

    destroy(){
        this.target.innerHTML = '';
    }

    build() {
        document.scrollTop = '0px';
        this.draw(true);

        this.rings = new Rings(this);
        this.rings.draw();

        this.quadrants = new Quadrants(this);
        this.quadrants.draw();

        this.dots = new Dots(this);
        this.dots.draw();

        this.dots.on('simulation-complete', () => {
            this.emit('simulation-complete', this);
        });

        this.legends = new Legends(this);
        this.legends.draw();

        this.emit('ready');
    }

    draw(only) {
        this.offset = {
            x: this.target.getBoundingClientRect().width / 2,
            y: this.target.getBoundingClientRect().height / 2
        };
        if (only === true)
            return;

        //his.rings.draw();
        //this.dots.draw();
        //this.legends.draw();
    }

    redraw(){
        console.log('>>> REDRAWING');
        this.destroy();
        this.build();
    }

    resizeStart(){
        if(this.resizing === true)
            return;

        this.resizing = true;
        console.log('>>> RESIZE STARTED');
        //...
    }

    resizeEnd() {
        this.resizing = false;
        this.redraw();
        console.log('>>> RESIZE ENDED');
    }
}