import Module from "../../Module";
import * as d3 from '../../../node_modules/d3/index.js';
import Dot from './Dot.js';

export default class extends Module {
    constructor(radar) {
        super();
        this.label = 'DOTS';

        this.radar = radar;
        this.items = [];
        this.segmented = [];
        this.velocityDecay = 0.05;

        this.radar.data.forEach((options, index) => {
            const dot = new Dot({
                index: index,
                radar: this.radar,
                options: options
            });
            dot.index = index;
            this.items.push(dot);
            this.radar.target.append(dot.target);
        });
        this.segment();

        this.items.forEach(dot => {
            this.radar.target.append(dot.target);
            dot.elementWidth = dot.target.clientWidth;
            dot.elementHeight = dot.target.clientHeight;
        });
    }

    segment() {
        this.segmented = new Array(4);
        for (let quadrant = 0; quadrant < 4; quadrant++) {
            this.segmented[quadrant] = new Array(4);
            for (let ring = 0; ring < 4; ring++) {
                this.segmented[quadrant][ring] = [];
            }
        }
        for (let i = 0; i < this.items.length; i++) {
            const dot = this.items[i];
            this.segmented[dot.quadrant][dot.ring].push(dot);
        }

        // assign unique sequential id to each entry
        let id = 1;
        for (let quadrant of [2, 3, 1, 0]) {
            for (let ring = 0; ring < 4; ring++) {
                let items = this.segmented[quadrant][ring];
                items.sort((a, b) => {
                    return a.label.localeCompare(b.label);
                });
                for (let i = 0; i < items.length; i++) {
                    items[i].id = "" + id++;
                }
            }
        }
    }

    ticked() {
        this.items.forEach(dot => {
            dot.x = dot.segment.clipx(dot);
            dot.y = dot.segment.clipy(dot);
        });
    }

    draw() {
        this.simulation = d3.forceSimulation(this.items)
            .velocityDecay(this.velocityDecay) // magic number (found by experimentation)
            .force("collision", d3.forceCollide().radius(16).strength(1))
            .on("tick", () => {
                this.ticked();
            })
            .on('end', () => {
                this.emit('simulation-complete', this);
            });

    }
}