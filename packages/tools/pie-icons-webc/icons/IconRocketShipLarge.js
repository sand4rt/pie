import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--rocketShipLarge"><path d="m27.016 5.631-.131-.499-.499-.13c-4.121-1.05-7.875.07-11.138 3.342l-3.115 3.115a.708.708 0 0 1-.508.166H7.696a2.039 2.039 0 0 0-1.54.578l-1.951 1.986L17.75 27.742l1.951-1.95a2.021 2.021 0 0 0 .578-1.497v-3.981a.69.69 0 0 1 .201-.499l3.115-3.115c3.308-3.325 4.454-7.026 3.421-11.069Zm-4.646 9.835-3.115 3.159a2.433 2.433 0 0 0-.717 1.75v4.034a.288.288 0 0 1-.062.21l-.726.656L6.673 14.189l.717-.718a.34.34 0 0 1 .263-.061h3.972a2.467 2.467 0 0 0 1.75-.717l3.115-3.107c2.66-2.677 5.635-3.684 8.951-3.01.665 3.246-.341 6.16-3.071 8.89Zm-4.463-5.433a2.878 2.878 0 1 0 4.078 0 2.957 2.957 0 0 0-4.078 0Zm2.835 2.835a1.129 1.129 0 0 1-1.592-1.593 1.121 1.121 0 0 1 1.593 0 1.111 1.111 0 0 1 0 1.592ZM9.08 21.538l-3.833 3.833-1.242-1.242 3.832-3.833L9.08 21.54Zm1.382 1.383 1.243 1.243-2.52 2.52L7.94 25.44l2.52-2.52Z"></path></svg>';

export class IconRocketShipLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--rocketShipLarge', '', null, 'IconRocketShipLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--rocketShipLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--rocketShipLarge', '', newVal, 'IconRocketShipLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-rocket-ship-large', IconRocketShipLarge);
