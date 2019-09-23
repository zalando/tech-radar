import './Globals.js';
//import App from './module/Dashboard.js';
import Radar from './module/Radar/index.js';

window.addEventListener('load', () => {
    /*new App().then(app => {
        window.APP = app;
        return new Radar();
    }).then(radar => {
        window.RADAR = radar;
        console.log('>>> YO');
    });*/


    new Radar().then(radar => {
        window.RADAR = radar;
        console.log('>>> YO');
    });
});
