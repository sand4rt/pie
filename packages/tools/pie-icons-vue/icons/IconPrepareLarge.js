import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPrepareLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--prepareLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23.2627 24.5525C23.954 23.905 24.3827 22.9862 24.3827 21.9712C24.3827 21.5512 24.304 21.07 24.1377 20.545C23.954 19.9675 23.5602 19.5037 23.0177 19.2325C22.6327 19.04 22.1952 18.97 21.7752 19.0137C21.9852 18.515 22.4752 18.305 22.6065 18.2612L22.3352 17.43L22.0727 16.5987C21.539 16.765 20.7427 17.2462 20.2877 18.0862C19.8327 17.15 19.0277 16.45 18.074 16.1175C18.634 15.7937 19.2027 15.4525 19.789 15.0675C20.4452 14.665 20.9965 13.8075 20.664 12.8712C20.489 12.3812 19.8152 10.6575 19.3777 9.53748C21.8277 8.27748 23.219 7.66498 24.4615 7.13123L23.5865 5.59998C22.2477 6.17748 20.6902 6.86873 17.8727 8.34748C12.964 10.9112 9.25398 13.0725 6.20023 15.155L6.13023 15.2075C4.84398 16.1525 4.31023 16.8962 4.40648 17.64C4.53773 18.55 5.31648 19.0487 6.01648 19.1362C6.21773 19.18 6.94398 19.2937 8.08148 19.2675C8.08148 19.3375 8.06398 19.4075 8.05523 19.4775C7.95023 21.1925 8.58898 22.925 9.78773 24.22C9.89273 24.3337 10.0065 24.4387 10.1202 24.5437H4.62523L5.07148 26.2937H26.929L27.3752 24.5525H23.2627ZM8.49273 17.4825C7.12773 17.57 6.34898 17.4212 6.33148 17.4212L6.24398 17.4037C6.38398 17.2462 6.64648 16.9837 7.17148 16.5987C9.98898 14.6737 13.384 12.6787 17.8115 10.3512C18.2577 11.48 18.8527 13.0112 19.019 13.4225C19.0015 13.4575 18.9315 13.545 18.8527 13.5975C17.3915 14.5687 16.0177 15.295 14.7577 15.855C14.714 15.82 14.6615 15.8025 14.6265 15.7675L13.664 14.9712C12.6927 14.1662 11.3015 14.1487 10.3565 14.9362C9.52523 15.6275 8.89523 16.5112 8.50148 17.5L8.49273 17.4825ZM13.4627 22.8987L13.3577 24.4037C12.5002 24.185 11.6952 23.7037 11.0652 23.03C10.1815 22.085 9.71773 20.825 9.79648 19.5825C9.80523 19.425 9.82273 19.2675 9.84898 19.11C9.96273 18.4187 10.234 17.7625 10.6365 17.185C10.8727 16.8437 11.1527 16.5287 11.4765 16.2662C11.6165 16.1525 11.7915 16.0912 11.9665 16.0912C12.1677 16.0912 12.3777 16.1612 12.544 16.3012L12.8765 16.5725L13.4802 17.0712C13.8302 17.3862 14.259 17.6225 14.7052 17.7625C14.714 17.7625 14.7315 17.7712 14.7402 17.78H14.7752L14.9152 17.8325C15.4052 17.9812 15.7377 18.4275 15.7377 18.9437C15.7377 19.1187 15.6502 19.2762 15.5102 19.3725C14.3115 20.1775 13.5677 21.455 13.4715 22.89L13.4627 22.8987ZM18.6077 19.25C18.0652 19.5212 17.6715 19.985 17.4965 20.5625C17.339 21.0787 17.2602 21.5512 17.2602 21.9625C17.2602 22.4612 17.3652 22.9425 17.549 23.3712C16.8665 23.9662 16.0177 24.3775 15.1077 24.5L15.2127 23.0212C15.274 22.1287 15.7377 21.3325 16.4815 20.8337C17.1115 20.4137 17.4877 19.7137 17.4877 18.9525C17.4877 18.4975 17.3827 18.06 17.199 17.675C17.934 17.8062 18.564 18.3312 18.8265 19.0575C18.8352 19.0925 18.844 19.1187 18.8527 19.1537C18.774 19.18 18.6952 19.2062 18.6252 19.25H18.6077ZM20.8215 23.7825C20.4365 23.7825 20.0777 23.66 19.7802 23.45C19.3077 23.1175 19.0015 22.575 19.0015 21.9625C19.0015 21.7262 19.054 21.42 19.159 21.0787C19.2115 20.9212 19.3252 20.8425 19.3865 20.8075C19.4302 20.7812 19.509 20.755 19.6052 20.755C19.6577 20.755 19.7102 20.755 19.7627 20.7812C20.1827 20.93 20.4802 21 20.7252 21.0087C20.7515 21.0087 20.7777 21.0087 20.804 21.0087C20.9615 20.9825 21.224 20.9825 21.8452 20.755C22.0202 20.6937 22.1602 20.7462 22.2215 20.7812C22.2827 20.8162 22.4052 20.895 22.4577 21.0525C22.5627 21.4025 22.624 21.7087 22.624 21.9537C22.624 22.96 21.8102 23.7737 20.804 23.7737L20.8215 23.7825Z',
                fill: '#242E30'
            }
        })]);
    }
};