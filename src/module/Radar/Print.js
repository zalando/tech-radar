import Module from "../../Module";

export default class extends Module {
    constructor(radar) {
        super();
        this.label = 'PRINT';
        this.radar = radar;
        
        // the layer
        const target = document.createElement('div');
        target.id = 'print';
        target.className = 'print';
        this.radar.target.append(target);
        this.target = document.getElementById('print');

        // the button
        const printButton = document.createElement('a');
        printButton.className = 'print-it';
        printButton.onclick = e => {
            if(e)
                e.preventDefault();

            this.toggleCss();
        };
        printButton.innerHTML = '<i></i>';
        printButton.href = '';
        this.target.append(printButton);
        
        this.disable();
    }

    draw() {

    }

    toggleCss() {
        this.printStyle = document.querySelector('#print-style');
        if(this.printStyle){
            this.disable();
            return;
        }
        this.enable();
        this.printStyle.href = `css/print.css`;
    }

    enable(){
        this.printStyle = document.createElement('link');
        this.printStyle.rel = 'stylesheet';
        this.printStyle.id = 'print-style';
        document.querySelector('head').append(this.printStyle);

        this.printStyle.onload = () => this.emit('style-loaded');
        this.printStyle.onerror = () => this.emit('style-error');
    }

    disable(){
        this.printStyle = document.querySelector('#print-style');
        if(!this.printStyle)
            return;

        this.printStyle.remove();
        this.printStyle = false;
    }
}