import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--dineInLarge"><g clip-path="url(#prefix__clip0_18_1452)"><path d="M28.757 7.25a4.445 4.445 0 1 0-8.89 0h-.726V9h10.343V7.25h-.727Zm-4.445-2.625a2.704 2.704 0 0 1 2.695 2.625h-5.39a2.704 2.704 0 0 1 2.695-2.625ZM12.5 10.313a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm6.125 8.46a.7.7 0 0 1-.805 0l-3.141-1.898h-3.23a8.854 8.854 0 0 0-7.953 4.891l-.875 1.628 1.558.814.875-1.645a7.079 7.079 0 0 1 3.5-3.334v2.686a4.804 4.804 0 0 0 2.248 4.043l.937.603a8.567 8.567 0 0 1-2.415 1.497l-5.382 2.537.753 1.575 5.355-2.52a10 10 0 0 0 3.202-2.109l1.873 1.234 2.695 5.959 1.592-.718-2.887-6.431-2.161-1.409a6.668 6.668 0 0 0 1.102-3.088l.403-3.5 1.04.62a2.45 2.45 0 0 0 2.827-.095l5.093-4.113h-2.774l-3.43 2.774Zm-4.9 4.14a5.117 5.117 0 0 1-.823 2.318l-1.146-.744a3.063 3.063 0 0 1-1.444-2.572v-3.194a7.04 7.04 0 0 1 1.138-.096h2.747l-.472 4.288Z"></path></g><defs><clipPath id="prefix__clip0_18_1452"><rect width="28" height="28" transform="translate(2 2)"></rect></clipPath></defs></svg>';

export class IconDineInLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--dineInLarge', '', null, 'IconDineInLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--dineInLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--dineInLarge', '', newVal, 'IconDineInLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-dine-in-large', IconDineInLarge);
