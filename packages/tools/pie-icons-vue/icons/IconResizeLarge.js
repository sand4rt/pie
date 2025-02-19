import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconResizeLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--resizeLarge', 'IconResizeLarge');
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
                d: 'M22.726 2.243V1L1 22.735h1.243L22.726 2.243Z',
            },
        }), h('path', {
            attrs: {
                d: 'M2.243 22.735h1.233l19.25-19.259V2.243L2.243 22.735Z',
            },
        }), h('path', {
            attrs: {
                d: 'M14.099 22.735h1.233l7.394-7.402v-1.234L14.1 22.735Z',
            },
        }), h('path', {
            attrs: {
                d: 'm14.099 22.735 8.627-8.636v-1.234l-9.861 9.87h1.234Z',
            },
        })]);
    },
};
