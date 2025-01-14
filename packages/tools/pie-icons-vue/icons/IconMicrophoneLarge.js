import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconMicrophoneLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--microphoneLarge', 'IconMicrophoneLarge');
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
                d: 'M16.875 24.75v2.625H19.5v1.75h-7v-1.75h2.625V24.75A10.5 10.5 0 0 1 5.5 14.25h1.75a8.75 8.75 0 0 0 17.5 0h1.75a10.5 10.5 0 0 1-9.625 10.5Zm-7-10.5V9a6.125 6.125 0 1 1 12.25 0v5.25a6.125 6.125 0 1 1-12.25 0Zm1.75 0a4.375 4.375 0 1 0 8.75 0V9a4.375 4.375 0 1 0-8.75 0v5.25Z',
            },
        })]);
    },
};
