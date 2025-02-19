import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPatternsLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--patternsLarge', 'IconPatternsLarge');
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
                d: 'M4.625 27.375h9.87v-9.87h-9.87v9.87Zm1.75-8.12h6.37v6.37h-6.37v-6.37Z',
            },
        }), h('path', {
            attrs: {
                d: 'M12.596 15.23a5.374 5.374 0 0 0 0-10.745 5.374 5.374 0 0 0 0 10.745Zm0-8.995a3.63 3.63 0 0 1 3.623 3.622 3.63 3.63 0 0 1-3.623 3.623 3.63 3.63 0 0 1-3.622-3.623 3.63 3.63 0 0 1 3.622-3.622Z',
            },
        }), h('path', {
            attrs: {
                d: 'm21.46 9.857-5.819 11.07H27.28L21.46 9.856Zm0 3.763 2.922 5.556h-5.845l2.923-5.556Z',
            },
        })]);
    },
};
