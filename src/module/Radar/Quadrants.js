import Module from "../../Module";
import Quadrant from './Quadrant.js';

export default class extends Module {
    constructor(radar) {
        super();
        this.label = 'QUADRANTS';
        this.radar = radar;

        this.data = [
            {radial_min: 0, radial_max: 0.5, factor_x: 1, factor_y: 1},
            {radial_min: 0.5, radial_max: 1, factor_x: -1, factor_y: 1},
            {radial_min: -1, radial_max: -0.5, factor_x: -1, factor_y: -1},
            {radial_min: -0.5, radial_max: 0, factor_x: 1, factor_y: -1}
        ];

        const target = document.createElement('div');
        target.id = 'quadrants';
        target.className = 'quadrants';
        this.radar.target.append(target);
        this.target = document.getElementById('quadrants');

        [0, 1, 2, 3].forEach(i => {
            const quadrant = new Quadrant({
                index : i,
                radar : this.radar,
                options: {
                    ...this.data[i],
                    label: this.radar.selectedRadar.quadrants[i].label
                }
            });
            this.items.push(quadrant);
            this.target.append(quadrant.target)
        });
    }

    draw() {
        this.items.forEach(quad => {
            quad.draw();
        });
    }
}