import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--carLarge"><path d="M10.75 17.75h-3.5v1.75h3.5v-1.75Z"></path><path d="M26.824 12.5h2.738l-.875-1.75h-2.362l-.875-3.351a2.493 2.493 0 0 0-1.689-1.829A33.645 33.645 0 0 0 16 4.625c-2.62.01-5.232.328-7.779.945a2.494 2.494 0 0 0-1.689 1.829l-.857 3.351H3.313l-.876 1.75h2.74l-1.2 2.783c-.15.357-.227.74-.227 1.128V26.5H5.5v-2.625l.21.052c3.403.541 6.844.816 10.29.823a63.94 63.94 0 0 0 10.308-.814l.192-.061V26.5h1.75V16.411c0-.387-.078-.771-.227-1.129l-1.2-2.782ZM8.23 7.827a.761.761 0 0 1 .473-.577A31.168 31.168 0 0 1 16 6.375c2.459.003 4.908.297 7.297.875a.76.76 0 0 1 .473.569l1.225 4.76c-2.97.516-5.98.782-8.995.796a52.5 52.5 0 0 1-9.004-.779L8.23 7.827ZM26.5 22.003a.99.99 0 0 1-.499.21c-3.307.53-6.652.794-10.001.788a63.8 63.8 0 0 1-9.984-.788 1.085 1.085 0 0 1-.516-.21v-5.59c-.002-.151.028-.3.088-.438l.734-1.75c3.193.59 6.432.892 9.678.901a56.879 56.879 0 0 0 9.677-.875l.736 1.75c.06.138.09.287.087.438v5.565Z"></path><path d="M24.75 17.75h-3.5v1.75h3.5v-1.75Z"></path></svg>';

export class IconCarLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--carLarge', '', null, 'IconCarLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--carLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--carLarge', '', newVal, 'IconCarLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-car-large', IconCarLarge);
