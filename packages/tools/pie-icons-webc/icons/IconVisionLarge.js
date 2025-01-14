import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--visionLarge"><path d="M27.296 8.002A7.191 7.191 0 0 0 23 4.46a5.591 5.591 0 0 0-4.375.498c-.403.241-.77.535-1.094.875L4.625 15.66a1.933 1.933 0 0 0-.525 2.458l.28.508-1.505.779.805 1.557 1.54-.796.184.324a1.881 1.881 0 0 0 1.671.988c.141-.001.282-.016.42-.043l4.209-.963L8.71 28.25h1.873l3.176-8.251h.096l3.185 8.251h1.873l-3.334-8.663 7.998-1.837h.113a5.251 5.251 0 0 0 1.619-.604c2.94-1.706 3.815-5.792 1.986-9.144ZM7.093 19.727a.148.148 0 0 1-.14-.078l-1.296-2.372a.175.175 0 0 1 .044-.227l10.08-7.718a7.604 7.604 0 0 0 .875 4.743 7.438 7.438 0 0 0 2.739 2.861L7.093 19.727Zm17.342-4.12a3.887 3.887 0 0 1-3.01.332 5.46 5.46 0 0 1-3.238-2.695C16.805 10.75 17.4 7.679 19.5 6.47a3.798 3.798 0 0 1 1.881-.49c.385.001.767.054 1.138.158a5.46 5.46 0 0 1 3.237 2.695c1.383 2.529.788 5.565-1.321 6.772Z"></path><path d="M22.125 8.125a6.24 6.24 0 0 1-.945 1.68 6.24 6.24 0 0 1-1.68.945 6.24 6.24 0 0 1 1.68.945c.4.508.719 1.074.945 1.68a6.24 6.24 0 0 1 .945-1.68 6.24 6.24 0 0 1 1.68-.945 6.24 6.24 0 0 1-1.68-.945 6.24 6.24 0 0 1-.945-1.68Z"></path></svg>';

export class IconVisionLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--visionLarge', '', null, 'IconVisionLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--visionLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--visionLarge', '', newVal, 'IconVisionLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-vision-large', IconVisionLarge);
