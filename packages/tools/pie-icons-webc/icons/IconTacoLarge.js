import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--tacoLarge"><path d="m28.163 18.231-1.576.779c.386.779 1.015 2.625.5 3.5-.21.341-.683.516-1.41.516-.962 0-1.452-.761-2.09-1.925l-.263-.463-.123-.193a15.919 15.919 0 0 1-.621-1.146c2.905-1.138 4.305-2.774 3.85-4.568-.35-1.382-1.619-1.662-2.546-1.872a2.625 2.625 0 0 1-1.252-.49c-.087-.105.114-.744.22-1.05.323-1.015.822-2.555-.605-3.736-1.25-1.033-2.817-.49-4.068-.053-1.523.534-1.943.551-2.223.096A3.965 3.965 0 0 0 12.911 5.5a3.194 3.194 0 0 0-2.625 1.103C8.501 8.71 7.521 8.413 6.568 8.125a2.354 2.354 0 0 0-2.065.053C2 9.753 3.75 13.47 4.625 15.038a14.71 14.71 0 0 0-1.636 6.65 3.002 3.002 0 0 0 .761 2.187 2.625 2.625 0 0 0 1.916.875h20.011a3.15 3.15 0 0 0 2.905-1.348c1.155-1.863-.262-4.838-.42-5.17ZM5.413 9.683c.219.005.435.05.638.13 1.199.342 3.054.937 5.574-2.082a1.4 1.4 0 0 1 1.155-.481 2.266 2.266 0 0 1 1.68 1.243c1.085 1.75 2.931 1.12 4.287.647 1.138-.402 1.917-.63 2.372-.254.455.377.402.762.052 1.855-.262.823-.595 1.838.096 2.695.6.599 1.382.98 2.223 1.085.875.193 1.155.306 1.234.595.21.832-.875 1.803-2.914 2.555-1.435-3.132-3.377-6.921-8.724-6.921a12.437 12.437 0 0 0-3.447.438 8.251 8.251 0 0 0-3.868 2.274c-.682-1.417-1.242-3.22-.341-3.78h-.018ZM5.7 23a.876.876 0 0 1-.647-.289 1.26 1.26 0 0 1-.324-.945c.079-1.75.341-4.375 1.68-6.317a6.388 6.388 0 0 1 3.701-2.582c.97-.256 1.971-.38 2.975-.367 4.375 0 5.758 2.984 7.245 6.125l.289.613c.35.765.745 1.51 1.181 2.23l.079.106.175.323c.184.324.394.71.648 1.077L5.7 23Zm2.424-3.5a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0ZM10.75 16a.874.874 0 1 1-1.748 0 .874.874 0 0 1 1.748 0Zm7.875 3.5a.874.874 0 1 1-1.748 0 .874.874 0 0 1 1.748 0Zm-5.25 0a.874.874 0 1 1-1.748 0 .874.874 0 0 1 1.748 0ZM16 16a.874.874 0 1 1-1.748 0A.874.874 0 0 1 16 16Z"></path></svg>';

export class IconTacoLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--tacoLarge', '', null, 'IconTacoLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--tacoLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--tacoLarge', '', newVal, 'IconTacoLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-taco-large', IconTacoLarge);
