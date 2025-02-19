import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--stampcard10Filled"><path d="m3.844 5.716 1.199-.507a.915.915 0 0 1 .34-.07h.596c.455 0 .814.35.857.787.447-.516 1.085-.857 1.925-.857.945 0 1.645.437 2.091 1.067.28-.297.657-.455 1.068-.455.411 0 .779.158 1.05.429l.114-.175a.869.869 0 0 1 .551-.359v-.323l-.018-.097c-.096-.56-.218-1.33-.822-1.933-.604-.604-1.374-.735-1.943-.832-.166-.026-.385-.061-.48-.105-.07-.026-.263-.166-.377-.253-.437-.315-1.102-.805-1.986-.805-.884 0-1.523.463-1.995.805-.105.078-.298.218-.376.245a3.07 3.07 0 0 1-.49.105c-.56.096-1.33.218-1.934.822-.586.586-.726 1.356-.814 1.881v.062c-.035.148-.07.385-.114.48-.035.07-.183.28-.253.377-.315.438-.805 1.103-.805 1.986 0 .884.48 1.558.813 2.004.079.114.21.298.245.368.035.087.07.288.105.49.097.56.219 1.32.823 1.933.604.604 1.409.744 1.942.832.167.026.385.06.473.104.07.036.271.176.376.254.438.324 1.103.805 1.986.805.884 0 1.558-.481 1.995-.805.105-.079.298-.219.377-.245.096-.043.332-.079.49-.105.524-.087 1.32-.218 1.925-.822.603-.595.734-1.348.822-1.917v-.805c-.044-.026-.096-.043-.14-.078-.053-.035-.088-.088-.131-.131l-.132.192a.896.896 0 0 1-.726.385h-.805a.86.86 0 0 1-.77-.464c-.026-.043-.035-.096-.052-.148-.446.62-1.138 1.058-2.083 1.058-.84 0-1.478-.341-1.925-.857a.865.865 0 0 1-.857.787h-.831a.878.878 0 0 1-.875-.875V8.053a.85.85 0 0 1-.613-.517l-.28-.673a.945.945 0 0 1-.07-.333c0-.245.114-.472.298-.639.07-.061.148-.122.236-.166v-.009Z"></path><path d="M5.979 9.943v-3.93h-.595l-1.199.508.28.674.683-.245v2.993h.83Z"></path><path d="M6.976 7.983c0 1.015.569 2.038 1.785 2.038 1.217 0 1.785-1.023 1.785-2.038s-.568-2.04-1.785-2.04c-1.216 0-1.785 1.025-1.785 2.04Zm2.722 0c0 .735-.36 1.286-.937 1.286-.577 0-.936-.551-.936-1.286s.359-1.287.936-1.287c.578 0 .937.552.937 1.287Z"></path><path d="M12.533 7.204c0-.306-.193-.656-.613-.656a.562.562 0 0 0-.429.183.699.699 0 0 0 0 .945.562.562 0 0 0 .429.184c.42 0 .613-.35.613-.656Z"></path><path d="M14.554 8.166c-.062-.017-.114-.043-.184-.043-.42 0-.612.35-.612.656 0 .192.087.402.253.525.097.07.21.131.359.131.42 0 .613-.35.613-.656a.641.641 0 0 0-.43-.621v.008Z"></path><path d="M11.675 9.566h.805l1.741-2.563.394-.587h-.805l-.787 1.155-1.348 1.995Z"></path></svg>';

export class IconStampcard10Filled extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--stampcard10Filled', '', null, 'IconStampcard10Filled');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--stampcard10Filled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--stampcard10Filled', '', newVal, 'IconStampcard10Filled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-stampcard10-filled', IconStampcard10Filled);
