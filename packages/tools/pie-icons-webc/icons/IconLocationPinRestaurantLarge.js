import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--locationPinRestaurantLarge"><path d="M22.038 8.895 20.856 7.74a1.688 1.688 0 0 0-1.18-.49H12.35a1.698 1.698 0 0 0-1.172.481L9.98 8.886A3.159 3.159 0 0 0 9 11.153a3.106 3.106 0 0 0 1.794 2.808v4.664a.875.875 0 0 0 .831.875h8.75a.875.875 0 0 0 .875-.875v-4.664a3.107 3.107 0 0 0 .831-5.066h-.043Zm-5.163 8.899V16h-1.75v1.794H12.5V14.25a3.096 3.096 0 0 0 1.601-.63 3.133 3.133 0 0 0 3.894 0c.46.357 1.012.579 1.593.639v3.587l-2.713-.052Zm3.36-5.294a1.408 1.408 0 0 1-1.522-.648H17.18a1.364 1.364 0 0 1-2.362 0h-1.531a1.383 1.383 0 0 1-1.514.648 1.339 1.339 0 0 1-1.024-1.348 1.4 1.4 0 0 1 .438-1.006L12.35 9h7.29l1.18 1.155a1.374 1.374 0 0 1 .43.998 1.338 1.338 0 0 1-1.016 1.347Zm3.815-7a11.305 11.305 0 0 0-16.1 0 11.603 11.603 0 0 0 0 16.249L16 29.886l8.05-8.137a11.603 11.603 0 0 0 0-16.301V5.5ZM22.8 20.462 16 27.375l-6.799-6.913a9.835 9.835 0 0 1 0-13.79 9.546 9.546 0 0 1 13.598 0 9.835 9.835 0 0 1 0 13.79Z"></path></svg>';

export class IconLocationPinRestaurantLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPinRestaurantLarge', '', null, 'IconLocationPinRestaurantLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--locationPinRestaurantLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPinRestaurantLarge', '', newVal, 'IconLocationPinRestaurantLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-location-pin-restaurant-large', IconLocationPinRestaurantLarge);
