import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--convenience"><path d="m13.075 12.655-.709-6.458h-.831v-1.96H8.62a1.7 1.7 0 0 0-1.417-1.61v-1.47H5.89v1.47A1.701 1.701 0 0 0 4.465 4.3v1.89H3.58l-.709 6.457a1.97 1.97 0 0 0 1.96 2.188h6.283a1.97 1.97 0 0 0 1.96-2.188v.009Zm-2.853-6.458H8.63V5.56h1.592v.638Zm-4.436-1.89c0-.218.175-.393.394-.393h.752c.22 0 .394.175.394.393v1.89H5.795v-1.89h-.009Zm5.819 9.004a.657.657 0 0 1-.49.219H4.832a.643.643 0 0 1-.49-.219.676.676 0 0 1-.166-.507l.586-5.294h6.432l.586 5.294a.643.643 0 0 1-.166.507h-.01Z"></path><path d="M7.956 9.514a.859.859 0 0 1-.857-.858H5.786a2.17 2.17 0 1 0 4.34 0H8.814a.859.859 0 0 1-.858.858Z"></path></svg>';

export class IconConvenience extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--convenience', '', null, 'IconConvenience');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--convenience');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--convenience', '', newVal, 'IconConvenience');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-convenience', IconConvenience);
