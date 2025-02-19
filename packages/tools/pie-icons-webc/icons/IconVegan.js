import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--vegan"><path d="m14.484 1.718-.158-.657-.656.184c-.473.131-4.672 1.348-5.933 3.5C6.25 3.214 3.162 2.418 2.75 2.321l-.656-.157-.14.665c-.079.429-.84 4.296.359 6.212a3.623 3.623 0 0 0 3.053 1.75c.14.009.28.009.42 0l1.339 3.255h1.75l1.409-3.561c.205.038.412.059.621.061a3.938 3.938 0 0 0 3.386-1.96c1.278-2.135.306-6.387.193-6.868ZM3.424 8.34c-.674-1.023-.482-3.228-.289-4.55 1.277.394 3.343 1.217 3.99 2.24.038.07.07.143.096.219a3.806 3.806 0 0 0 .088 1.505c.02.068.043.136.07.201a2.24 2.24 0 0 1-.621.919l-.64-1.645h-1.75l.876 2.196a2.319 2.319 0 0 1-1.82-1.085ZM8 12.244l-.787-2.065c.342-.236.639-.532.875-.875a3.5 3.5 0 0 0 .743.639L8 12.243Zm5.154-4.323A2.625 2.625 0 0 1 10.8 9.225l.787-1.995H9.925l-.543 1.444a2.415 2.415 0 0 1-.804-1.269 2.625 2.625 0 0 1 .297-2.03c.7-1.19 3.063-2.187 4.471-2.625.271 1.426.543 3.973-.166 5.171h-.026Z"></path></svg>';

export class IconVegan extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--vegan', '', null, 'IconVegan');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--vegan');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--vegan', '', newVal, 'IconVegan');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-vegan', IconVegan);
