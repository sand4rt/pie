import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCaretRightFilled',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--caretRightFilled', 'IconCaretRightFilled');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.675 6.749 5.734 2.978a1.304 1.304 0 0 0-.709-.228 1.304 1.304 0 0 0-1.313 1.313v7.822a1.321 1.321 0 0 0 .7 1.164c.189.1.4.151.613.149.265.002.525-.077.744-.228l5.941-4.06a1.286 1.286 0 0 0 .577-1.102 1.313 1.313 0 0 0-.612-1.06Z',
            },
        })]);
    },
};
