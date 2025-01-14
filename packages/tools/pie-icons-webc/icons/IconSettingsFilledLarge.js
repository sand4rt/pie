import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--settingsFilledLarge"><path d="M25.564 16.044v-.097a3.412 3.412 0 0 1 .875-2.423l1.409-1.453-2.529-4.375-2.012.517a3.5 3.5 0 0 1-2.582-.455 3.43 3.43 0 0 1-1.654-1.987L18.53 3.75h-5.057l-.57 2.004a3.5 3.5 0 0 1-1.68 2.004 3.5 3.5 0 0 1-2.554.437l-2.013-.516-2.529 4.375 1.374 1.47c.597.662.912 1.532.875 2.424v.104a3.412 3.412 0 0 1-.875 2.424L4.126 19.93l2.53 4.375 2.012-.516a3.5 3.5 0 0 1 2.625.454 3.43 3.43 0 0 1 1.654 1.987l.525 2.021h5.057l.569-2.004a3.78 3.78 0 0 1 4.235-2.441l2.012.516 2.529-4.375-1.374-1.47a3.421 3.421 0 0 1-.936-2.432ZM19.063 16a3.028 3.028 0 0 1-.875 2.17 3.132 3.132 0 0 1-4.323 0 3.063 3.063 0 1 1 5.25-2.17h-.052Z"></path></svg>';

export class IconSettingsFilledLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--settingsFilledLarge', '', null, 'IconSettingsFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--settingsFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--settingsFilledLarge', '', newVal, 'IconSettingsFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-settings-filled-large', IconSettingsFilledLarge);
