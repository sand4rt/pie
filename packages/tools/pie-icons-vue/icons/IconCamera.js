import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCamera',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--camera', 'IconCamera');
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
                d: 'M8 4.719a2.844 2.844 0 1 0 2.844 2.844A2.853 2.853 0 0 0 8 4.719Zm0 4.375a1.531 1.531 0 1 1 1.531-1.531A1.54 1.54 0 0 1 8 9.093Zm5.617-5.469a24.668 24.668 0 0 0-2.318-.437l-.455-1.05a1.532 1.532 0 0 0-1.409-.92h-2.87a1.531 1.531 0 0 0-1.409.928l-.455 1.05a24.84 24.84 0 0 0-2.301.438A1.523 1.523 0 0 0 1.219 5.12V11.5a1.54 1.54 0 0 0 1.531 1.531h10.5a1.54 1.54 0 0 0 1.531-1.531V5.121a1.532 1.532 0 0 0-1.164-1.496ZM13.47 11.5a.219.219 0 0 1-.219.219H2.75a.219.219 0 0 1-.219-.219V5.121a.219.219 0 0 1 .166-.21 22.69 22.69 0 0 1 2.538-.463h.376l.753-1.75a.219.219 0 0 1 .201-.132h2.87a.219.219 0 0 1 .201.132l.753 1.75h.376c.856.11 1.706.264 2.546.463a.227.227 0 0 1 .158.21V11.5Z',
            },
        })]);
    },
};
