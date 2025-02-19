import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconKey',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--key', 'IconKey');
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
                d: 'M6.171 5.375a.875.875 0 1 1-.796-.875.823.823 0 0 1 .796.875Zm7.823 5.11v3.386h-3.5l-.665-.665.148-1.172-.227-.237L8.639 12l-.446-.42v-1.287l-.123-.122-1.199.07-.735-.735a.184.184 0 0 0-.227 0l-.306.158a1.523 1.523 0 0 1-1.75-.307L1.664 7.125a1.479 1.479 0 0 1-.315-1.697A8.199 8.199 0 0 1 3.021 3.02 8.4 8.4 0 0 1 5.375 1.36a1.54 1.54 0 0 1 1.75.297L9.339 3.88a1.496 1.496 0 0 1 .306 1.689l-.105.227a.193.193 0 0 0 0 .228l4.454 4.462Zm-1.313.534L8.64 6.95a1.496 1.496 0 0 1-.271-1.75l.087-.184a.21.21 0 0 0 0-.218L6.189 2.584a.201.201 0 0 0-.237 0A6.904 6.904 0 0 0 2.55 5.96a.184.184 0 0 0 .043.219l2.223 2.223a.184.184 0 0 0 .219 0l.253-.132a1.496 1.496 0 0 1 1.75.263l.333.341 1.199-.07.927.945v.761l.691-.122 1.147 1.111-.123.998h1.461l.01-1.48Z',
            },
        })]);
    },
};
