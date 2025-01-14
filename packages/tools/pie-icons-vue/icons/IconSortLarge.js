import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSortLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--sortLarge', 'IconSortLarge');
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
                d: 'M18.625 20.125h-5.25v1.75h5.25v-1.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M5.5 6.375v1.75h22.75v-1.75H5.5Z',
            },
        }), h('path', {
            attrs: {
                d: 'M5.5 6.375H3.75v1.75H5.5v-1.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M23 13.25H9V15h14v-1.75Z',
            },
        })]);
    },
};
