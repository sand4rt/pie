import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--carClock"><path d="M13.495 6.906h1.4l-.665-1.312h-1.225l-.499-1.969a1.434 1.434 0 0 0-1.006-1.05 13.125 13.125 0 0 0-7 0 1.435 1.435 0 0 0-1.006 1.05l-.499 1.969H1.77l-.665 1.312h1.4l-.28.648c-.088.207-.132.43-.131.656v5.04h1.312v-1.479a27.515 27.515 0 0 0 9.188 0v1.479h1.312V8.21a1.662 1.662 0 0 0-.131-.656l-.28-.648Zm-.875 2.932v.595h-.07c-2.99.524-6.049.524-9.039 0h-.079V8.21a.359.359 0 0 1 0-.14l.298-.7.472-1.242.56-2.162a.21.21 0 0 1 .088-.131 11.848 11.848 0 0 1 6.3 0 .21.21 0 0 1 .088.131l.55 2.162.482 1.242.298.7c.009.046.009.094 0 .14l.052 1.627Z"></path><path d="M8.656 7.589V5.375H7.344v2.94l.901.56 1.094.674.682-1.12-1.365-.84Z"></path></svg>';

export class IconCarClock extends HTMLElement {
    constructor () {
        super();
        const clone = template.content.cloneNode(true);
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(clone);
    }

    static get observedAttributes () {
        return ['size'];
    }

    get size () {
        return this.getAttribute('size');
    }

    set size (value) {
        this.setAttribute('size', value);
    }

    get class () {
        return this.getAttribute('class');
    }

    set class (value) {
        this.setAttribute('class', value);
    }

    connectedCallback () {
        const svg = this.root.querySelector('svg');

        if (svg.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--carClock', '', null, 'IconCarClock');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--carClock');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--carClock', '', newVal, 'IconCarClock');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-car-clock', IconCarClock);
