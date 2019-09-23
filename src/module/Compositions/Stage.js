import Module from "../../Module.js";
import StageTemplate from './Templates/Stage.html';

export default class extends Module {
    constructor(args) {
        super(args);
        return new Promise((resolve, reject) => {
            this.label = 'STAGE';
            console.log(this.label, 'INIT');

            this.on('ready', () => {
                resolve(this);
            });

            this.target = document.getElementById('stage');
            this.draw();

            this.emit('ready');
        });
    }

    draw(){
        this.target.innerHTML = StageTemplate();
    }
};