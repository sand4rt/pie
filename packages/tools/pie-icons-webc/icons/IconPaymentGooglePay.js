import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--googlePay"><path fill="#5F6368" d="M7.659 7.947v1.427h-.455V5.856h1.198c.29 0 .57.105.78.306.21.193.323.455.323.744 0 .28-.114.56-.324.744a1.07 1.07 0 0 1-.779.297H7.66Zm0-1.653v1.225h.76a.608.608 0 0 0 .447-.184.597.597 0 0 0 .009-.849h-.009a.592.592 0 0 0-.446-.201h-.761v.009Z"></path><path fill="#5F6368" d="M10.537 6.889c.333 0 .595.087.788.271.192.175.289.42.289.735v1.479h-.43V9.04h-.017c-.183.271-.437.412-.743.412a.967.967 0 0 1-.665-.237.76.76 0 0 1-.272-.586c0-.245.097-.446.28-.595.184-.149.438-.219.753-.219.271 0 .49.053.665.149V7.86A.545.545 0 0 0 11 7.458a.664.664 0 0 0-.437-.167.677.677 0 0 0-.595.315l-.394-.253c.219-.315.542-.473.971-.473l-.009.009Zm-.586 1.75c0 .114.053.227.149.297a.512.512 0 0 0 .35.114.722.722 0 0 0 .507-.21.667.667 0 0 0 .228-.499c-.14-.113-.341-.166-.586-.166a.756.756 0 0 0-.455.131.398.398 0 0 0-.184.333H9.95Z"></path><path fill="#5F6368" d="m14.099 6.968-1.505 3.464h-.464l.56-1.216-.989-2.248h.49l.718 1.723h.008l.7-1.723h.49-.008Z"></path><path fill="#4285F4" d="M5.83 7.641c0-.14-.009-.271-.035-.411H3.896v.779H4.99a.927.927 0 0 1-.402.612v.508h.647c.385-.35.604-.875.604-1.488H5.83Z"></path><path fill="#34A853" d="M3.896 9.61c.543 0 1.006-.175 1.339-.49l-.648-.507a1.216 1.216 0 0 1-.69.192c-.526 0-.972-.359-1.138-.831h-.674v.516a2.015 2.015 0 0 0 1.802 1.111l.01.009Z"></path><path fill="#FBBC04" d="M2.759 7.974a1.162 1.162 0 0 1 0-.77v-.516h-.674a2.002 2.002 0 0 0 0 1.81l.674-.515v-.01Z"></path><path fill="#EA4335" d="M3.896 6.372c.289 0 .569.105.77.307l.578-.578a1.935 1.935 0 0 0-1.348-.525c-.761 0-1.461.429-1.802 1.111l.674.517a1.198 1.198 0 0 1 1.137-.832h-.009Z"></path></svg>';

export class IconPaymentGooglePay extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--googlePay', '', null, 'IconPaymentGooglePay');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--googlePay');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--googlePay', '', newVal, 'IconPaymentGooglePay');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-payment-google-pay', IconPaymentGooglePay);
