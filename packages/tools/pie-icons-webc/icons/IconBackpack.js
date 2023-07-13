import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--backpack"><path d="M13.25 8V5.436a1.601 1.601 0 0 0-1.592-1.592h-.578l-.875-2.625H5.777l-.875 2.625h-.56A1.601 1.601 0 0 0 2.75 5.436V8a.875.875 0 0 0-.875.875v3.5a.875.875 0 0 0 .875.875.937.937 0 0 0 .271-.053 1.576 1.576 0 0 0 1.322.71h7.315a1.575 1.575 0 0 0 1.32-.71c.088.031.18.049.272.053a.875.875 0 0 0 .875-.875v-3.5A.875.875 0 0 0 13.25 8ZM6.723 2.531h2.554l.42 1.313H6.303l.42-1.313Zm5.25 9.783a.28.28 0 0 1-.28.28h-7.35a.28.28 0 0 1-.28-.28V5.436a.28.28 0 0 1 .28-.28h7.315a.28.28 0 0 1 .28.28l.034 6.878Z"></path></svg>';

export class IconBackpack extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--backpack', '', null, 'IconBackpack');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--backpack');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--backpack', '', newVal, 'IconBackpack');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-backpack', IconBackpack);