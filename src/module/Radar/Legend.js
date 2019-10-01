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
            if (i === 0 || i === 2)
                html += '<div class="ring-column">';

            html += '<div class="ring-block">';
            html += `<h2>${this.radar.rings.items[i].name}</h2>`;
            html += '<ul>';
            this.dots[i].forEach(dot => {
                html += `<li><a href="" data-index="${dot.index}"><span class="">${dot.index + 1}</span>${dot.label}</a></li>`;
            });
            html += '</ul>';
            html += '</div>';
            if (i === 1 || i === 3)
                html += '</div>';

        }
        html += '</div>';
        this.target.innerHTML = html;
        this.buttons = this.target.querySelectorAll('a');

        this.buttons.forEach(button => {
            button.onclick = e => {
                e.preventDefault();
            };

            button.select = e => {
                button.classList.add('active');
                let index = false;
                if (e) {
                    index = e.target.getAttribute('data-index');
                } else {
                    index = button.getAttribute('data-index');
                }
                const dot = this.radar.dots.items[index];
                if (dot) {
                    dot.select();
                    button.style.backgroundColor = dot.color;
                }
            };

            button.deselect = e => {
                button.classList.remove('active');

                let index = false;
                if (e) {
                    index = e.target.getAttribute('data-index');
                } else {
                    index = button.getAttribute('data-index');
                }
                const dot = this.radar.dots.items[index];
                if (dot) {
                    dot.deselect();
                    button.style.backgroundColor = 'inherit';
                }
            };

            button.onmouseover = e => button.select(e);
            button.onmouseout = e => button.deselect(e);
        });
        this.draw();
    }


    draw() {
        const quadrant = this.radar.quadrants.items[this.index].target;
        const ring = this.radar.quadrants.items[3].target;
        this.target.style.top = quadrant.style.top;
        this.target.style.left = `${ring.getBoundingClientRect().left}px`;
        this.target.setAttribute('data-rings-width', ring.getBoundingClientRect().width);
    }

    get index() {
        return this._index;
    }

    set index(value) {
        this._index = value;
    }
}
