import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--milkLarge"><path d="m21.285 9.582-1.55-2.336V4.71h.574V2.96h-8.592v1.743h.549v2.535l-1.551 2.336a2.902 2.902 0 0 0-.488 1.62v15.234a2.622 2.622 0 0 0 2.614 2.614h6.327a2.622 2.622 0 0 0 2.614-2.614V11.194c0-.575-.174-1.142-.488-1.621l-.009.009Zm-3.294-4.88v3.067l1.848 2.78c.13.192.2.418.2.654v1.176l-.026-.06c-1.168.417-2.126-.097-3.582-.968-1.054-.636-2.326-1.377-3.8-1.5l1.378-2.073V4.71h3.982v-.008Zm1.168 22.605h-6.327a.874.874 0 0 1-.871-.871V11.569c1.272-.105 2.44.592 3.564 1.272 1.133.68 2.283 1.368 3.643 1.368.279 0 .566-.043.854-.104v2.518h-3.19a2.622 2.622 0 0 0-2.614 2.614v2.24a2.622 2.622 0 0 0 2.614 2.614h3.19v2.336c0 .48-.392.872-.872.872l.009.008Zm.793-8.941v3.983h-3.12a.874.874 0 0 1-.871-.872v-2.24c0-.479.392-.871.871-.871h3.12Z"></path></svg>';

export class IconMilkLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--milkLarge', '', null, 'IconMilkLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--milkLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--milkLarge', '', newVal, 'IconMilkLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-milk-large', IconMilkLarge);
