import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--eyeOffLarge"><path d="M23.56 9.674 27.734 5.5h-2.468L22.17 8.598a11.375 11.375 0 0 0-14.193 1.496L2.08 16l5.897 5.906c.15.149.307.28.464.42L4.266 26.5h2.468l3.141-3.098a11.375 11.375 0 0 0 14.193-1.496L29.92 16l-5.897-5.906c-.149-.149-.306-.28-.464-.42ZM9.674 21.049a9.936 9.936 0 0 1-.455-.42L4.546 16l4.673-4.664A9.572 9.572 0 0 1 20.89 9.875l-2.17 2.161a4.76 4.76 0 0 0-2.72-.875A4.82 4.82 0 0 0 11.187 16a4.76 4.76 0 0 0 .875 2.721l-2.39 2.328Zm9.012-6.528a3.045 3.045 0 0 1-4.13 4.13l4.13-4.13Zm-5.372 2.888a3.045 3.045 0 0 1 4.13-4.13l-4.13 4.13Zm9.467 3.22a9.573 9.573 0 0 1-11.672 1.496l2.17-2.161a4.76 4.76 0 0 0 2.721.875A4.822 4.822 0 0 0 20.813 16a4.76 4.76 0 0 0-.875-2.721l2.362-2.363c.149.131.306.271.455.42L27.454 16l-4.673 4.629Z"></path></svg>';

export class IconEyeOffLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--eyeOffLarge', '', null, 'IconEyeOffLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--eyeOffLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--eyeOffLarge', '', newVal, 'IconEyeOffLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-eye-off-large', IconEyeOffLarge);
