import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--walletFilledLarge"><path d="m21.04 7.005-.787-1.899a2.626 2.626 0 0 0-3.43-1.426L8.808 7.005H21.04Z"></path><path d="M25.625 23.446h-6.562a.718.718 0 0 1-.718-.717v-9.021a.718.718 0 0 1 .718-.71h7.525v-1.67a2.625 2.625 0 0 0-.254-1.112 2.625 2.625 0 0 0-2.459-1.627H5.5c-.558.003-1.1.184-1.549.516a3.176 3.176 0 0 0-.428.411l-.158.21-.07.088c-.086.126-.16.261-.219.402a2.625 2.625 0 0 0-.253 1.112v13.886A2.678 2.678 0 0 0 5.5 27.89h18.375a2.677 2.677 0 0 0 2.678-2.677v-1.75h-.928v-.018Z"></path><path d="M20.095 14.749v6.947h9.03V14.75h-9.03Z"></path></svg>';

export class IconWalletFilledLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--walletFilledLarge', '', null, 'IconWalletFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--walletFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--walletFilledLarge', '', newVal, 'IconWalletFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-wallet-filled-large', IconWalletFilledLarge);
