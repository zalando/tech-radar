import Module from "../../Module";

export default class extends Module {
    constructor(radar) {
        super();
        this.label = 'FORK';
        this.radar = radar;

        const target = document.createElement('a');
        target.id = 'fork';
        target.className = 'fork';
        target.href = 'https://github.com/neofonie/tech-radar/';
        target.target = '_blank';
        target.innerHTML = '<i></i>';

        this.radar.target.append(target);
    }
}
