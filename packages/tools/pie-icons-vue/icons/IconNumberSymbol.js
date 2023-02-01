import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNumberSymbol',
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
            class: 'c-pieIcon c-pieIcon--numberSymbol'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.18 6.0487L13.3637 4.7537H11.4037L11.8762 1.50745H10.5637L10.0912 4.7537H6.85373L7.32623 1.50745H6.02248L5.54123 4.7537H3.54623L3.36248 6.0487H5.37498L4.80623 9.9512H2.81998L2.63623 11.2462H4.59623L4.12373 14.4924H5.43623L5.90873 11.2462H9.14623L8.67373 14.4924H9.97748L10.4587 11.2462H12.4537L12.6375 9.9512H10.625L11.1937 6.0487H13.18ZM9.32998 9.9512H6.10123L6.66998 6.0487H9.89873L9.32998 9.9512Z',
                fill: '#242E30'
            }
        })]);
    }
};