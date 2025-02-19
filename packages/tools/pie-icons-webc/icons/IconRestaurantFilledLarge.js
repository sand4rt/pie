import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--restaurantFilledLarge"><path d="M26.5 15.912c-.079.01-.149.027-.227.035a5.715 5.715 0 0 1-.762.044 6.178 6.178 0 0 1-3.167-.866c-1.917 1.137-4.419 1.137-6.335 0-1.925 1.137-4.428 1.137-6.344 0A6.13 6.13 0 0 1 6.603 16a6.51 6.51 0 0 1-1.094-.096 7.088 7.088 0 0 1-.875-.21 6.33 6.33 0 0 1-.875-.359v12.924H28.25V15.36c-.28.14-.569.263-.875.359-.28.087-.578.149-.875.201v-.008ZM9 26.5v-5.25c0-.962.787-1.75 1.75-1.75s1.75.788 1.75 1.75v5.25H9Zm14-7.875v3.5h-5.25v-3.5H23Z"></path><path d="M28.74 6.454 26.806 4.51s-.079-.061-.114-.096a2.613 2.613 0 0 0-1.74-.674H7.091c-.69 0-1.347.271-1.846.753l-1.969 1.96A4.32 4.32 0 0 0 2 9.507v.15c0 .297.035.594.087.892.027.122.08.245.114.367.044.166.088.333.158.49.052.123.122.236.192.359.079.149.149.297.236.438.07.104.158.2.246.306.096.122.175.245.288.358.018.018.035.027.053.044.017.018.026.035.035.044.087.088.183.14.271.219.026.026.052.043.079.07.105.087.21.184.323.262.044.035.106.053.15.088a4.324 4.324 0 0 0 2.152.639c.061 0 .131.017.192.017h.009c.271 0 .534-.035.796-.088a.927.927 0 0 0 .167-.043c.2-.053.402-.114.595-.193l.183-.079a4.7 4.7 0 0 0 .7-.402c.035-.026.07-.044.105-.07h1.041s.062.026.088.053c.079.052.166.104.254.157.14.087.28.166.429.227.122.053.245.106.367.15.105.034.201.07.306.095.167.044.333.097.508.123h.035c.227.035.446.07.682.07.237 0 .447-.035.665-.07h.035c.175-.026.35-.07.516-.123.097-.026.193-.052.28-.087.132-.044.263-.096.394-.158.132-.06.263-.13.394-.21.096-.052.193-.104.28-.175.026-.017.061-.034.088-.052h1.032s.061.035.088.053c.078.06.166.104.253.157.14.079.271.157.42.227.123.053.254.106.377.158.096.035.192.061.297.087.166.044.341.097.516.123h.018c.227.035.455.07.682.07.228 0 .455-.035.674-.07h.026c.175-.026.341-.079.508-.123.105-.026.201-.06.306-.096.122-.043.245-.096.367-.149.15-.07.29-.148.43-.227.078-.053.166-.096.244-.149.035-.017.07-.035.096-.061h1.033s.035.018.053.035c.21.149.437.289.665.402.017 0 .035.01.052.018.201.096.411.166.621.227.07.018.131.044.201.062.22.052.438.087.665.105.07 0 .132 0 .202.008.245.01.49.01.744-.017.148-.018.288-.061.437-.096a4.639 4.639 0 0 0 1.75-.822c.157-.132.315-.263.455-.412.026-.026.044-.053.061-.07.394-.429.718-.936.928-1.496a4.735 4.735 0 0 0 .297-1.654v-.166a4.262 4.262 0 0 0-1.26-3.037l.009-.008Z"></path></svg>';

export class IconRestaurantFilledLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--restaurantFilledLarge', '', null, 'IconRestaurantFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--restaurantFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--restaurantFilledLarge', '', newVal, 'IconRestaurantFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-restaurant-filled-large', IconRestaurantFilledLarge);
