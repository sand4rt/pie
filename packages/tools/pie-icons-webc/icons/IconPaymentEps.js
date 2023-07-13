import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--eps"><path fill="#A7A8A8" fill-rule="evenodd" d="M4.395 5.882c.254-.052.604-.052.858.018.28.061.542.201.743.411.193.184.324.42.394.674.053.175.07.359.061.542-.008.158-.043.307-.079.464H4.02a.787.787 0 0 0 .14.368.743.743 0 0 0 .324.236c.463.175.945.017 1.216-.271.026.052.052.096.079.148.105.202.21.412.315.613a1.374 1.374 0 0 1-.324.21 2.296 2.296 0 0 1-.867.184 2.238 2.238 0 0 1-.892-.132 1.505 1.505 0 0 1-.647-.49A1.678 1.678 0 0 1 3.046 8a2.304 2.304 0 0 1 .08-.945c.087-.28.244-.534.454-.726a1.65 1.65 0 0 1 .814-.438v-.009Zm.193.805a.598.598 0 0 0-.342.202.842.842 0 0 0-.184.35h1.435a.702.702 0 0 0-.218-.42c-.175-.149-.473-.175-.691-.132Zm3.613-.77c.166-.06.35-.07.525-.06.298.017.604.078.866.244.228.14.403.359.508.604.14.324.175.691.175 1.041 0 .315-.061.63-.21.91a1.496 1.496 0 0 1-.542.578 1.73 1.73 0 0 1-.858.236 1.885 1.885 0 0 1-.7-.096v1.347H7.02V5.926h.945v.114a.918.918 0 0 1 .245-.123h-.009Zm.053.77a.581.581 0 0 0-.298.158v1.671c.21.158.525.149.77.088a.723.723 0 0 0 .193-.07.591.591 0 0 0 .236-.228c.096-.166.123-.35.131-.534 0-.192 0-.385-.052-.577a.762.762 0 0 0-.123-.271.577.577 0 0 0-.236-.175c-.158-.062-.455-.105-.621-.07v.008Zm3.045-.7c.184-.087.385-.13.586-.14.158 0 .332 0 .49.027.245.043.481.131.7.245-.079.218-.157.437-.245.647-.018.044-.035.096-.053.14-.06-.044-.113-.096-.175-.14-.183-.114-.516-.175-.726-.122-.052.017-.114.043-.14.096-.026.044-.026.105-.026.157.017.07.07.114.131.158.105.061.21.114.324.157.131.062.271.105.394.167.131.07.262.148.376.253.088.088.166.193.219.307.061.14.087.288.087.437 0 .175-.035.35-.122.508a1.1 1.1 0 0 1-.499.437 2.116 2.116 0 0 1-.402.114 2.836 2.836 0 0 1-.77 0 1.755 1.755 0 0 1-.456-.158c-.087-.043-.183-.087-.27-.14.122-.262.236-.533.358-.796.053.044.105.088.166.131.131.088.28.158.438.184.14.026.35.035.481-.035a.168.168 0 0 0 .096-.131.322.322 0 0 0-.061-.263.74.74 0 0 0-.157-.13 3.83 3.83 0 0 0-.43-.202c-.236-.105-.463-.236-.63-.429a.927.927 0 0 1-.236-.481 1.041 1.041 0 0 1 .018-.403.863.863 0 0 1 .21-.393 1.08 1.08 0 0 1 .324-.228v.026Z" clip-rule="evenodd"></path><path fill="#3C2281" fill-rule="evenodd" d="m8.105 2.829.945 1.443H7.151c.158-.236.306-.472.464-.708.157-.245.324-.49.481-.735h.009Zm3.255 8.067s.105-.017.131.018c.018.026.018.052.018.087v.665a.097.097 0 0 1-.097.096.108.108 0 0 1-.087-.043.211.211 0 0 1-.175.052.259.259 0 0 1-.184-.114.364.364 0 0 1-.008-.376.273.273 0 0 1 .183-.14.28.28 0 0 1 .184.035v-.184c0-.035.009-.06.044-.087l-.009-.009Zm-.175.411c-.053.027-.079.088-.079.15 0 .043.018.095.062.122a.094.094 0 0 0 .122-.027c.035-.06.044-.14 0-.2a.114.114 0 0 0-.114-.045h.009Zm1.977-.42s.097-.008.123.027a.162.162 0 0 1 .018.061v.683c0 .035-.027.078-.062.087-.043.009-.087 0-.114-.044-.087.088-.236.061-.315-.017-.113-.105-.122-.289-.052-.42a.263.263 0 0 1 .166-.14c.07-.018.14 0 .193.035v-.184c0-.035.017-.07.052-.088h-.008Zm-.183.42s-.053.044-.07.08c-.018.06-.009.13.035.174.035.044.105.035.14 0a.184.184 0 0 0 0-.21.114.114 0 0 0-.114-.044h.009Zm-4.874-.315c.035-.043.114-.035.149.01.026.043.017.095.017.14.035 0 .07 0 .096.026.035.035.027.113-.017.13-.026.01-.053.01-.079.01v.35a.141.141 0 0 1-.026.078c-.035.035-.105.035-.131 0a.148.148 0 0 1-.027-.087v-.333c-.017 0-.034 0-.052-.009-.053-.017-.061-.104-.018-.14.018-.017.053-.017.08-.017 0-.053-.01-.114.026-.149l-.018-.008Zm1.216 0c.035-.043.114-.043.149 0 .035.044.018.097.018.15.035 0 .07 0 .096.017.043.035.035.114-.009.14-.026.017-.052.008-.079.008v.35c0 .027 0 .053-.026.07a.091.091 0 0 1-.14 0 .1.1 0 0 1-.026-.07v-.35c-.027 0-.053 0-.07-.017-.044-.035-.044-.114 0-.14.017-.018.043-.018.07-.018 0-.052-.009-.104.017-.148v.008Zm-2.896.132c.07 0 .149.017.201.079a.254.254 0 0 1 .044.157v.298c0 .035-.018.07-.044.087a.108.108 0 0 1-.114-.009.13.13 0 0 1-.034-.079v-.27s0-.053-.018-.07a.066.066 0 0 0-.105 0 .1.1 0 0 0-.026.07v.288a.097.097 0 0 1-.096.096c-.053 0-.088-.044-.088-.096v-.28c0-.026 0-.053-.026-.079-.026-.026-.07-.026-.105 0a.1.1 0 0 0-.027.07v.272c0 .026 0 .06-.026.078-.035.044-.114.035-.14-.009a.162.162 0 0 1-.017-.06v-.412c0-.035 0-.07.026-.088.035-.043.122-.034.149.018.087-.079.227-.07.297.018.044-.035.096-.07.158-.07l-.009-.01Zm-3.71.105a.327.327 0 0 1 .175-.105.282.282 0 0 1 .219.061.328.328 0 0 1 .122.262c0 .036-.035.07-.07.07h-.324c.027.08.132.106.202.062.035-.018.061-.035.096-.044.053 0 .088.044.088.096 0 .044-.044.07-.08.088a.369.369 0 0 1-.253.043.287.287 0 0 1-.193-.122.37.37 0 0 1 .018-.411Zm.114.149h.21a.109.109 0 0 0-.123-.088c-.043 0-.087.044-.096.088h.009Zm1.137-.202a.24.24 0 0 1 .184-.052c.07.008.131.052.166.114.053.078.07.175.053.262a.323.323 0 0 1-.149.227.245.245 0 0 1-.245-.008v.175a.088.088 0 0 1-.087.087.108.108 0 0 1-.088-.043c-.017-.027-.009-.053-.009-.08v-.63c0-.043.026-.087.07-.087.044-.008.088 0 .105.044v-.009Zm.088.123s-.053.043-.062.07a.222.222 0 0 0 .018.166c.018.026.044.053.079.044.035 0 .07-.027.087-.062a.187.187 0 0 0-.017-.2.115.115 0 0 0-.105-.027v.009Zm.534-.14c.078-.053.2-.062.28.017.026-.052.096-.061.14-.026.035.026.026.07.026.105v.359c0 .035 0 .087-.026.113-.044.035-.123.027-.15-.026a.204.204 0 0 1-.13.061.28.28 0 0 1-.21-.096.308.308 0 0 1-.07-.227c0-.105.052-.21.14-.271v-.01Zm.122.14s-.061.061-.07.105c-.009.052 0 .122.044.157.035.035.096.027.131-.008a.172.172 0 0 0 0-.22.083.083 0 0 0-.105-.026V11.3Zm2.117-.131a.286.286 0 0 1 .237-.044.32.32 0 0 1 .227.306c0 .035-.026.079-.07.079H6.89c.026.079.122.096.183.07.044-.018.07-.044.114-.053.053 0 .096.053.088.097 0 .026-.027.043-.044.06a.318.318 0 0 1-.149.062c-.096.018-.21 0-.28-.07-.149-.131-.131-.394.026-.508Zm.106.13s-.035.044-.044.07h.218c0-.026-.017-.043-.035-.06a.095.095 0 0 0-.13 0l-.01-.01Zm.612-.13c.053-.044.123-.053.192-.044a.216.216 0 0 1 .158.105.267.267 0 0 1 .026.14v.271c0 .035-.009.07-.035.087-.043.035-.105.027-.131-.017-.018-.026-.018-.061-.018-.088v-.245c0-.026 0-.06-.026-.078-.035-.026-.087-.026-.114 0a.1.1 0 0 0-.026.07v.271c0 .026 0 .061-.026.079a.106.106 0 0 1-.14 0c-.018-.018-.026-.053-.026-.079v-.411c0-.026 0-.053.026-.07.035-.044.114-.035.149.008h-.009Zm1.339-.044c.07-.018.14 0 .21.026.035.018.07.053.07.096 0 .044-.044.096-.096.079-.044-.009-.08-.044-.132-.044-.017 0-.035 0-.035.026 0 .018.018.027.027.035.07.035.148.053.2.105a.178.178 0 0 1-.017.246c-.07.07-.175.078-.271.052-.053-.018-.105-.035-.14-.079-.026-.043 0-.114.044-.122a.115.115 0 0 1 .105.026c.035.018.079.035.114.018.017 0 .017-.035 0-.044-.044-.027-.088-.035-.132-.062a.207.207 0 0 1-.122-.104c-.027-.062-.009-.132.035-.184a.192.192 0 0 1 .122-.07h.018Zm.735.157a.294.294 0 0 1 .21-.166c.061-.009.131 0 .175.053.026-.053.105-.062.149-.027.026.027.026.07.026.105v.368c0 .035 0 .079-.027.113-.043.035-.122.027-.148-.026a.229.229 0 0 1-.149.061.26.26 0 0 1-.219-.122.374.374 0 0 1-.026-.359h.009Zm.236.018c-.053.017-.079.079-.079.131 0 .044.009.096.053.131.035.035.096.027.131-.017a.184.184 0 0 0 0-.21c-.026-.035-.07-.053-.105-.035Zm.63-.131c.053-.044.131-.053.193-.044.07.008.14.061.166.131.017.035.017.07.017.114v.289a.141.141 0 0 1-.026.078c-.035.035-.114.035-.14-.017-.026-.035-.018-.079-.018-.123v-.245c0-.061-.096-.087-.14-.044-.026.018-.026.053-.026.088v.271c0 .044-.043.096-.087.088a.097.097 0 0 1-.096-.096v-.43c0-.034.017-.07.043-.087.044-.026.096-.017.123.027h-.009Zm1.138.105a.255.255 0 0 1 .2-.15c.062-.008.132 0 .176.053.026-.043.087-.061.14-.035.026.018.035.053.035.079v.394c0 .035 0 .079-.018.113-.043.044-.131.035-.149-.026a.207.207 0 0 1-.14.061.261.261 0 0 1-.227-.13.357.357 0 0 1-.009-.35l-.008-.01Zm.227.026s-.061.052-.07.087a.191.191 0 0 0 .035.167.091.091 0 0 0 .14 0 .184.184 0 0 0 0-.22c-.026-.034-.07-.052-.105-.034Zm-6.702-.149c.043-.044.13-.026.148.035.035.088.061.175.096.262.027-.06.053-.13.08-.2.017-.036.025-.088.06-.106.044-.026.106 0 .132.035.017.035 0 .07-.009.097-.079.2-.158.402-.236.595-.009.026-.018.06-.044.087-.044.044-.14.026-.157-.035a.15.15 0 0 1 .017-.105l.052-.131a8.361 8.361 0 0 1-.166-.42c-.017-.035-.017-.079.018-.105l.008-.009Zm7.157.053c0-.088.14-.105.184-.035.043-.044.122-.062.166-.018.026.026.035.07.018.105-.018.035-.062.035-.097.052-.035.018-.079.035-.079.088v.263c0 .052-.043.087-.096.087-.052 0-.087-.044-.087-.096v-.455l-.009.008Zm-8.942.122h.244c.044 0 .08.035.08.079 0 .043-.027.087-.07.087H3.38c-.044 0-.079-.043-.079-.087 0-.035.026-.07.061-.079Zm-1.488 1.146.499-.761c.315.481.63.962.954 1.444h-1.89c.148-.228.297-.455.455-.683h-.018Zm11.217 0 .5-.761c.314.481.63.962.953 1.444h-1.899l.446-.683Z" clip-rule="evenodd"></path><path fill="#D00A7E" fill-rule="evenodd" d="M4.168 5.882c.253-.052.603-.052.857.018.28.061.542.201.744.411.192.184.324.42.393.674.053.175.07.359.062.542-.009.158-.044.307-.079.464H3.791a.787.787 0 0 0 .14.368.743.743 0 0 0 .324.236c.464.175.945.017 1.216-.271.026.052.053.096.079.148.105.202.21.412.315.613a1.374 1.374 0 0 1-.324.21 2.296 2.296 0 0 1-.866.184 2.238 2.238 0 0 1-.892-.132 1.505 1.505 0 0 1-.648-.49A1.678 1.678 0 0 1 2.82 8a2.304 2.304 0 0 1 .079-.945c.087-.28.245-.534.455-.726a1.65 1.65 0 0 1 .814-.438v-.009Zm.192.805a.598.598 0 0 0-.341.202.842.842 0 0 0-.184.35H5.27a.702.702 0 0 0-.219-.42c-.175-.149-.472-.175-.691-.132Zm3.614-.77c.166-.06.35-.07.525-.06.297.017.603.078.866.244.227.14.402.359.508.604.14.324.175.691.175 1.041 0 .315-.062.63-.21.91a1.496 1.496 0 0 1-.543.578 1.73 1.73 0 0 1-.857.236 1.885 1.885 0 0 1-.7-.096v1.347h-.946V5.926h.946v.114a.918.918 0 0 1 .244-.123h-.008Zm.052.77a.581.581 0 0 0-.297.158v1.671c.21.158.525.149.77.088a.723.723 0 0 0 .192-.07.591.591 0 0 0 .236-.228c.097-.166.123-.35.132-.534 0-.192 0-.385-.053-.577a.762.762 0 0 0-.122-.271.577.577 0 0 0-.236-.175c-.158-.062-.455-.105-.622-.07v.008Zm3.045-.7c.184-.087.385-.13.587-.14.157 0 .332 0 .49.027.245.043.48.131.7.245-.08.218-.158.437-.246.647-.017.044-.034.096-.052.14-.061-.044-.114-.096-.175-.14-.184-.114-.516-.175-.726-.122-.053.017-.114.043-.14.096-.027.044-.027.105-.027.157.018.07.07.114.132.158.105.061.21.114.323.157.132.062.272.105.394.167.132.07.263.148.377.253.087.088.166.193.218.307.062.14.088.288.088.437 0 .175-.035.35-.123.508a1.1 1.1 0 0 1-.498.437 2.114 2.114 0 0 1-.403.114 2.836 2.836 0 0 1-.77 0 1.755 1.755 0 0 1-.455-.158c-.088-.043-.184-.087-.271-.14.122-.262.236-.533.358-.796.053.044.105.088.167.131.131.088.28.158.437.184.14.026.35.035.482-.035a.168.168 0 0 0 .096-.131.322.322 0 0 0-.062-.263.738.738 0 0 0-.157-.13 3.83 3.83 0 0 0-.429-.202c-.236-.105-.463-.236-.63-.429a.927.927 0 0 1-.236-.481 1.041 1.041 0 0 1 .018-.403.863.863 0 0 1 .21-.393 1.08 1.08 0 0 1 .323-.228v.026Z" clip-rule="evenodd"></path></svg>';

export class IconPaymentEps extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--eps', '', null, 'IconPaymentEps');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--eps');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--eps', '', newVal, 'IconPaymentEps');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-payment-eps', IconPaymentEps);