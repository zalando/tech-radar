import Module from "../../Module";
import MenuTemplate from './Templates/Menu.html';
import MenuRadarTemplate from './Templates/MenuRadar.html';
import MenuRadarVersionTemplate from './Templates/MenuRadarVersion.html';

export default class extends Module {
    constructor(radar) {
        super();
        this.label = 'MENU';

        this.radar = radar;
        this.items = [];

        this.on('version-selected', (selectedRadar, version) => {

        });
        this.build();
    }

    build() {
        if (this.target)
            this.target.remove();

        const html = MenuTemplate({
            scope: {
                radar: this.radar,
                radarTemplate: MenuRadarTemplate,
                versionTemplate: MenuRadarVersionTemplate
            }
        });
        const target = document.createElement('div');
        target.id = 'menu';
        target.className = 'menu';
        target.innerHTML = html;
        document.querySelector('body').append(target);
        this.target = document.getElementById('menu');

        this.openButton = this.target.querySelector('.open');
        this.openButton.onclick = e => this.toggle(e);

        this.versionButtons = this.target.querySelectorAll('.version');
        this.versionButtons.forEach(versionButton => versionButton.onclick = e => this.selectVersion(e));
    }

    draw() {
    }

    toggle(e) {
        this.target.classList.contains('opened') ? this.close(e) : this.open(e);
    }

    open(e) {
        this.target.classList.add('opened');
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }

    close(e) {
        this.target.classList.remove('opened');
    }

    select(radar, e) {
        if (e) {
            e.preventDefault();
        }
        this.openButton.innerHTML = radar.label;
    }

    selectVersion(e) {
        const radarId = e.target.getAttribute('data-radar-id');
        const version = e.target.innerHTML;

        console.log('>>>', this.label.padStart(15, ' '), '>', 'MENU SELECT VERSION', radarId, version);
        this.close();
        this.emit('version-selected', radarId, version);
    }

    drawVersion(id, version) {
        const selectedRadar = this.radar.dataSource.oneRadar(id);
        console.log('>>>', this.label.padStart(15, ' '), '>', 'MENU DRAW VERSION', selectedRadar, version);
        this.openButton.innerHTML = selectedRadar.label;
        this.openButton.setAttribute('data-version', version);
    }

    addAdmin() {
        if (this.radar.dataSource.serverMode === true) {
            this.addRadarButton = document.createElement('a');
            this.addRadarButton.id = 'addRadar';
            this.addRadarButton.className = 'add-radar';
            this.addRadarButton.innerHTML = '+';
            this.addRadarButton.onclick = (e) => {
                this.close();
                this.radar.radarForm.toggle(e);
                e.target.blur();
            };
            this.target.querySelector('.inner').append(this.addRadarButton);
            this.target.querySelectorAll('.radar').forEach(i => {
                const addDatasetButton = document.createElement('a');
                addDatasetButton.id = 'addDataset';
                addDatasetButton.className = 'add-dataset';
                addDatasetButton.innerHTML = '+';
                addDatasetButton.setAttribute('data-radar-id', i.getAttribute('data-radar-id'));
                addDatasetButton.onclick = (e) => {
                    this.close();
                    this.radar.datasetForm.toggle(e);
                };
                i.append(addDatasetButton);
            });
        }
    }

    removeAdmin() {
        this.addRadarButton.remove();
        this.target.querySelectorAll('.radar .add-dataset').forEach(i => i.remove());
    }

    get admin() {
        return this._admin;
    }

    set admin(val) {
        this._admin = val;
        this.admin ? this.addAdmin() : this.removeAdmin();
    }
}