import Module from "../../Module";
import Legend from './Legend.js';

export default class extends Module {
  constructor(radar) {
    super();
    this.label = 'LEGENDS';
    this.radar = radar;

    const target = document.createElement('div');
    target.id = 'legends';
    target.className = 'legends';
    this.radar.target.append(target);
    this.target = document.getElementById('legends');


    this.radar.selectedRadar.quadrants.forEach(quadrantData => {
      const legend = new Legend({
        index: quadrantData.index,
        position: quadrantData.position,
        radar: this.radar,
        options: {
          label: quadrantData.label
        },
        dots: this.radar.dots.segmented[quadrantData.index],
      });
      this.items.push(legend);
      this.target.append(legend.target)
    });
  }

  draw() {
    this.items.map(legend => legend.draw());
  }
}
