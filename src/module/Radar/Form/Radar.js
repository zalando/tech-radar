import Module from "../../../Module";
import AddRadarModalTemplate from './Templates/AddRadarModal.html';

export default class extends Module {
    constructor(radar) {
        super();
        this.radar = radar;
        this.createRadarUrl = `${this.radar.dataSource.baseUrl}/radar/create`;
        this.blocked = false;

        this.radarModal = document.createElement('div');
        this.radarModal.id = 'addRadarModal';
        this.radarModal.className = 'modal add-radar';
        const inner = document.createElement('div');
        inner.classList.add('inner');
        inner.innerHTML = AddRadarModalTemplate({
            scope: {
                label: '',
                theme: '',
                seed_from: 20,
                seed_to: 50,
                quadrant0_label: '',
                quadrant1_label: '',
                quadrant2_label: '',
                quadrant3_label: '',
                ring0_label: 'ADOPT',
                ring1_label: 'TRIAL',
                ring2_label: 'ASSESS',
                ring3_label: 'HOLD',
                version: '',
                is_default: false
            }
        });
        this.radarModal.append(inner);
        this.radarModal.querySelector('button.create').onclick = (e) => {
            this.create(e);
        };
        this.radarModal.querySelector('button.cancel').onclick = (e) => {
            this.close(e);
        };
        document.querySelector('body').append(this.radarModal);

    }

    toggle() {
        this.radarModal.classList.contains('active') ? this.radarModal.classList.remove('active') : this.radarModal.classList.add('active');
    }

    close(){
        this.radarModal.classList.remove('active');
    }

    remove() {
        this.radarModal.remove();
    }

    create(e) {
        this.radarModal.querySelector('.message').innerHTML = '';
        this.getForm(e);
        this.send()
            .then(data => {
                if (data.message === 'Created') {
                    this.radarModal.classList.remove('active');
                } else {
                    this.radarModal.querySelector('.message').innerHTML = data.payload;
                }
            })
            .catch();
    }

    getForm(e) {
        const radarForm = this.radarModal.querySelector('form');
        const formData = new FormData(radarForm);
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

        return fetch(this.createRadarUrl, requestOptions)
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
}