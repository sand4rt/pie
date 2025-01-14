import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--kebabBowl"><path d="m14.711 7.886-.096-.542h-.271a3.23 3.23 0 0 0 .402-1.89 1.252 1.252 0 0 0-.604-.875 1.347 1.347 0 0 0-.892-.079 1.917 1.917 0 0 0-.131-.665 1.295 1.295 0 0 0-.814-.77 1.592 1.592 0 0 0-1.68.56 1.058 1.058 0 0 0-.875-.332c-.586 0-1.068.525-1.435 1.452a2.143 2.143 0 0 0-.341 0 2.372 2.372 0 0 0-.35 0c-.35-.875-.823-1.356-1.4-1.391a1.12 1.12 0 0 0-.875.332 1.566 1.566 0 0 0-1.637-.656 1.269 1.269 0 0 0-.813.77c-.09.223-.14.46-.149.7a1.251 1.251 0 0 0-1.496.954 3.229 3.229 0 0 0 .402 1.89h-.271l-.096.542c-.047.29-.07.582-.07.875 0 3.317 3.045 6.012 6.781 6.012 3.736 0 6.781-2.695 6.781-6.012 0-.293-.023-.585-.07-.875ZM9.83 4.72c.067.11.123.228.166.35a.639.639 0 0 0 .578.411.648.648 0 0 0 .612-.359 2.52 2.52 0 0 1 .691-.875c.07.318.045.65-.07.954a.647.647 0 0 0 .07.761.656.656 0 0 0 .875.088 3.88 3.88 0 0 1 .683-.35 3.133 3.133 0 0 1-.613 1.627h-1.925a2.819 2.819 0 0 0-1.312-2.161c.067-.156.149-.306.245-.446Zm-.245 2.625H6.416a1.61 1.61 0 0 1 3.168 0ZM2.53 5.778c.245.077.473.199.674.358a.656.656 0 0 0 1.015-.761 2.774 2.774 0 0 1-.149-1.076c.32.219.575.522.735.875a.674.674 0 0 0 .622.376.656.656 0 0 0 .586-.42c.045-.133.107-.26.183-.376.082.128.152.262.21.402a2.835 2.835 0 0 0-1.303 2.188H3.152a3.5 3.5 0 0 1-.62-1.566ZM8 13.468c-3.019 0-5.469-2.108-5.469-4.698v-.114H13.47v.114c0 2.59-2.45 4.699-5.469 4.699Z"></path></svg>';

export class IconKebabBowl extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--kebabBowl', '', null, 'IconKebabBowl');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--kebabBowl');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--kebabBowl', '', newVal, 'IconKebabBowl');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-kebab-bowl', IconKebabBowl);
