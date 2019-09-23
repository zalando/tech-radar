import Module from "../../Module";

export default class extends Module {
    constructor(args) {
        super();
        this.radar = args.radar;
        this.options = args.options;

        this.quadrants = [
            {radial_min: 0, radial_max: 0.5, factor_x: 1, factor_y: 1},
            {radial_min: 0.5, radial_max: 1, factor_x: -1, factor_y: 1},
            {radial_min: -1, radial_max: -0.5, factor_x: -1, factor_y: -1},
            {radial_min: -0.5, radial_max: 0, factor_x: 1, factor_y: -1}
        ];

        this.active = this.options.active;
        this.quadrant = this.options.quadrant;
        this.ring = this.options.ring;
        this.label = this.options.label;
        this.moved = this.options.moved;
        this.color = this.options.color;
        this.x = this.options.x;
        this.y = this.options.y;
        this.hot = this.options.hot;

        this.class = 'dot';
        this.color = this.active || this.radar.config.print_layout ? this.radar.config.rings[this.ring].color : this.radar.config.colors.inactive;
        this.offset = this.radar.offset;

        this.segment = this.segmentObj(this.quadrant, this.ring);
        const point = this.segment.random();
        this.x = point.x;
        this.y = point.y;

        this.target = document.createElement('div');
        this.target.classList.add(this.class);
        this.target.style.backgroundColor = this.color;
        this.target.style.top = `${this.y}px`;
        this.target.style.left = `${this.x}px`;

        this.target.onmouseover = () => {
            this.target.innerHTML = this.label;
        };
        this.target.onmouseleave = () => {
            this.target.innerHTML = this.index;
        };
    }

    segmentObj(quadrant, ring) {
        const polar_min = {
            t: this.quadrants[quadrant].radial_min * Math.PI,
            r: ring === 0 ? 30 : this.radar.rings.items[ring - 1].radius
        };
        const polar_max = {
            t: this.quadrants[quadrant].radial_max * Math.PI,
            r: this.radar.rings.items[ring].radius
        };
        const cartesian_min = {
            x: 15 * this.quadrants[quadrant].factor_x,
            y: 15 * this.quadrants[quadrant].factor_y
        };
        const cartesian_max = {
            x: this.radar.rings.items[3].radius * this.quadrants[quadrant].factor_x,
            y: this.radar.rings.items[3].radius * this.quadrants[quadrant].factor_y
        };
        return {
            clipx: d => {
                const c = this.bounded_box(d, cartesian_min, cartesian_max);
                const p = this.bounded_ring(this.polar(c), polar_min.r + 15, polar_max.r - 15);
                d.x = this.cartesian(p).x; // adjust data too!
                return d.x;
            },
            clipy: d => {
                const c = this.bounded_box(d, cartesian_min, cartesian_max);
                const p = this.bounded_ring(this.polar(c), polar_min.r + 15, polar_max.r - 15);
                d.y = this.cartesian(p).y; // adjust data too!
                return d.y;
            },
            random: () => {
                const cartesian = this.cartesian({
                    t: this.random_between(polar_min.t, polar_max.t),
                    r: this.normal_between(polar_min.r, polar_max.r)
                });
                return {
                    x: cartesian.x + this.offset.x,
                    y: cartesian.y + this.offset.y
                };
            }
        }
    }

    random() {
        const x = Math.sin(this.radar.config.seed++) * 10000;
        return x - Math.floor(x);
    }

    random_between(min, max) {
        return min + this.random() * (max - min);
    }

    normal_between(min, max) {
        return min + (this.random() + this.random()) * 0.5 * (max - min);
    }

    cartesian(polar) {
        return {
            x: polar.r * Math.cos(polar.t),
            y: polar.r * Math.sin(polar.t)
        }
    }

    polar(cartesian) {
        const x = cartesian.x;
        const y = cartesian.y;
        return {
            t: Math.atan2(y, x),
            r: Math.sqrt(x * x + y * y)
        }
    }

    bounded_interval(value, min, max) {
        const low = Math.min(min, max);
        const high = Math.max(min, max);
        return Math.min(Math.max(value, low), high);
    }

    bounded_ring(polar, r_min, r_max) {
        return {
            t: polar.t,
            r: this.bounded_interval(polar.r, r_min, r_max)
        }
    }

    bounded_box(point, min, max) {
        return {
            x: this.bounded_interval(point.x, min.x, max.x),
            y: this.bounded_interval(point.y, min.y, max.y)
        }
    }

    translate(x, y) {
        return "translate(" + x + "," + y + ")";
    }

    get index(){
        return this._index;
    }

    set index(value){
        this._index = value;
        this.target.innerHTML = this.index;
    }

    get x() {
        return this._x;
    }
    set x(value){
        this._x = value;
        if(this.target)
            this.target.style.left = `${this.x + this.offset.x}px`;
    }
    get y() {
        return this._y;
    }
    set y(value){
        this._y = value;
        if(this.target)
            this.target.style.top = `${this.y + this.offset.y}px`;
    }

};