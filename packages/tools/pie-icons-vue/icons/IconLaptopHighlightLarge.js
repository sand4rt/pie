import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLaptopHighlightLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--laptopHighlightLarge', 'IconLaptopHighlightLarge');
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
                d: 'm21.346 8.125 1.558-3.106-1.558-.788-1.942 3.877.035.017h1.907Z',
            },
        }), h('path', {
            attrs: {
                d: 'M16.875 2.875h-1.75v5.25h1.75v-5.25Z',
            },
        }), h('path', {
            attrs: {
                d: 'm12.561 8.125.035-.018-1.942-3.876-1.558.788 1.549 3.106h1.916Z',
            },
        }), h('path', {
            attrs: {
                d: 'M25.625 22.125V12.5A2.625 2.625 0 0 0 23 9.875H9A2.625 2.625 0 0 0 6.375 12.5v9.625H3.75v3.5a2.625 2.625 0 0 0 2.625 2.625h19.25a2.625 2.625 0 0 0 2.625-2.625v-3.5h-2.625ZM8.125 12.5A.875.875 0 0 1 9 11.625h14a.875.875 0 0 1 .875.875v9.625H8.125V12.5ZM26.5 25.625a.875.875 0 0 1-.875.875H6.375a.875.875 0 0 1-.875-.875v-1.75h7.875v.875h5.25v-.875H26.5v1.75Z',
            },
        })]);
    },
};
