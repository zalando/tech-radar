import Module from "../../Module";
import LoginModalTemplate from './Templates/Login.html';
import LogoutModalTemplate from './Templates/Logout.html';

export default class extends Module {
    constructor(radar) {
        super();
        this.label = 'AUTHENTICATION';
        this.radar = radar;

        this.loginUrl = `${this.radar.dataSource.baseUrl}/login`;
        this.token = false;
        this.blocked = false;

        this.openButton = document.createElement('a');
        this.openButton.id = 'auth';
        this.openButton.className = 'auth';
        this.openButton.href = '';
        this.openButton.innerHTML = '<i></i>';
        this.openButton.onclick = e => {
            if (e)
                e.preventDefault();

            this.toggle();
        };
        const body = document.querySelector('body');
        body.append(this.openButton);

        this.loginModal = document.createElement('div');
        this.loginModal.id = 'loginModal';
        this.loginModal.className = 'modal';
        this.loginModal.innerHTML = LoginModalTemplate({
            scope: {}
        });

        this.logoutModal = document.createElement('div');
        this.logoutModal.id = 'logoutModal';
        this.logoutModal.className = 'modal';
        this.logoutModal.innerHTML = LogoutModalTemplate({
            scope: {}
        });

        this.loginButton = this.loginModal.querySelector('button');
        this.loginButton.onclick = (e) => {
            const username = this.loginModal.querySelector('#username').value;
            const password = this.loginModal.querySelector('#password').value;
            this
                .login(username, password)
                .then(() => {

                });
        };

        this.logoutButton = this.logoutModal.querySelector('button');
        this.logoutButton.onclick = (e) => {
            this.logout();
        };

        body.append(this.loginModal);
        body.append(this.logoutModal);
       //this.login('admin','change!me');
    }

    toggle() {
        if (!this.token) {
            this.loginModal.classList.contains('active') ? this.loginModal.classList.remove('active') : this.loginModal.classList.add('active');
        } else {
            this.logoutModal.classList.contains('active') ? this.logoutModal.classList.remove('active') : this.logoutModal.classList.add('active');
        }
    }

    closeModal() {
        if (!this.loginModal || !this.logoutModal)
            return false;

        this.loginModal.classList.remove('active');
        this.logoutModal.classList.remove('active');
    }

    login(username, password) {
        this.blocked = true;
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        const requestOptions = {
            method: 'POST',
            body: formData
        };

        return fetch(this.loginUrl, requestOptions)
            .then(response => {
                if (!response.ok)
                    return Promise.reject(response.statusText);

                return response.json();
            })
            .then(data => {
                if (data.token) {
                    this.token = data.token;
                }
                this.blocked = false;
                return data;
            });
    }

    logout() {
        this.token = '';
    }

    get token() {
        return this._token;
    }

    set token(val) {
        this._token = val;
        if (this.token !== '') {
            if (this.openButton)
                this.openButton.classList.add('logged-in');

            this.emit('login');
        } else {
            if (this.openButton)
                this.openButton.classList.remove('logged-in');

            this.emit('logout');
        }
        this.closeModal();
    }
}
