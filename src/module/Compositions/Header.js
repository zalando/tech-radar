import Module from "../../Module.js";
import HeaderTemplate from "./Templates/Header.html";

export default class extends Module {
    constructor(args) {
        super(args);
        return new Promise((resolve, reject) => {
            this.label = 'HEADER';
            console.log(this.label, 'INIT');

            this.on('ready', () => {
                resolve(this);
            });

            this.target = document.getElementById('header');
            this.draw();

            this.emit('ready');
        });
    }

    draw(){
        this.target.innerHTML = HeaderTemplate();
    }
};