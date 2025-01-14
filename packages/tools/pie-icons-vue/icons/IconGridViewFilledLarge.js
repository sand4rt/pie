import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconGridViewFilledLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--gridViewFilledLarge', 'IconGridViewFilledLarge');
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
                d: 'M4.625 14.25h9.625V4.625H4.625v9.625Z',
            },
        }), h('path', {
            attrs: {
                d: 'M17.75 14.25h9.625V4.625H17.75v9.625Z',
            },
        }), h('path', {
            attrs: {
                d: 'M4.625 27.375h9.625V17.75H4.625v9.625Z',
            },
        }), h('path', {
            attrs: {
                d: 'M17.75 27.375h9.625V17.75H17.75v9.625Z',
            },
        })]);
    },
};
