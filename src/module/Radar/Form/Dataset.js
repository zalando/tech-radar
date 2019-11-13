import Module from "../../../Module";
import AddDatasetModalTemplate from './Templates/AddDatasetModal.html';

export default class extends Module {
    constructor(radar) {
        super();
        this.radar = radar;
        this.radarId = '';
        this.createUrl = false;
        this.blocked = false;

        this.datasetModal = document.createElement('div');
        this.datasetModal.id = 'addDatasetModal';
        this.datasetModal.className = 'modal add-dataset';
        this.datasetModal.innerHTML = '';

        document.querySelector('body').append(this.datasetModal);
    }

    toggle(e) {
        this.radarId = e.target.getAttribute('data-radar-id');
        this.selectedRadar = this.radar.dataSource.oneRadar(this.radarId);
        this.datasetModal.classList.contains('active') ? this.datasetModal.classList.remove('active') : this.datasetModal.classList.add('active');
        if (this.datasetModal.classList.contains('active')) {
            this.datasetModal.innerHTML = AddDatasetModalTemplate({
                scope: {
                    radarId: this.radarId,
                    radarLabel: this.selectedRadar.label,
                    name: '',
                }
            });
            this.datasetModal.querySelector('button.create').onclick = (e) => {
                this.create(e);
            };
            this.datasetModal.querySelector('button.cancel').onclick = (e) => {
                this.close(e);
            };
        }
    }

    close(){
        this.datasetModal.classList.remove('active');
    }

    remove() {
        this.datasetModal.remove();
    }

    create(e) {
        this.datasetModal.querySelector('.message').innerHTML = '';
        this.getForm(e);
        this.send()
            .then(data => {
                if (data.message === 'Created') {
                    this.datasetModal.classList.remove('active');
                } else {
                    this.datasetModal.querySelector('.message').innerHTML = data.payload;
                }
            })
            .catch();
    }

    getForm(e) {
        const datasetForm = this.datasetModal.querySelector('form');
        const formData = new FormData(datasetForm);
        const data = {};
        for (let pair of formData.entries()) {
            data[pair[0]] = pair[1];
        }
        this.formData = data;
    }

    send() {
        this.blocked = true;
        const formData = new FormData();
        Object.keys(this.formData).forEach(field => {
            formData.append(field, this.formData[field]);
        });

        const requestOptions = {
            method: 'POST',
            body: formData,
            headers: new Headers({
                'Authorization': 'Bearer ' + this.radar.auth.token
            })
        };

        return fetch(this.createUrl, requestOptions)
            .then(response => {
                if (!response.ok)
                    return Promise.reject(response.statusText);

                return response.json();
            })
            .then(data => {
                this.blocked = false;
                return data;
            });
    }

    get radarId() {
        return this._radarId;
    }

    set radarId(val) {
        this._radarId = val;
        this.createUrl = `${this.radar.dataSource.baseUrl}/radar/${this.radarId}/dataset/create`;
    }
}
