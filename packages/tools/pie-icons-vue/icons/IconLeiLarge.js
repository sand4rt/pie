import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLeiLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--leiLarge', 'IconLeiLarge');
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
                d: 'M9.77 10.75h1.593v8.645H9.77V10.75Zm9.301 5.6c0 .185-.021.37-.061.551h-4.436a1.548 1.548 0 0 0 1.583 1.225 2.005 2.005 0 0 0 1.497-.569l.971.937a3.204 3.204 0 0 1-2.52 1.006 3.028 3.028 0 0 1-3.133-3.168A2.965 2.965 0 0 1 16 13.192a2.95 2.95 0 0 1 3.071 3.158Zm-1.584-.595A1.39 1.39 0 0 0 16 14.539a1.374 1.374 0 0 0-1.453 1.216h2.94Zm3.947-4.926a.874.874 0 0 0-.954.918.954.954 0 0 0 1.907 0 .876.876 0 0 0-.953-.918Zm-.797 8.566h1.593v-6.02h-1.593v6.02ZM28.25 16a12.25 12.25 0 1 1-24.499 0 12.25 12.25 0 0 1 24.499 0Zm-1.75 0a10.5 10.5 0 1 0-21 0 10.5 10.5 0 0 0 21 0Z',
            },
        })]);
    },
};
