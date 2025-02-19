import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialFacebookCircleFilledLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--facebookCircleFilledLarge', 'IconSocialFacebookCircleFilledLarge');
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
                d: 'M16 3.671a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm3.85 7.403h-1.138a1.294 1.294 0 0 0-1.46 1.426v1.689h2.493l-.402 2.625H17.25v6.282a8.75 8.75 0 0 1-2.817 0V16.77H12.15v-2.625h2.284v-1.96a3.175 3.175 0 0 1 3.403-3.5c.675.01 1.347.068 2.013.175v2.214Z',
            },
        })]);
    },
};
