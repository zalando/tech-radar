import Module from "../../Module";

export default class extends Module {
    constructor(radar) {
        super();
        this.label = 'MENU';

        this.radar = radar;
        this.items = [];

        this.on('version-selected', (dataSet, version) => {

        });

        const target = document.createElement('div');
        target.id = 'menu';
        target.className = 'menu';
        document.querySelector('body').append(target);
        this.target = document.getElementById('menu');

        const inner = document.createElement('div');
        inner.classList.add('inner');

        this.openButton = document.createElement('a');
        this.openButton.classList.add('open');
        this.openButton.onclick = e => this.toggle(e);
        inner.append(this.openButton);

        this.dataSetButtons = {};
        this.versionButtons = {};
        this.radar.dataSource.dataIndex.forEach(i => {
            const dataset = document.createElement('div');
            dataset.classList.add('dataset');

            const dataSetButton = document.createElement('a');
            dataSetButton.innerHTML = `${i.label}`;
            //dataSetButton.onclick = e => this.select(i, e);

            dataset.append(dataSetButton);
            this.dataSetButtons[i.id] = dataSetButton;

            if (i.versions)
                i.versions.forEach(ii => {
                    const versionButton = document.createElement('a');
                    versionButton.innerHTML = `${ii}`;
                    versionButton.classList.add('version');
                    versionButton.onclick = e => this.selectVersion(i, ii, e);

                    if (!this.versionButtons[i.id])
                        this.versionButtons[i.id] = [];
                    this.versionButtons[i.id].push(versionButton);
                    dataset.append(versionButton);
                });

            inner.append(dataset);
        });
        this.target.append(inner);
        //this.selectVersion(this.radar.dataSource.dataSet,this.radar.dataSource.dataSet.versions[0]);
    }

    draw() {
    }

    toggle(e) {
        this.target.classList.contains('opened') ? this.close(e) : this.open(e);
    }

    open(e) {
        this.target.classList.add('opened');
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    close(e) {
        this.target.classList.remove('opened');
    }

    select(dataSet, e) {
        if (e) {
            e.preventDefault();
        }
        this.openButton.innerHTML = dataSet.label;
    }

    selectVersion(dataSet, version) {
        console.log('>>>', this.label.padStart(15,' '), '>', 'MENU SELECT VERSION', dataSet, version);
        this.close();
        this.emit('version-selected', dataSet, version);
    }

    drawVersion(id, version){
        const dataSet = this.radar.dataSource.oneDataSet(id);
        console.log('>>>', this.label.padStart(15,' '), '>', 'MENU DRAW VERSION', dataSet, version);
        this.openButton.innerHTML = dataSet.label;
        this.openButton.setAttribute('data-version', version);
    }
}