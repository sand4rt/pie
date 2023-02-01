import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGeolocation',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--geolocation'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.45244 14.4662H8.04369L7.50994 12.375C7.28789 11.4373 6.81203 10.5787 6.13448 9.89346C5.45694 9.2082 4.60385 8.72264 3.66869 8.48999L1.53369 7.99999V6.54749L13.4162 2.58374L9.45244 14.4662ZM3.80869 7.16874H3.98369C5.15022 7.46207 6.21436 8.06873 7.06104 8.92312C7.90771 9.7775 8.5047 10.8471 8.78744 12.0162V12.1912L11.2899 4.66624L3.80869 7.16874Z',
                fill: '#242E30'
            }
        })]);
    }
};