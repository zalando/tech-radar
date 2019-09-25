import Module from "../../Module";

export default class extends Module {
    constructor(args) {
        super();
        this.label = 'LEGEND';
        console.log(this.label, 'INIT');

        this.radar = args.radar;
        this.options = args.options;
        this.dots = args.dots;
        this.index = args.index;
        this.name = this.options.name;

        this.target = document.createElement('div');
        this.target.classList.add('legend');
        this.target.setAttribute('data-name', this.name);
        this.target.setAttribute('data-ring', this.index);
        let html = `<h1>${this.name}</h1>`;
        html += '<div class="label-container">';
        for (let i = 0; i < this.dots.length; i++) {
            if(i===0 || i ===2)
                html += '<div class="ring-column">';

            html += '<div class="ring-block">';
            html += `<h2>${this.radar.rings.items[i].name}</h2>`;
            html += '<ul>';
            this.dots[i].forEach(dot => {
                html += `<li><a href="" data-index="${dot.index}}"><span class="">${dot.index+1}</span>${dot.label}</a></li>`;
            });
            html += '</ul>';
            html += '</div>';
            if(i===1 || i ===3)
                html += '</div>';


        }
        html += '</div>';
        this.target.innerHTML = html;
        this.draw();
    }

    draw() {
        const quadrant = this.radar.quadrants.items[this.index];
        this.target.style.top = quadrant.target.style.top;
    }

    get index() {
        return this._index;
    }

    set index(value) {
        this._index = value;
    }
}
