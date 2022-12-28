import Module from "../../Module";
import Quadrant from './Quadrant.js';

export default class extends Module {
  constructor(radar) {
    super();
    this.label = 'QUADRANTS';
    this.radar = radar;

    const target = document.createElement('div');
    target.id = 'quadrants';
    target.className = 'quadrants';

    this.radar.target.append(target);
    this.target = document.getElementById('quadrants');

    this.radar.selectedRadar.quadrants.forEach((quadrantData) => {
      const quadrant = new Quadrant({
        index: quadrantData.index,
        position: quadrantData.position,
        radar: this.radar,
        options: {
          ...quadrantData.d3,
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
