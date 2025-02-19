import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--locationPinFood"><path d="M8 14.825 4 10.783c-2.196-2.223-2.196-5.837 0-8.06A5.592 5.592 0 0 1 8 1.054c1.514 0 2.931.594 3.999 1.67 2.196 2.223 2.196 5.837 0 8.06l-4 4.042Zm0-12.46a4.262 4.262 0 0 0-3.063 1.286 4.426 4.426 0 0 0 0 6.213L8 12.96l3.062-3.097a4.426 4.426 0 0 0 0-6.213A4.276 4.276 0 0 0 8 2.365Z"></path><path d="M7.501 4.316a.147.147 0 0 0-.149.149c-.035.63-.043 1.374-.026 2.117 0 .097-.079.184-.175.184-.096 0-.184-.079-.184-.175-.008-.735 0-1.479.027-2.1a.152.152 0 0 0-.158-.157.147.147 0 0 0-.149.149c-.035.63-.043 1.382-.026 2.126 0 .096-.079.184-.175.184a.186.186 0 0 1-.131-.062s-.018-.008-.018-.017a.183.183 0 0 1-.035-.097c-.008-.734 0-1.478.027-2.117a.152.152 0 0 0-.158-.157c-.017 0-.035 0-.044.017H6.11a.18.18 0 0 0-.088.122c-.052.946-.035 2.162 0 3.203 0 .105.035.201.08.298 0 .008.017.017.017.035a.87.87 0 0 0 .21.262l.017.018v1.417h.98c-.009-.105-.026-.219-.035-.367-.07-.762-.052-.92-.052-.92 0-.052.026-.087.07-.113a.832.832 0 0 0 .358-.674v-.026c-.035-1.033-.052-2.196 0-3.115a.152.152 0 0 0-.157-.157L7.5 4.316Z"></path><path d="M9.977 4.15c0-.052-.008-.07-.008-.07-.027-.061-.08-.105-.15-.105a.146.146 0 0 0-.095.035s-.018.009-.053.044c0 0-.105.114-.262.367-.07.114-.15.263-.228.447-.175.385-.359.918-.507 1.636a14.097 14.097 0 0 0-.228 1.671v.079a.18.18 0 0 0 .149.131h.07l.464.07.052.026v.517c-.017.183-.035.41-.061.69h.77c.017-.34.052-.935.079-1.635.052-1.287.096-2.94 0-3.912l.008.009Z"></path></svg>';

export class IconLocationPinFood extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPinFood', '', null, 'IconLocationPinFood');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--locationPinFood');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPinFood', '', newVal, 'IconLocationPinFood');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-location-pin-food', IconLocationPinFood);
