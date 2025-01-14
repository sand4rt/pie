import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--takeawayPay"><path d="M13.25 2.969H2.75c-.84 0-1.531.691-1.531 1.531v7c0 .84.691 1.531 1.531 1.531h10.5c.84 0 1.531-.691 1.531-1.531v-7c0-.84-.691-1.531-1.531-1.531Zm.219 8.531a.217.217 0 0 1-.219.219H2.75a.217.217 0 0 1-.219-.219v-7c0-.122.096-.219.219-.219h10.5c.123 0 .219.097.219.219v7Z"></path><path d="M8.359 6.933h-.84v2.082h.446v-.691h.394c.428 0 .743-.289.743-.7s-.306-.7-.743-.7v.008Zm-.044 1.014h-.359V7.31h.359c.193 0 .333.122.333.315 0 .192-.132.315-.333.315v.008Z"></path><path d="M6.128 7.282s-.01-.017-.01-.026a8.258 8.258 0 0 0-.078-.621c0-.035-.044-.061-.079-.07L5.7 6.539s-.053.026-.053.052v.306s-.35-.393-.525-.498A.2.2 0 0 0 5 6.364c-.044 0-.088.017-.131.035a4.163 4.163 0 0 0-1.4 1.444v.035c0 .043.026.07.07.078L3.79 8s.062.035.062.07c0 .044.052 1.024.113 1.277.009.036.044.062.088.062h1.898s.08-.035.088-.07c.061-.254.105-1.234.114-1.278 0-.035.026-.061.061-.07l.254-.043s.07-.044.07-.08v-.026a3.194 3.194 0 0 0-.394-.568l-.017.008Z"></path><path d="M9.977 7.396c-.315 0-.542.114-.656.254l.254.245c.07-.079.201-.131.368-.131.192 0 .332.087.332.288v.027l-.411.017c-.429.027-.648.193-.648.482 0 .297.245.48.587.48.218 0 .393-.078.48-.21v.167h.395v-.989c0-.358-.246-.63-.71-.63h.01Zm.298 1.033c0 .192-.166.323-.385.323-.14 0-.254-.06-.254-.183 0-.114.105-.175.28-.184l.368-.026v.07h-.009Z"></path><path d="M11.693 8.525 11.28 7.44h-.455l.639 1.593c-.079.175-.14.236-.315.236-.053 0-.105 0-.14-.018v.368c.044.008.123.017.175.017.402 0 .551-.218.717-.621l.64-1.584h-.447l-.411 1.085.009.009Z"></path></svg>';

export class IconTakeawayPay extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--takeawayPay', '', null, 'IconTakeawayPay');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--takeawayPay');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--takeawayPay', '', newVal, 'IconTakeawayPay');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-takeaway-pay', IconTakeawayPay);
