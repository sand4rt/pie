import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--ribbonHeartLarge"><path d="M27.016 24.4a14.877 14.877 0 0 1-3.211-4.296c.229-.63.33-1.3.297-1.969-.009-.425.041-.849.15-1.26.211-.362.477-.69.787-.971a3.702 3.702 0 0 0 1.382-2.529 3.702 3.702 0 0 0-1.382-2.485 4.155 4.155 0 0 1-.788-.971 4.568 4.568 0 0 1-.149-1.304 3.65 3.65 0 0 0-.76-2.625 3.693 3.693 0 0 0-2.626-.761 4.077 4.077 0 0 1-1.312-.149 4.068 4.068 0 0 1-.963-.779 3.72 3.72 0 0 0-2.52-1.426 3.702 3.702 0 0 0-2.485 1.383 4.096 4.096 0 0 1-.936.778c-.424.121-.864.171-1.304.149-.954-.1-1.91.173-2.669.761a3.684 3.684 0 0 0-.76 2.669c.021.44-.029.88-.15 1.304a4.095 4.095 0 0 1-.778.971 3.701 3.701 0 0 0-1.418 2.485 3.701 3.701 0 0 0 1.383 2.485c.31.295.574.638.778 1.015.121.424.171.864.15 1.304a5.39 5.39 0 0 0 .297 1.969A14.666 14.666 0 0 1 4.826 24.4l-1.312 1.225 4.917.814 2.389 3.159.709-.727a21.932 21.932 0 0 0 3.596-5.162 2.168 2.168 0 0 0 1.663 0 21.755 21.755 0 0 0 3.552 5.154l.709.726 2.388-3.159 4.883-.805-1.304-1.225ZM10.96 26.868 9.402 24.82l-2.152-.367a16.115 16.115 0 0 0 2.126-3.116 6.17 6.17 0 0 0 1.75.228c.44-.022.88.028 1.304.149.361.208.689.47.971.779.063.068.13.132.201.192a21.645 21.645 0 0 1-2.642 4.183Zm3.692-5.618a5.057 5.057 0 0 0-1.513-1.146 5.25 5.25 0 0 0-1.943-.28c-.577 0-1.242 0-1.461-.254-.219-.254-.236-.875-.254-1.461a5.25 5.25 0 0 0-.28-1.943 5.058 5.058 0 0 0-1.146-1.514c-.411-.428-.875-.874-.875-1.268s.472-.875.875-1.269c.475-.43.864-.947 1.146-1.523a5.25 5.25 0 0 0 .28-1.942c0-.578 0-1.234.254-1.461.254-.228.875-.237 1.461-.254a5.25 5.25 0 0 0 1.943-.28A5.058 5.058 0 0 0 14.652 5.5c.43-.411.875-.875 1.27-.875.393 0 .83.473 1.26.875.433.472.949.86 1.522 1.146a5.25 5.25 0 0 0 1.942.28c.578 0 1.234 0 1.461.254.228.254.237.875.245 1.461-.023.66.075 1.318.29 1.943.28.574.669 1.088 1.145 1.514.412.428.875.874.875 1.268s-.472.875-.875 1.269c-.476.425-.866.94-1.146 1.514a5.4 5.4 0 0 0-.289 1.942c0 .578 0 1.234-.245 1.461-.245.228-.875.237-1.46.254a5.252 5.252 0 0 0-1.943.28 5.252 5.252 0 0 0-1.523 1.164c-.429.411-.875.875-1.26.875s-.796-.473-1.269-.875Zm7.78 3.579-1.55 2.047a21.236 21.236 0 0 1-2.677-4.182l.201-.193c.28-.307.604-.57.963-.779.426-.12.87-.171 1.312-.148a5.922 5.922 0 0 0 1.75-.228 16.462 16.462 0 0 0 2.153 3.115l-2.153.368Z"></path><path d="m15.921 19.299-4.375-4.515a3.413 3.413 0 0 1 0-4.708 3.282 3.282 0 0 1 4.375-.175 3.194 3.194 0 0 1 4.375.184 3.395 3.395 0 0 1 0 4.699l-4.375 4.515Zm-2.109-8.435a1.453 1.453 0 0 0-1.04.446 1.68 1.68 0 0 0 0 2.249l3.15 3.229 3.14-3.23a1.662 1.662 0 0 0 0-2.248 1.487 1.487 0 0 0-2.09 0l-1.086 1.041-1.024-1.041a1.452 1.452 0 0 0-1.05-.446Z"></path></svg>';

export class IconRibbonHeartLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--ribbonHeartLarge', '', null, 'IconRibbonHeartLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--ribbonHeartLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--ribbonHeartLarge', '', newVal, 'IconRibbonHeartLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-ribbon-heart-large', IconRibbonHeartLarge);
