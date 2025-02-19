import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconEmailLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--emailLarge', 'IconEmailLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.5 6.375h-21A2.625 2.625 0 0 0 2.875 9v14A2.625 2.625 0 0 0 5.5 25.625h21A2.625 2.625 0 0 0 29.125 23V9A2.625 2.625 0 0 0 26.5 6.375Zm.875 3.01v13.519l-7.297-6.755 7.297-6.764Zm-11.856 9.888c.16.145.37.226.586.227a.875.875 0 0 0 .595-.236l2.091-1.925 7.061 6.536H6.165l7.21-6.545 2.144 1.943ZM26.168 8.125l-10.063 9.31L5.85 8.125h20.318ZM12.08 16.149l-7.455 6.764V9.376l7.455 6.773Z',
            },
        })]);
    },
};
