import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--stampcard10Large"><path d="M24.61 21.556a4.41 4.41 0 0 1-.963 2.476 4.376 4.376 0 0 1-2.528.972 7.409 7.409 0 0 0-1.567.367l-.105.044a7.327 7.327 0 0 0-1.338.858 4.369 4.369 0 0 1-2.494 1.093 4.553 4.553 0 0 1-2.538-1.128 7.71 7.71 0 0 0-1.295-.823l-.105-.044a7.683 7.683 0 0 0-1.618-.367 4.413 4.413 0 0 1-2.477-.963 4.376 4.376 0 0 1-.97-2.529 7.394 7.394 0 0 0-.36-1.566l-.043-.105a7.328 7.328 0 0 0-.858-1.338 4.369 4.369 0 0 1-1.094-2.494 4.553 4.553 0 0 1 1.13-2.538c.314-.402.594-.84.822-1.303l.043-.105a7.683 7.683 0 0 0 .368-1.62c.061-.91.394-1.767.962-2.475a4.376 4.376 0 0 1 2.53-.972 7.412 7.412 0 0 0 1.565-.367l.097-.044a7.202 7.202 0 0 0 1.338-.857 4.37 4.37 0 0 1 2.494-1.094c.919.087 1.803.481 2.538 1.128.402.324.84.596 1.303.823l.097.044a7.683 7.683 0 0 0 1.618.367c.91.061 1.768.394 2.477.963.577.709.91 1.566.97 2.529 0 .052.018.104.027.148h1.768c-.018-.105-.044-.21-.053-.315a6.097 6.097 0 0 0-1.417-3.552l-.105-.105a6.027 6.027 0 0 0-3.5-1.418 6.494 6.494 0 0 1-1.155-.262 5.295 5.295 0 0 1-.902-.569 6.159 6.159 0 0 0-3.587-1.54h-.14a6.1 6.1 0 0 0-3.553 1.514 5.47 5.47 0 0 1-.936.595 6.2 6.2 0 0 1-1.102.253A6.04 6.04 0 0 0 6.4 6.655l-.105.105a6.027 6.027 0 0 0-1.417 3.5c-.053.394-.14.779-.263 1.155a5.295 5.295 0 0 1-.569.901 6.159 6.159 0 0 0-1.54 3.588v.148a6.1 6.1 0 0 0 1.514 3.553c.228.289.429.604.595.936.123.377.21.761.254 1.103a6.063 6.063 0 0 0 1.417 3.552l.105.105a6.027 6.027 0 0 0 3.5 1.418c.394.052.78.14 1.155.262.333.166.648.368.902.569a6.158 6.158 0 0 0 3.587 1.54h.149c1.321-.114 2.599-.656 3.552-1.514.29-.227.604-.428.937-.595.376-.122.76-.21 1.102-.254a6.062 6.062 0 0 0 3.553-1.417l.105-.105a6.027 6.027 0 0 0 1.417-3.5c.026-.21.061-.411.114-.621h-1.776c-.027.149-.062.297-.08.455v.017Z"></path><path d="m28.801 15.982-.052-.052c-.307-.236-.718-.376-1.234-.376-.219 0-.411.035-.595.087-.945.254-1.391 1.103-1.391 1.882 0 .253.052.516.148.77.21.533.648.997 1.34 1.146.148.035.314.052.49.052.55 0 .97-.175 1.285-.428.473-.386.7-.98.7-1.532 0-.551-.227-1.146-.7-1.531l.01-.018ZM27.76 18.39c-.079.017-.158.044-.236.044-.49 0-.884-.36-.884-.928 0-.569.385-.927.884-.927.455 0 .805.314.857.805 0 .043.018.078.018.122 0 .473-.272.779-.64.875v.009Z"></path><path d="M11.082 19.351v-6.825H10.05l-2.083.884.482 1.164 1.19-.42v5.197h1.443Z"></path><path d="M15.912 12.404c-2.108 0-3.097 1.776-3.097 3.535 0 1.759.989 3.535 3.097 3.535 2.11 0 3.098-1.776 3.098-3.535 0-1.759-.989-3.535-3.098-3.535Zm0 5.775c-.997 0-1.618-.954-1.618-2.231 0-1.278.62-2.232 1.618-2.232.998 0 1.62.954 1.62 2.232 0 1.277-.622 2.23-1.62 2.23Z"></path><path d="M23.954 14.364c0-.657-.315-1.365-.99-1.724a2.026 2.026 0 0 0-.997-.236c-1.365 0-1.986 1.041-1.986 1.96 0 .918.621 1.96 1.986 1.96.394 0 .718-.097.998-.245.674-.359.989-1.068.989-1.724v.009Zm-1.987.927c-.49 0-.883-.359-.883-.927 0-.569.385-.928.883-.928.5 0 .884.359.884.928 0 .568-.385.927-.884.927Z"></path><path d="m22.965 17.479-1.356 1.872h1.312l.044-.07 3.377-4.637 1.085-1.496.455-.622H26.57l-.875 1.208-2.73 3.745Z"></path></svg>';

export class IconStampcard10Large extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--stampcard10Large', '', null, 'IconStampcard10Large');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--stampcard10Large');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--stampcard10Large', '', newVal, 'IconStampcard10Large');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-stampcard10-large', IconStampcard10Large);
