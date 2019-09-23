import Module from "../../Module.js";
import FooterTemplate from "./Templates/Footer.html";

export default class extends Module {
    constructor(args) {
        super(args);
        return new Promise((resolve, reject) => {
            this.label = 'FOOTER';
            console.log(this.label, 'INIT');

            this.on('ready', () => {
                resolve(this);
            });

            this.target = document.getElementById('footer');
            this.draw();

            this.emit('ready');
        });
    }

    draw(){
        this.target.innerHTML = FooterTemplate();
    }
};