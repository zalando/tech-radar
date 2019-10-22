import Module from "../../Module";
import LegendTemplate from './Templates/Legend.html';
import LegendRingTemplate from './Templates/LegendRing.html';
import LegendDotTemplate from './Templates/LegendDot.html';

export default class extends Module {
    constructor(args) {
        super();
        this.label = 'LEGEND';
        this.radar = args.radar;
        this.options = args.options;
        this.dots = args.dots;
        this.index = args.index;
        this.label = this.options.label;

        this.target = document.createElement('div');
        this.target.classList.add('legend');
        this.target.setAttribute('data-label', this.label);
        this.target.setAttribute('data-quadrant', this.index);
        this.target.innerHTML = LegendTemplate({
            scope: {
                legend: this,
                radar: this.radar,
                dots: this.dots,
                ringTemplate: LegendRingTemplate,
                dotTemplate: LegendDotTemplate
            }
        });

        // add events to the buttons
        this.buttons = this.target.querySelectorAll('a');
        this.buttons.forEach(button => {
            button.onclick = e => {
                e.preventDefault();
            };

            button.highlight = e => {
                button.classList.add('active');
                let index = false;
                if (e) {
                    index = e.target.getAttribute('data-index');
                } else {
                    index = button.getAttribute('data-index');
                }
                const dot = this.radar.dots.items[index];
                if (dot) {
                    dot.highlight();
                }
            };

            button.release = e => {
                button.classList.remove('active');

                let index = false;
                if (e) {
                    index = e.target.getAttribute('data-index');
                } else {
                    index = button.getAttribute('data-index');
                }
                const dot = this.radar.dots.items[index];
                if (dot) {
                    dot.release();
                }
            };

            button.select = e => {
                button.classList.contains('selected') ? button.classList.remove('selected') : button.classList.add('selected');
                let index = false;
                if (e) {
                    e.preventDefault();
                    index = e.target.getAttribute('data-index');
                } else {
                    index = button.getAttribute('data-index');
                }
                const dot = this.radar.dots.items[index];
                if (e && dot) {
                    dot.select();
                }
            };

            button.onmouseover = e => button.highlight(e);
            button.onmouseout = e => button.release(e);
            button.onclick = e => button.select(e);
        });
        this.draw();
    }


    draw() {
        const quadrant = this.radar.quadrants.items[this.index].target;
        const ring = this.radar.quadrants.items[3].target; // 3 means the largest, the outer ring
        this.target.style.top = `${quadrant.getBoundingClientRect().top + window.scrollY}px`;
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
