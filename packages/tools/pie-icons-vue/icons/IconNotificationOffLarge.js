import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconNotificationOffLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--notificationOffLarge', 'IconNotificationOffLarge');
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
                d: 'm27.375 21.766-.683-.682a9.554 9.554 0 0 1-2.817-6.834v-.875a7.875 7.875 0 0 0-7-7.822V2.875h-1.75v2.678a7.508 7.508 0 0 0-3.5 1.382l-2.476-4.06H7.1l3.15 5.25a8.409 8.409 0 0 0-2.126 5.574v.551a9.555 9.555 0 0 1-2.817 6.808l-.683.708v2.984h6.869a4.497 4.497 0 0 0 8.96.376l2.397 3.999H24.9l-2.625-4.375h5.101v-2.984ZM16 27.375a2.765 2.765 0 0 1-2.765-2.625h5.53A2.765 2.765 0 0 1 16 27.375ZM11.713 23H6.375v-.516l.166-.167a11.28 11.28 0 0 0 3.334-8.067v-.578a6.667 6.667 0 0 1 1.33-3.99L19.176 23h-7.463Zm13.912 0H21.25L12.5 8.431a5.757 5.757 0 0 1 2.887-1.181 6.072 6.072 0 0 1 4.726 1.549 6.126 6.126 0 0 1 2.012 4.576v.875a11.28 11.28 0 0 0 3.334 8.041l.166.166V23Z',
            },
        })]);
    },
};
