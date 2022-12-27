import Module from "../../Module";
import Quadrant from './Quadrant.js';

export default class extends Module {
  constructor(radar) {
    super();
    this.label = 'QUADRANTS';
    this.radar = radar;

    // TODO: get where the index come from
    this.d3Config = [
      { radial_min: 0, radial_max: 0.5, factor_x: 1, factor_y: 1 },
      { radial_min: 0.5, radial_max: 1, factor_x: -1, factor_y: 1 },
      { radial_min: -1, radial_max: -0.5, factor_x: -1, factor_y: -1 },
      { radial_min: -0.5, radial_max: 0, factor_x: 1, factor_y: -1 }
    ];

    const target = document.createElement('div');
    target.id = 'quadrants';
    target.className = 'quadrants';

    this.radar.target.append(target);
    this.target = document.getElementById('quadrants');

    // TODO: fix prio of config.json see d3Config in Quadrants
    this.radar.selectedRadar.quadrants.forEach((quadrantData) => {
      const quadrant = new Quadrant({
        index: quadrantData.index,
        position: quadrantData.position,
        radar: this.radar,
        options: {
          ...this.d3Config[quadrantData.index],
          label: quadrantData.label
        }
      });
      this.items.push(quadrant);
      this.target.append(quadrant.target)
    });
  }

  draw() {
    this.items.map(quadrant => quadrant.draw());
  }
}
