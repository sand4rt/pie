import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--handHeartLarge"><path d="m15.668 15.746.612.63 6.37-6.387a4.174 4.174 0 0 0-5.862-5.898l-.5.534-.49-.499A4.174 4.174 0 0 0 9.876 9.99l5.793 5.757ZM11.143 5.334a2.406 2.406 0 0 1 3.412 0l1.75 1.75 1.75-1.75a2.416 2.416 0 1 1 3.413 3.412l-5.128 5.128-5.197-5.128a2.406 2.406 0 0 1 0-3.412Z"></path><path d="M28.11 18.975a4.445 4.445 0 0 0-5.565.245l-2.538 2.258a2.625 2.625 0 0 1-1.75.647h-.507a4.375 4.375 0 0 0 .875-2.625v-1.75h-5.119a7 7 0 0 0-3.867 1.164L6.113 21.25H2.874V23H5.5v4.375H2.875v1.75h16.817a4.376 4.376 0 0 0 3.256-1.453l6.684-7.428-1.522-1.269ZM21.644 26.5a2.626 2.626 0 0 1-1.951.875H7.25v-4.777l3.351-2.223a5.25 5.25 0 0 1 2.905-.875h3.369a2.625 2.625 0 0 1-2.625 2.625h-.779l-.875 1.75h5.688a4.375 4.375 0 0 0 2.887-1.085l2.529-2.258a2.695 2.695 0 0 1 3.334-.157l.087.07-5.477 6.055Z"></path></svg>';

export class IconHandHeartLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--handHeartLarge', '', null, 'IconHandHeartLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--handHeartLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--handHeartLarge', '', newVal, 'IconHandHeartLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-hand-heart-large', IconHandHeartLarge);
