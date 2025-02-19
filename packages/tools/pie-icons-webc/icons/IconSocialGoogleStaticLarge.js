import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--googleStaticLarge"><g clip-path="url(#prefix__clip0_923_592)"><path fill="#FBC02D" d="M29.728 13.258H28.6V13.2H16v5.6h7.912c-1.154 3.26-4.256 5.6-7.912 5.6a8.4 8.4 0 0 1 0-16.8c2.141 0 4.09.808 5.573 2.127l3.96-3.96C23.033 3.437 19.688 2 16 2 8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14c0-.939-.097-1.855-.272-2.742Z"></path><path fill="#E53935" d="m3.614 9.484 4.6 3.373A8.396 8.396 0 0 1 16 7.6c2.141 0 4.09.808 5.573 2.127l3.96-3.96C23.033 3.437 19.688 2 16 2 10.623 2 5.96 5.036 3.614 9.484Z"></path><path fill="#4CAF50" d="M16 30c3.616 0 6.902-1.384 9.386-3.634l-4.333-3.667A8.337 8.337 0 0 1 16 24.4c-3.641 0-6.733-2.322-7.898-5.562l-4.566 3.517C5.853 26.89 10.56 30 16 30Z"></path><path fill="#1565C0" d="m29.728 13.258-.012-.058H16v5.6h7.912a8.428 8.428 0 0 1-2.86 3.9l.001-.001 4.333 3.667C25.08 26.644 30 23 30 16c0-.939-.097-1.855-.272-2.742Z"></path></g><defs><clipPath id="prefix__clip0_923_592"><rect width="28" height="28" fill="#fff" transform="translate(2 2)"></rect></clipPath></defs></svg>';

export class IconSocialGoogleStaticLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--googleStaticLarge', '', null, 'IconSocialGoogleStaticLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--googleStaticLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--googleStaticLarge', '', newVal, 'IconSocialGoogleStaticLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-social-google-static-large', IconSocialGoogleStaticLarge);
