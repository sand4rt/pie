import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLocationTargetLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--locationTargetLarge', 'IconLocationTargetLarge');
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
                d: 'M29.125 15.125h-3.5a9.625 9.625 0 0 0-8.75-8.706V2.875h-1.75v3.544a9.625 9.625 0 0 0-8.706 8.706H2.875v1.75h3.544a9.625 9.625 0 0 0 8.706 8.75v3.5h1.75v-3.5a9.625 9.625 0 0 0 8.75-8.75h3.5v-1.75ZM16 23.875a7.875 7.875 0 1 1 0-15.75 7.875 7.875 0 0 1 0 15.75Zm0-12.25a4.375 4.375 0 1 0 0 8.75 4.375 4.375 0 0 0 0-8.75Zm0 7a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25Z',
            },
        })]);
    },
};
