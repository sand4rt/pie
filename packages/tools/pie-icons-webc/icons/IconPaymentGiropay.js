import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--giropay"><path fill="#000268" d="M1.438 5.944c0-.63.455-1.147 1.015-1.147h11.095c.56 0 1.014.517 1.014 1.147v4.103c0 .63-.454 1.147-1.014 1.147H2.452c-.56 0-1.015-.517-1.015-1.147V5.944Z"></path><path fill="#fff" d="M1.857 5.987v4.025c0 .394.29.718.64.718h5.81V5.27h-5.82c-.35 0-.638.324-.638.717h.008Zm7.946 1.995c0 .254-.114.43-.298.43-.166 0-.298-.176-.298-.412s.123-.42.298-.42c.192 0 .297.184.297.402Zm-1.086 1.47h.49v-.875a.48.48 0 0 0 .447.263c.42 0 .647-.394.647-.875 0-.394-.219-.814-.604-.814-.227 0-.428.105-.524.324v-.289h-.456v2.266Zm2.267-1.163c0-.158.131-.21.297-.21h.21c0 .192-.114.376-.306.376-.114 0-.201-.061-.201-.175v.009Zm.989.507c-.027-.122-.027-.254-.027-.376v-.604c0-.49-.315-.665-.673-.665-.21 0-.394.035-.57.114v.376a.9.9 0 0 1 .465-.122c.175 0 .323.061.323.28a1.722 1.722 0 0 0-.227-.018c-.263 0-.735.061-.735.551 0 .35.254.508.534.508.2 0 .34-.088.446-.289 0 .088 0 .166.008.254h.447l.008-.009Zm.218.648c.105.026.201.035.306.035.447 0 .552-.394.692-.797l.516-1.496h-.49l-.289 1.05-.306-1.05h-.525l.577 1.645c-.035.14-.13.219-.245.219a.471.471 0 0 1-.192-.035l-.035.42-.009.009Z"></path><path fill="#FF0007" d="M3.056 7.982c0-.218.096-.402.28-.402.219 0 .315.201.315.376 0 .245-.14.411-.315.411-.148 0-.28-.14-.28-.393v.008Zm1.068-.787h-.446v.289c-.106-.202-.272-.324-.482-.324-.437 0-.639.359-.639.84s.246.814.63.814c.202 0 .36-.088.482-.28v.087c0 .315-.149.464-.438.464a.939.939 0 0 1-.481-.131l-.026.437c.113.044.306.105.542.105.569 0 .858-.21.858-.875V7.195Zm.831-.674h-.49v.411h.49v-.41Zm-.49 2.284h.49v-1.61h-.49v1.61ZM6.32 7.177c-.053 0-.114-.017-.166-.017-.21 0-.333.131-.42.332v-.297h-.447v1.61h.49v-.683c0-.315.132-.507.36-.507.06 0 .113 0 .166.017l.026-.463-.009.008Zm.84 1.278c-.228 0-.315-.21-.315-.446 0-.237.088-.455.315-.455.228 0 .315.21.315.455 0 .245-.096.446-.315.446Zm0 .394c.464 0 .822-.307.822-.84 0-.534-.358-.84-.822-.84-.464 0-.822.306-.822.84 0 .533.358.84.822.84Z"></path></svg>';

export class IconPaymentGiropay extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--giropay', '', null, 'IconPaymentGiropay');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--giropay');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--giropay', '', newVal, 'IconPaymentGiropay');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-payment-giropay', IconPaymentGiropay);
