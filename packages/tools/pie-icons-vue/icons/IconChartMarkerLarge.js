import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconChartMarkerLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--chartMarkerLarge', 'IconChartMarkerLarge');
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
                d: 'M9 22.125h1.75v7H9v-7Zm6.125 7h1.75v-12.25h-1.75v12.25Zm6.125-8.75v8.75H23v-8.75h-1.75ZM21.25 9a2.625 2.625 0 0 1-.989 2.047L16 14.495l-4.261-3.412A2.626 2.626 0 0 1 10.75 9V2.875h10.5V9ZM19.5 4.625h-7V9a.874.874 0 0 0 .332.682L16 12.255l3.168-2.538A.874.874 0 0 0 19.5 9V4.625Z',
            },
        })]);
    },
};
