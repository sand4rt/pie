import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--kebabBowlLarge"><g clip-path="url(#prefix__clip0_18_709)"><path d="m28.994 14.985-.123-.735H27.49c1.365-3.141.656-4.524-.263-5.127a2.223 2.223 0 0 0-2.073-.07 3.561 3.561 0 0 0-.21-1.278 2.195 2.195 0 0 0-1.348-1.269 2.94 2.94 0 0 0-3.08 1.085 2.091 2.091 0 0 0-1.829-1.172c-1.128.052-2.038 1.234-2.712 3.5h-.377c-.647-1.75-1.487-2.625-2.502-2.625a2.091 2.091 0 0 0-1.75 1.067 3.01 3.01 0 0 0-3.01-.997 2.082 2.082 0 0 0-1.374 1.26c-.125.32-.187.662-.184 1.006a2.319 2.319 0 0 0-1.986.061c-.875.543-1.636 1.75-.359 4.559H3.13l-.123.735c-.088.58-.132 1.164-.131 1.75 0 6.843 5.889 12.39 13.125 12.39s13.125-5.547 13.125-12.355c.003-.598-.04-1.194-.131-1.785Zm-10.282-6.86s.36.184.797 1.418a.875.875 0 0 0 .744.586.875.875 0 0 0 .875-.438c.376-.656 1.338-1.75 1.924-1.575a.464.464 0 0 1 .298.272 3.5 3.5 0 0 1-.219 2.03.875.875 0 0 0 1.348 1.085 3.15 3.15 0 0 1 1.82-.946c.42.272.341 1.532-.709 3.658h-4.288a5.32 5.32 0 0 0-3.552-4.016 5.048 5.048 0 0 1 .962-2.074Zm-3.876 3.693a3.71 3.71 0 0 1 2.345 0A3.544 3.544 0 0 1 19.5 14.25h-7a3.578 3.578 0 0 1 2.336-2.398v-.034Zm-9.152-.622c.683.084 1.32.392 1.811.875a.875.875 0 0 0 1.435-.665.875.875 0 0 0-.105-.429 2.686 2.686 0 0 1-.227-1.68.35.35 0 0 1 .27-.297c.64-.166 1.567.875 1.882 1.409a.875.875 0 0 0 1.549-.158c.13-.473.38-.904.726-1.251.114 0 .464.376.875 1.33a5.312 5.312 0 0 0-3.203 3.92H6.375c-.875-1.75-1.059-2.835-.691-3.054ZM16 27.375A11.654 11.654 0 0 1 6.812 23h-.07v-.087a10.08 10.08 0 0 1-2.117-6.125v-.77h6.23L7.941 21.25h2.004L12.894 16h4.532l-3.99 7h2.013l3.99-7h3.885l-2.949 5.25h2.004L25.327 16h2.048v.77c0 5.845-5.101 10.605-11.375 10.605Z"></path></g><defs><clipPath id="prefix__clip0_18_709"><rect width="28" height="28" transform="translate(2 2)"></rect></clipPath></defs></svg>';

export class IconKebabBowlLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--kebabBowlLarge', '', null, 'IconKebabBowlLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--kebabBowlLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--kebabBowlLarge', '', newVal, 'IconKebabBowlLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-kebab-bowl-large', IconKebabBowlLarge);
