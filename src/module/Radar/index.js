import Module from "../../Module";
import Datasource from "./Datasource";
import Dots from './Dots.js';
import Rings from './Rings.js';
import Quadrants from './Quadrants.js';
import Legends from './Legends.js';
import Lines from './Lines.js';
import PageTemplate from './Templates/Page.html';

export default class extends Module {
    constructor(args) {
        super();
        return new Promise((resolve, reject) => {
            this.label = 'RADAR';
            console.log(this.label, 'INIT');

            // init the datasource
            // AND get the data index
            // AND get the config
            // AND get the data - by the data index
            new Datasource()
                .then(datasource => {
                    this.dataSource = datasource;
                    this.config = this.dataSource.config;
                    this.data = this.dataSource.data.map((dot, index) => {
                        return {
                            index: index,
                            ...dot
                        }
                    });
                    this.build();
                });

            // create some elements while datasource is am rumrödeln
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

            // this is the window resize end behavior
            this.resizeTimeout = false;
            this.resizing = false;
            window.addEventListener('resize', () => {
                clearTimeout(this.resizeTimeout);
                this.resizeStart();
                this.resizeTimeout = setTimeout(() => {
                    this.resizeEnd();
                }, 500);
            });

            this.on('ready', () => {
                resolve(this);
            });
        });
    }

    destroy() {
        this.target.innerHTML = '';
    }

    build() {
        document.scrollTop = '0px';
        document.querySelector('body').classList.remove('loading');
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

        this.lines = new Lines(this);
        this.lines.draw();

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

    redraw() {
        console.log('>>> REDRAWING');
        this.destroy();
        this.build();
    }

    resizeStart() {
        if (this.resizing === true)
            return;

        this.resizing = true;
        console.log('>>> RESIZE STARTED');
        //...
    }

    resizeEnd() {
        this.emit('resize-end', this);
        this.resizing = false;
        this.redraw();
        console.log('>>> RESIZE ENDED');
    }

    get resizing(){
        return this._resizing;
    }
    set resizing(val){
        this._resizing = val;
        this.resizing ? document.querySelector('body').classList.add('resizing') : document.querySelector('body').classList.remove('resizing');
    }
}