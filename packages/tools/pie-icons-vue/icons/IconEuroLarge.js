import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconEuroLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--euroLarge', 'IconEuroLarge');
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
                d: 'm19.894 19.5 1.356 1.12a5.73 5.73 0 0 1-4.419 1.951 5.95 5.95 0 0 1-5.748-3.946H9v-1.75h1.636a7.338 7.338 0 0 1-.061-.875c.003-.293.023-.585.061-.875H9v-1.75h2.056a5.906 5.906 0 0 1 5.732-3.946 5.845 5.845 0 0 1 4.375 1.942l-1.296 1.181a4.068 4.068 0 0 0-3.114-1.373 4.103 4.103 0 0 0-3.745 2.196h3.867v1.75h-4.471a4.896 4.896 0 0 0 0 1.75h4.471v1.75h-3.867a4.104 4.104 0 0 0 3.78 2.196 3.974 3.974 0 0 0 3.106-1.321ZM28.25 16a12.25 12.25 0 1 1-24.499 0 12.25 12.25 0 0 1 24.499 0Zm-1.75 0a10.5 10.5 0 1 0-21 0 10.5 10.5 0 0 0 21 0Z',
            },
        })]);
    },
};
