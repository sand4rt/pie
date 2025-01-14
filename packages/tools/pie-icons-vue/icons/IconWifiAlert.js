import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconWifiAlert',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--wifiAlert', 'IconWifiAlert');
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
                d: 'M5.935 9.006a2.03 2.03 0 0 1 .166-.796 6.746 6.746 0 0 0-2.94 2.047l1.006.876A5.6 5.6 0 0 1 6.05 9.645a2.17 2.17 0 0 1-.114-.639Z',
            },
        }), h('path', {
            attrs: {
                d: 'M9.899 8.21a1.925 1.925 0 0 1 .052 1.435 5.6 5.6 0 0 1 1.882 1.461l1.006-.875a6.746 6.746 0 0 0-2.94-2.021Z',
            },
        }), h('path', {
            attrs: {
                d: 'M6.049 4.946a9.441 9.441 0 0 0-5.005 3.185l1.006.875A8.251 8.251 0 0 1 6.18 6.25l-.131-1.304Z',
            },
        }), h('path', {
            attrs: {
                d: 'M9.951 4.946 9.82 6.25a8.251 8.251 0 0 1 4.13 2.721l1.006-.875a9.442 9.442 0 0 0-5.005-3.15Z',
            },
        }), h('path', {
            attrs: {
                d: 'm5.2 12.602 1.006.875a2.293 2.293 0 0 1 3.588 0l1.006-.875A3.667 3.667 0 0 0 8 11.23a3.666 3.666 0 0 0-2.8 1.373Z',
            },
        }), h('path', {
            attrs: {
                d: 'm8.402 7.256.43-4.375A2.564 2.564 0 0 0 8 2.75a2.625 2.625 0 0 0-.875.14l.429 4.375.848-.009Z',
            },
        }), h('path', {
            attrs: {
                d: 'M7.247 9.006a.752.752 0 1 0 1.505 0 .752.752 0 0 0-1.505 0Z',
            },
        })]);
    },
};
