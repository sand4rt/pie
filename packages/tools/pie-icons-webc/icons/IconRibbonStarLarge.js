import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--ribbonStarLarge"><path d="M27.095 24.4a14.873 14.873 0 0 1-3.22-4.296 5.25 5.25 0 0 0 .306-1.969 4.017 4.017 0 0 1 .158-1.26c.209-.361.471-.69.779-.971a3.702 3.702 0 0 0 1.382-2.529 3.702 3.702 0 0 0-1.382-2.485 4.096 4.096 0 0 1-.779-.971 4.015 4.015 0 0 1-.149-1.304 3.728 3.728 0 0 0-.761-2.625 3.727 3.727 0 0 0-2.625-.761 4.016 4.016 0 0 1-1.304-.193 4.095 4.095 0 0 1-.971-.778A3.7 3.7 0 0 0 16 2.875a3.702 3.702 0 0 0-2.485 1.383c-.282.307-.61.57-.971.778-.424.121-.864.171-1.304.149a3.693 3.693 0 0 0-2.625.761 3.693 3.693 0 0 0-.77 2.669c.022.44-.028.88-.148 1.304a4.095 4.095 0 0 1-.78.971A3.701 3.701 0 0 0 5.5 13.375a3.701 3.701 0 0 0 1.383 2.485c.31.295.574.638.779 1.015.12.424.17.864.148 1.304a5.25 5.25 0 0 0 .315 1.925 14.875 14.875 0 0 1-3.22 4.296l-1.312 1.225 4.917.814 2.389 3.159.726-.735a22.354 22.354 0 0 0 3.553-5.154 2.16 2.16 0 0 0 1.662 0 22.352 22.352 0 0 0 3.535 5.154l.718.726 2.389-3.159 4.926-.805-1.313-1.225ZM11.04 26.868 9.49 24.82l-2.196-.367c.84-.95 1.566-1.996 2.161-3.116a6.17 6.17 0 0 0 1.75.228c.44-.022.88.028 1.304.149.362.208.69.47.971.779l.201.192a21.232 21.232 0 0 1-2.642 4.183Zm3.693-5.618a5.057 5.057 0 0 0-1.514-1.146 5.25 5.25 0 0 0-1.943-.28c-.577 0-1.242 0-1.461-.254-.219-.254-.236-.875-.254-1.461a5.25 5.25 0 0 0-.28-1.943 5.059 5.059 0 0 0-1.155-1.522c-.402-.394-.875-.919-.875-1.269 0-.35.473-.875.875-1.269.478-.427.87-.94 1.155-1.514a5.25 5.25 0 0 0 .28-1.942c0-.578 0-1.234.254-1.461.254-.228.875-.237 1.461-.254a5.25 5.25 0 0 0 1.943-.28A5.058 5.058 0 0 0 14.732 5.5c.428-.411.875-.875 1.268-.875.394 0 .875.473 1.269.875.428.474.941.863 1.514 1.146a5.25 5.25 0 0 0 1.942.28c.578 0 1.243 0 1.461.254.22.254.237.875.254 1.461a5.25 5.25 0 0 0 .28 1.943 5.055 5.055 0 0 0 1.155 1.522c.412.429.875.875.875 1.269 0 .394-.472.875-.875 1.269a5.057 5.057 0 0 0-1.146 1.513 5.25 5.25 0 0 0-.28 1.943c0 .577 0 1.234-.254 1.461-.253.228-.875.236-1.461.254a5.25 5.25 0 0 0-1.943.28 5.056 5.056 0 0 0-1.522 1.155c-.429.411-.919.875-1.269.875-.35 0-.875-.473-1.268-.875Zm7.778 3.579-1.549 2.047a21.236 21.236 0 0 1-2.677-4.182l.201-.193c.295-.314.638-.58 1.015-.787.424-.121.864-.171 1.304-.149a5.922 5.922 0 0 0 1.75-.228 16.119 16.119 0 0 0 2.196 3.116l-2.24.376Z"></path><path d="M21.25 11.879a1.084 1.084 0 0 0-.875-.744l-2.362-.341L16.98 8.65a1.093 1.093 0 0 0-1.96 0l-1.059 2.144-2.336.341a1.094 1.094 0 0 0-.604 1.864l1.75 1.671-.402 2.362a1.093 1.093 0 0 0 1.584 1.147L16 17.068l2.118 1.11c.156.084.33.127.507.123a1.084 1.084 0 0 0 1.076-1.277L19.3 14.67l1.75-1.671a1.084 1.084 0 0 0 .201-1.12Zm-3.867 2.178L17.75 16 16 15.125 14.25 16l.333-1.951-1.418-1.374 1.96-.28.875-1.75.875 1.75 1.96.28-1.452 1.382Z"></path></svg>';

export class IconRibbonStarLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--ribbonStarLarge', '', null, 'IconRibbonStarLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--ribbonStarLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--ribbonStarLarge', '', newVal, 'IconRibbonStarLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-ribbon-star-large', IconRibbonStarLarge);
