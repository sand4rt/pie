import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconNotificationFilledLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--notificationFilledLarge', 'IconNotificationFilledLarge');
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
                d: 'M16 29.125a4.506 4.506 0 0 0 4.086-2.625h-8.172A4.507 4.507 0 0 0 16 29.125Z',
            },
        }), h('path', {
            attrs: {
                d: 'M26.692 21.084a9.554 9.554 0 0 1-2.817-6.834v-.875a7.875 7.875 0 0 0-7-7.822V2.875h-1.75v2.678a8.137 8.137 0 0 0-7 8.146v.551a9.555 9.555 0 0 1-2.817 6.808l-.683.708v2.984h22.75v-2.984l-.683-.682Z',
            },
        })]);
    },
};
