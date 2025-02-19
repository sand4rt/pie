import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--stampcardFilled"><path d="M13.967 5.996c-.078-.114-.218-.297-.245-.367a3.897 3.897 0 0 1-.104-.49c-.097-.56-.22-1.33-.823-1.934-.604-.604-1.374-.735-1.943-.831-.166-.027-.385-.062-.48-.105-.07-.027-.263-.167-.377-.254-.437-.315-1.102-.805-1.986-.805-.884 0-1.523.464-1.995.805-.105.079-.298.219-.376.245a3.07 3.07 0 0 1-.49.105c-.56.096-1.33.219-1.934.822-.586.587-.726 1.357-.814 1.882v.061c-.035.149-.07.385-.114.481-.035.07-.183.28-.253.376-.315.438-.805 1.103-.805 1.987 0 .883.48 1.557.813 2.003.079.114.21.298.245.368.035.087.07.289.105.49.097.56.219 1.321.823 1.934.604.604 1.409.743 1.942.831.167.026.385.061.473.105.07.035.271.175.376.254.438.324 1.103.805 1.986.805.884 0 1.558-.481 1.995-.805.105-.079.298-.219.377-.245.096-.044.332-.079.49-.105.524-.088 1.32-.219 1.925-.823.612-.604.734-1.373.83-1.951.027-.166.062-.385.106-.473.026-.07.166-.262.218-.332l.035-.053c.324-.437.806-1.102.806-1.986 0-.884-.464-1.522-.814-2.004l.008.01Zm-9.117.726v-.07a1.044 1.044 0 0 1 .98-1.12 1.044 1.044 0 0 1 1.12.98v.15a1.044 1.044 0 0 1-.98 1.12H5.9c-.577 0-1.05-.473-1.05-1.05v-.01Zm2.013 3.973H5.48l3.658-5.399h1.382l-3.657 5.399Zm4.287-1.208a1.061 1.061 0 0 1-1.12.98 1.061 1.061 0 0 1-.98-1.12v-.07c0-.577.473-1.05 1.05-1.05h.07c.578.044 1.015.543.98 1.12v.15-.01Z"></path></svg>';

export class IconStampcardFilled extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--stampcardFilled', '', null, 'IconStampcardFilled');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--stampcardFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--stampcardFilled', '', newVal, 'IconStampcardFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-stampcard-filled', IconStampcardFilled);
