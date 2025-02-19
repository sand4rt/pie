import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--starCircleLarge"><path d="M16 3.75C9.245 3.75 3.75 9.245 3.75 16S9.245 28.25 16 28.25 28.25 22.755 28.25 16 22.755 3.75 16 3.75Zm0 22.75c-5.793 0-10.5-4.707-10.5-10.5S10.216 5.5 16 5.5 26.5 10.207 26.5 16 21.793 26.5 16 26.5Z"></path><path d="m21.652 13.62-3.36-.49-1.505-3.045c-.148-.298-.463-.446-.787-.446s-.639.149-.787.446l-1.505 3.045-3.36.49a.873.873 0 0 0-.49 1.488l2.432 2.37-.577 3.343a.884.884 0 0 0 .35.858.871.871 0 0 0 .928.061l3-1.575 3.002 1.575a.87.87 0 0 0 .927-.061.877.877 0 0 0 .35-.858l-.578-3.342 2.433-2.371a.873.873 0 0 0-.49-1.488h.017Zm-3.167 2.607-.656.64.157.91.271 1.6-1.434-.752-.814-.429-.814.429-1.435.753.271-1.602.158-.91-.656-.639-1.164-1.128 1.601-.236.91-.132.411-.822.718-1.453.717 1.453.412.822.91.132 1.6.236-1.163 1.128Z"></path></svg>';

export class IconStarCircleLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--starCircleLarge', '', null, 'IconStarCircleLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--starCircleLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--starCircleLarge', '', newVal, 'IconStarCircleLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-star-circle-large', IconStarCircleLarge);
