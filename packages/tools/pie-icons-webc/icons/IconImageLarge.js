import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--imageLarge"><path d="M2.875 5.5v21h26.25v-21H2.875Zm24.5 1.75v9.144c-4.629-1.505-7.621.481-10.273 2.231-.63.42-1.233.805-1.846 1.155-2.896-1.155-6.151-2.494-10.631-.543V7.25h22.75Zm-.42 10.85a5.662 5.662 0 0 1-2.275 2.047 8.339 8.339 0 0 1-7.394.447l.779-.508c2.564-1.697 4.987-3.307 8.89-1.986Zm-22.33 6.65v-3.579c4.235-2.143 7.079-.971 10.071.28A15.192 15.192 0 0 0 20.62 23a10.316 10.316 0 0 0 4.874-1.313 8.004 8.004 0 0 0 1.881-1.312v4.375H4.625Zm7-7.875a3.937 3.937 0 1 0-3.938-3.938 3.946 3.946 0 0 0 3.938 3.938Zm0-6.125a2.187 2.187 0 1 1 0 4.375 2.187 2.187 0 0 1 0-4.375Z"></path></svg>';

export class IconImageLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--imageLarge', '', null, 'IconImageLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--imageLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--imageLarge', '', newVal, 'IconImageLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-image-large', IconImageLarge);
