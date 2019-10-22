import Module from "../../Module";
import Datasource from "./Datasource";
import Dots from './Dots.js';
import Fork from './Fork.js';
import Rings from './Rings.js';
import Quadrants from './Quadrants.js';
import Legends from './Legends.js';
import Lines from './Lines.js';
import Menu from './Menu.js';
import Print from './Print.js';
import Controls from './Controls.js';
import Auth from './Auth.js';
import RadarForm from './Form/Radar.js';
import DatasetForm from './Form/Dataset.js';
import PageTemplate from './Templates/Page.html';

export default class extends Module {
    constructor(args) {
        super();
        return new Promise((resolve, reject) => {
            this.label = 'RADAR';

            // set the server mode on or off here
            // or with a window global variable RADAROPTIONS.serverMode
            this.serverMode = false;
            if(window.RADAROPTIONS)
                if(window.RADAROPTIONS.serverMode)
                    this.serverMode = RADAROPTIONS.serverMode;

            this.controls = new Controls(this);

            // init the datasource
            // AND get the data index
            // AND get the config
            // AND get the data - by the data index
            new Datasource(this)
                .then(datasource => {
                    this.dataSource = datasource;
                    this.selectedRadar = this.dataSource.selectedRadar;     // empty on init
                    this.data = this.dataSource.data;                       // empty on init

                    // we need the data index
                    this.menu = new Menu(this);

                    // only in server mode some element will be available
                    if (this.dataSource.serverMode === true) {
                        this.auth = new Auth(this);
                        this.auth.on('login', () => {
                            console.log(this.label, 'LOGIN');
                            this.menu.admin = true;
                        });
                        this.auth.on('logout', () => {
                            console.log(this.label, 'LOGOUT');
                            this.menu.admin = false;
                        });
                        this.radarForm = new RadarForm(this);
                        this.datasetForm = new DatasetForm(this);
                    }

                    // the radar change
                    this.menu.on('version-selected', (id, version) => this.selectVersion(id, version));

                    this.on('version-selected', (id, version) => {
                        console.log('>>>', this.label.padStart(15, ' '), '>', 'ON VERSION SELECTED', id, version);
                        this.controls.setHash(this.dataSource.selectedRadar.id, this.dataSource.radarVersion);
                        this.menu.drawVersion(this.dataSource.selectedRadar.id, this.dataSource.radarVersion);
                        this.title = `${this.dataSource.selectedRadar.label} - ${this.dataSource.radarVersion}`;
                        this.redraw();
                    });

                    this.selectVersion();
                });

            // create some elements while datasource is am rumrödeln
            this.titleElement = document.querySelector('title');

            // a splash screen?!
            const splash = document.createElement('div');
            splash.id = 'splash';
            splash.className = 'splash';
            document.querySelector('body').append(splash);

            // the radar target element
            const target = document.createElement('div');
            target.id = 'radar';
            target.className = 'radar';
            document.querySelector('body').append(target);
            this.target = document.getElementById('radar');

            // the page content after the radar
            const pageTemplate = PageTemplate({
                scope: {}
            });
            const page = document.createElement('div');
            page.id = 'page';
            page.className = 'page';
            page.innerHTML = pageTemplate;
            document.querySelector('body').append(page);

            // if a new style was loaded
            this.on('style-loaded', () => {
                this.create();
            });

            // window resize end behavior
            this.resizeTimeout = false;
            this.resizing = false;
            window.addEventListener('resize', () => {
                clearTimeout(this.resizeTimeout);
                this.resizeStart();
                this.resizeTimeout = setTimeout(() => {
                    this.resizeEnd();
                }, 500);
            });

            window.addEventListener('scroll', () => {
                this.legends.draw();
            });

            this.on('ready', () => {
                resolve(this);
            });
        });
    }

    destroy() {
        if (this.dots)
            if (this.dots.simulation.stop)
                this.dots.simulation.stop();

        this.target.innerHTML = '';
    }

    build() {
        document.querySelector('body').classList.remove('loading');
        this.setTheme();
        // continue here withe the event "style-loaded"
    }

    create() {
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

        this.print = new Print(this);
        this.fork = new Fork(this);

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
        console.log('>>>', this.label.padStart(15, ' '), '>', 'REDRAWING');
        this.destroy();
        this.build();
    }

    resizeStart() {
        if (this.resizing === true)
            return;

        this.resizing = true;
        //...
    }

    resizeEnd() {
        this.emit('resize-end', this);
        this.resizing = false;
        this.redraw();
    }

    setTheme() {
        let styleHRef = `css/${this.selectedRadar.theme}.css`;

        // the theme style element
        if (this.themeStyle) {
            this.themeStyle.remove();
        }
        this.themeStyle = document.createElement('link');
        this.themeStyle.rel = 'stylesheet';
        document.querySelector('head').append(this.themeStyle);
        this.themeStyle.onload = () => this.emit('style-loaded');
        this.themeStyle.onerror = () => this.emit('style-error');

        if (this.themeStyle.href.includes(styleHRef))
            this.emit('style-loaded');

        if (this.selectedRadar.theme === undefined)
            styleHRef = '';

        this.themeStyle.href = styleHRef;
        if (styleHRef === '')
            this.emit('style-loaded');
    }


    selectVersion(id, version) {
        console.log('????????', id, version);

        if (!id)
            id = this.controls.id;
        if (!version)
            version = this.controls.version;

        console.log('');
        console.log('>>>', this.label.padStart(15, ' '), '>', 'SELECT VERSION', id, version);

        this.dataSource
            .selectRadar(id, version)
            .then(() => {
                console.log('>>>', this.label.padStart(15, ' '), '>', 'SELECT VERSION', this.dataSource.selectedRadar.id, this.dataSource.radarVersion);
                this.selectedRadar = this.dataSource.selectedRadar;
                this.data = this.dataSource.data;
                this.emit('version-selected', id, version);
            });
    }

    getHash() {
        this.controls.getHash();
    }

    get resizing() {
        return this._resizing;
    }

    set resizing(val) {
        this._resizing = val;
        this.resizing ? document.querySelector('body').classList.add('resizing') : document.querySelector('body').classList.remove('resizing');
    }

    get title() {
        return this._title;
    }

    set title(val) {
        this._title = val;
        this.titleElement.innerHTML = `${this.title} | neofonie tech radar`;
    }
}
