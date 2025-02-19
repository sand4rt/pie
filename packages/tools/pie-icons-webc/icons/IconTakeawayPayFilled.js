import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--takeawayPayFilled"><path d="M7.956 7.948h.359v-.01c.201 0 .332-.122.332-.314 0-.193-.14-.315-.332-.315h-.359v.639Z"></path><path d="M10.275 8.429c0 .192-.167.324-.385.324-.14 0-.254-.062-.254-.184 0-.114.105-.175.28-.184l.367-.026v.07h-.008Z"></path><path fill-rule="evenodd" d="M13.25 2.969H2.75c-.84 0-1.531.691-1.531 1.531v7c0 .84.691 1.531 1.531 1.531h10.5c.84 0 1.531-.691 1.531-1.531v-7c0-.84-.691-1.531-1.531-1.531ZM6.119 7.256c0 .009.008.027.008.027l.018-.01c.254.307.385.543.394.57v.026c0 .035-.07.079-.07.079l-.254.043c-.035.009-.061.035-.061.07-.003.012-.008.09-.015.204-.019.312-.054.888-.1 1.074-.008.035-.087.07-.087.07H4.054c-.044 0-.08-.026-.088-.061-.061-.254-.114-1.234-.114-1.278 0-.035-.061-.07-.061-.07l-.254-.044c-.043-.008-.07-.035-.07-.078v-.035c.018-.044.508-.91 1.4-1.444.044-.018.088-.035.132-.035a.2.2 0 0 1 .122.035c.175.105.525.499.525.499V6.59c0-.026.053-.052.053-.052l.262.026c.035.009.079.035.079.07 0 0 .052.306.079.621Zm1.4-.323h.84v-.01c.437 0 .743.29.743.7 0 .412-.315.7-.743.7h-.394v.692h-.446V6.933Zm2.454.463c-.313.001-.539.115-.652.254l.254.245c.07-.079.201-.131.367-.131.193 0 .333.087.333.289v.026l-.411.017c-.43.027-.648.193-.648.482 0 .297.245.48.586.48.219 0 .394-.078.482-.21v.167h.393v-.989c0-.357-.243-.628-.704-.63Zm0 0h-.004.008-.004Zm1.713 1.113-.405-1.069h-.455l.639 1.593c-.079.175-.14.236-.315.236-.053 0-.105 0-.14-.018v.368c.043.009.122.017.175.017.402 0 .551-.218.717-.621l.639-1.584h-.446l-.409 1.078Z" clip-rule="evenodd"></path></svg>';

export class IconTakeawayPayFilled extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--takeawayPayFilled', '', null, 'IconTakeawayPayFilled');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--takeawayPayFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--takeawayPayFilled', '', newVal, 'IconTakeawayPayFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-takeaway-pay-filled', IconTakeawayPayFilled);
