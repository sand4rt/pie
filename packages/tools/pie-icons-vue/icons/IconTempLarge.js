import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconTempLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--tempLarge', 'IconTempLarge');
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
                d: 'M10.75 9H6.375V7.25h4.375V9Zm-3.5 3.5h3.5v-1.75h-3.5v1.75ZM6.375 16h4.375v-1.75H6.375V16Zm17.938 5.688a6.563 6.563 0 1 1-12.545-2.702 6.501 6.501 0 0 1 1.65-2.216V8.808a4.375 4.375 0 0 1 8.663 0v7.962a6.502 6.502 0 0 1 2.232 4.918Zm-1.75 0a4.803 4.803 0 0 0-1.89-3.816l-.342-.262V8.808a2.626 2.626 0 0 0-5.162 0v8.802l-.341.262a4.813 4.813 0 1 0 7.735 3.816Zm-1.75 0a3.063 3.063 0 1 1-3.938-2.923V12.5h1.75v6.265a3.063 3.063 0 0 1 2.188 2.922Zm-1.75 0a1.313 1.313 0 1 0-2.626 0 1.313 1.313 0 0 0 2.625 0Z',
            },
        })]);
    },
};
