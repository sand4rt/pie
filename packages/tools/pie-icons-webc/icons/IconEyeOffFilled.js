import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--eyeOffFilled"><path d="m12.542 5.375-.928.928-1.251 1.242c.028.15.042.302.044.455A2.424 2.424 0 0 1 8 10.406a2.621 2.621 0 0 1-.455-.043L5.997 11.91l-.49.464A5.25 5.25 0 0 0 8 13.031a5.398 5.398 0 0 0 4.017-1.82L14.939 8l-2.397-2.625Z"></path><path d="m6.793 9.26.463-.464a1.111 1.111 0 0 0 1.514 0A1.068 1.068 0 0 0 9.094 8a1.111 1.111 0 0 0-.298-.744l.464-.463.49-.464.945-.954.945-.945 2.485-2.555h-1.803l-1.75 1.75a5.329 5.329 0 0 0-4.774-.175c-.692.314-1.31.77-1.814 1.339L1.07 8l2.441 2.686L1 13.25h1.803l2.082-2.082.49-.473.954-.945.464-.49ZM5.593 8a2.38 2.38 0 0 1 .71-1.697 2.45 2.45 0 0 1 2.222-.63l-.586.577-2.284 2.284A2.179 2.179 0 0 1 5.594 8Z"></path></svg>';

export class IconEyeOffFilled extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--eyeOffFilled', '', null, 'IconEyeOffFilled');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--eyeOffFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--eyeOffFilled', '', newVal, 'IconEyeOffFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-eye-off-filled', IconEyeOffFilled);
