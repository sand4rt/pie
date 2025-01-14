import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--preparePauseLarge"><path d="M19.3 15.873h1.75v3.63H19.3v-3.63Z"></path><path d="M22.02 15.873h1.75v3.63h-1.75v-3.63Z"></path><path fill-rule="evenodd" d="M20.235 11.769c.42-.097.849-.149 1.295-.149h.009c3.246 0 5.897 2.651 5.897 5.897 0 3.247-2.65 5.898-5.897 5.898a5.906 5.906 0 0 1-5.898-5.898v-.148C10.2 19.836 6.498 19.233 6 19.136c-.7-.087-1.479-.586-1.61-1.496-.096-.744.437-1.488 1.724-2.433l.07-.052c3.053-2.082 6.763-4.244 11.672-6.808C20.673 6.87 22.23 6.177 23.57 5.6l.875 1.531c-1.243.534-2.634 1.146-5.084 2.406.263.657.604 1.532.875 2.232ZM6.323 17.413c.043.008 3.955.778 9.79-2.223l-.008-.009a5.883 5.883 0 0 1 2.503-2.791c-.245-.621-.552-1.4-.805-2.048-4.428 2.328-7.823 4.323-10.64 6.248-.525.385-.788.648-.928.805l.088.018Zm11.06.113a4.15 4.15 0 0 0 4.147 4.148v-.009a4.156 4.156 0 0 0 4.148-4.148 4.15 4.15 0 0 0-4.148-4.147 4.157 4.157 0 0 0-3.973 3.036 3.945 3.945 0 0 0-.174 1.12Z" clip-rule="evenodd"></path><path d="M27.375 24.544H4.625l.446 1.75H26.93l.446-1.742v-.008Z"></path></svg>';

export class IconPreparePauseLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--preparePauseLarge', '', null, 'IconPreparePauseLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--preparePauseLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--preparePauseLarge', '', newVal, 'IconPreparePauseLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-prepare-pause-large', IconPreparePauseLarge);
