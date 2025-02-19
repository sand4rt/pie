import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPaintbrush',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--paintbrush', 'IconPaintbrush');
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
                d: 'M14.186 1.683h-2.511l-.875 1.12-.237-1.12H1.805l.945 5.25v.682a1.969 1.969 0 0 0 2.003 1.969H6.25l.096.087-.35 2.415A2.109 2.109 0 0 0 8 14.492c.338-.003.671-.087.97-.245h.08a2.118 2.118 0 0 0 1.11-2.16l-.35-2.468h1.436a1.969 1.969 0 0 0 2.004-2.004v-.691l.936-5.242Zm-9.45 1.312.35 1.899h1.339l-.36-1.899h3.413l.35 1.899h.945l1.532-1.899h.315l-.587 3.255h-8.05l-.595-3.255h1.348Zm7.192 4.62a.665.665 0 0 1-.656.656H9.881a1.382 1.382 0 0 0-1.365 1.234v.079l.376 2.625a.796.796 0 0 1-.411.814h-.079a.787.787 0 0 1-1.146-.814l.385-2.625v-.088A1.426 1.426 0 0 0 6.25 8.271H4.753a.656.656 0 0 1-.656-.656v-.088h7.875l-.044.088Z',
            },
        })]);
    },
};
