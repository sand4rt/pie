import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--androidCircleFilledLarge"><path d="M14.873 11.208c0 .263-.194.474-.434.474s-.434-.211-.434-.474.194-.474.434-.48c.24 0 .434.212.434.475v.005Z"></path><path d="M18.11 11.208c0 .263-.193.474-.433.474s-.434-.211-.434-.474.194-.474.434-.48c.24 0 .434.212.434.475v.005Z"></path><path fill-rule="evenodd" d="M9.194 26.186a12.25 12.25 0 1 0 13.612-20.37 12.25 12.25 0 0 0-13.612 20.37Zm4.077-15.807a3.816 3.816 0 0 1 2.309-1.104h.845c.9.097 1.705.5 2.302 1.099l.686-1.326a.084.084 0 0 1 .12-.036c.042.026.056.088.033.134l-.708 1.366c.57.634.918 1.46.93 2.366h-7.57a3.595 3.595 0 0 1 .922-2.36l-.71-1.372c-.024-.046-.01-.108.032-.134a.084.084 0 0 1 .12.036l.69 1.33Zm1.676 10.271h2.106v2.412c0 .52.374.938.84.938.467 0 .841-.423.841-.938V20.65h.037c.578 0 1.04-.526 1.04-1.18v-6.19h-7.617l-.002.054a.821.821 0 0 0-.003.054v6.082c0 .654.462 1.18 1.04 1.18h.037v2.412c0 .52.374.938.84.938.467 0 .84-.423.84-.938V20.65Zm-3.266-5.891c0-.52-.378-.938-.84-.938-.467 0-.841.423-.841.938v4.015c0 .52.374.938.84.938.467 0 .841-.423.841-.938v-4.015Zm9.478-.938c.462 0 .841.418.841.938v4.015c0 .515-.374.938-.84.938-.467 0-.841-.418-.841-.938v-4.015c0-.515.374-.938.84-.938Z" clip-rule="evenodd"></path></svg>';

export class IconSocialAndroidCircleFilledLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--androidCircleFilledLarge', '', null, 'IconSocialAndroidCircleFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--androidCircleFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--androidCircleFilledLarge', '', newVal, 'IconSocialAndroidCircleFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-social-android-circle-filled-large', IconSocialAndroidCircleFilledLarge);
