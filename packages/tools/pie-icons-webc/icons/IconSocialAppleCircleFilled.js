import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--appleCircleFilled"><g clip-path="url(#prefix__clip0_1611_720)"><path d="M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Zm0 4.541a1.671 1.671 0 0 1 1.312-1.409h.158c.032.267-.013.538-.131.78a1.479 1.479 0 0 1-1.06.874c-.34.088-.332.096-.28-.245Zm3.019 4.034a.47.47 0 0 0 0 .096 4.261 4.261 0 0 1-.954 1.558 1.024 1.024 0 0 1-1.234.175 1.286 1.286 0 0 0-1.312 0c-.193.095-.407.14-.622.131a.875.875 0 0 1-.656-.368 4.541 4.541 0 0 1-1.26-3.167c.005-.328.074-.652.201-.954a1.75 1.75 0 0 1 2.407-.919.928.928 0 0 0 .927 0c.15-.07.305-.13.464-.175a1.943 1.943 0 0 1 1.155.123c.287.108.528.312.682.577-.105.097-.21.175-.306.272a2.014 2.014 0 0 0-.289.323 1.636 1.636 0 0 0 .228 1.917c.15.178.347.311.569.385v.026Z"></path></g><defs><clipPath id="prefix__clip0_1611_720"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconSocialAppleCircleFilled extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--appleCircleFilled', '', null, 'IconSocialAppleCircleFilled');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--appleCircleFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--appleCircleFilled', '', newVal, 'IconSocialAppleCircleFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-social-apple-circle-filled', IconSocialAppleCircleFilled);