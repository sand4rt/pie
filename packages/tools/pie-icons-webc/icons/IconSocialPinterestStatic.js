import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--pinterestStatic"><g clip-path="url(#prefix__clip0_1615_900)"><path fill="#E60023" d="M8 1.875a6.125 6.125 0 0 0-2.232 11.83c-.054-.484-.102-1.23.021-1.758.111-.478.718-3.045.718-3.045s-.183-.367-.183-.91c0-.851.494-1.487 1.108-1.487.523 0 .775.393.775.863 0 .526-.334 1.311-.507 2.04-.144.609.306 1.106.907 1.106 1.089 0 1.926-1.148 1.926-2.805 0-1.466-1.054-2.492-2.559-2.492-1.743 0-2.766 1.308-2.766 2.659 0 .526.203 1.09.456 1.397.05.061.058.114.043.176l-.17.695c-.027.112-.09.136-.205.082-.765-.357-1.243-1.475-1.243-2.373 0-1.932 1.403-3.707 4.047-3.707 2.124 0 3.776 1.514 3.776 3.538 0 2.11-1.332 3.81-3.179 3.81-.62 0-1.204-.323-1.404-.704l-.381 1.456c-.139.532-.512 1.199-.762 1.606A6.125 6.125 0 1 0 8 1.875Z"></path></g><defs><clipPath id="prefix__clip0_1615_900"><rect width="14" height="14" fill="#fff" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconSocialPinterestStatic extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pinterestStatic', '', null, 'IconSocialPinterestStatic');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--pinterestStatic');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pinterestStatic', '', newVal, 'IconSocialPinterestStatic');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-social-pinterest-static', IconSocialPinterestStatic);
