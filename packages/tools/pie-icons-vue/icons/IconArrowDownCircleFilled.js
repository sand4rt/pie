import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconArrowDownCircleFilled',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--arrowDownCircleFilled', 'IconArrowDownCircleFilled');
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
                d: 'M8.656 1.254v7.49l1.899-1.899.945.927-2.712 2.713a1.084 1.084 0 0 1-1.54 0L4.5 7.772l.945-.927 1.899 1.899v-7.49a6.781 6.781 0 1 0 1.312 0Z',
            },
        })]);
    },
};
