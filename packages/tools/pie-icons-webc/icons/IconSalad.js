import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--salad"><path d="M14.037 7.344c.082-.128.147-.267.193-.412a2.066 2.066 0 0 0-.236-1.837.236.236 0 0 1 0-.184 2.26 2.26 0 0 0 .14-.875 2.084 2.084 0 0 0-.875-1.592 1.943 1.943 0 0 0-2.354 0 .175.175 0 0 1-.105 0 1.75 1.75 0 0 0-.796-.14 1.969 1.969 0 0 0-1.558.875.315.315 0 0 1 0 .078 2.074 2.074 0 0 0-.971-.875 1.969 1.969 0 0 0-.875-.166.131.131 0 0 1-.131-.052 2.048 2.048 0 0 0-2.319-.867 2.126 2.126 0 0 0-1.4 1.295 2.327 2.327 0 0 0-.158.875.245.245 0 0 1-.087.228 2.249 2.249 0 0 0 0 3.57.228.228 0 0 1 .061.087H1.22v1.523a4.148 4.148 0 0 0 2.73 3.894l.262 1.137h7.578l.262-1.137a4.147 4.147 0 0 0 2.73-3.894V7.344h-.744ZM9.4 4.404a.875.875 0 0 1 .157-.473.648.648 0 0 1 .517-.306.708.708 0 0 1 .28.052 1.391 1.391 0 0 0 1.356-.157.656.656 0 0 1 .796 0 .804.804 0 0 1 .289.56.995.995 0 0 1-.061.359 1.533 1.533 0 0 0 .166 1.373.822.822 0 0 1 .088.7.69.69 0 0 1-.464.455 1.391 1.391 0 0 0-.621.377H10.8c.292-.404.555-.828.787-1.269l-1.163-.604a8.874 8.874 0 0 1-1.199 1.75 2.249 2.249 0 0 0-.446-1.549A1.619 1.619 0 0 0 9.4 4.404ZM3.319 6.197a.875.875 0 0 1-.35-.726.875.875 0 0 1 .35-.726 1.566 1.566 0 0 0 .612-1.313c.003-.128.027-.255.07-.376a.822.822 0 0 1 .499-.49.761.761 0 0 1 .875.333 1.488 1.488 0 0 0 1.277.656.796.796 0 0 1 .597.302c.082.098.141.213.174.337a.936.936 0 0 1 0 .56c-.141.397-.122.833.052 1.216.07.163.16.316.271.455a.928.928 0 0 1 .193.779v.131H6.915A4.559 4.559 0 0 1 5.909 5.27l-1.295.21c.127.653.357 1.283.682 1.864H3.922a1.531 1.531 0 0 0-.603-1.147Zm10.15 2.678a2.836 2.836 0 0 1-2.135 2.739l-.385.105-.201.875H5.253l-.202-.875-.385-.105a2.835 2.835 0 0 1-2.135-2.739v-.219H13.47v.219Z"></path></svg>';

export class IconSalad extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--salad', '', null, 'IconSalad');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--salad');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--salad', '', newVal, 'IconSalad');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-salad', IconSalad);