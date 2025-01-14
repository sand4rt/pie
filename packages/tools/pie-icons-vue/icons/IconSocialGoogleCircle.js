import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialGoogleCircle',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--googleCircle', 'IconSocialGoogleCircle');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_1615_938)',
            },
        }, [h('path', {
            attrs: {
                d: 'M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Zm0 12.25A5.468 5.468 0 1 1 8 2.488a5.468 5.468 0 0 1 0 10.937Z',
            },
        }), h('path', {
            attrs: {
                d: 'M8.078 7.212v1.48h2.083v.087a1.75 1.75 0 0 1-.726 1.085c-.279.195-.6.321-.937.367a2.415 2.415 0 0 1-.97-.043 2.266 2.266 0 0 1-1.278-.84A2.572 2.572 0 0 1 5.9 8.7a2.039 2.039 0 0 1-.14-.875 2.336 2.336 0 0 1 .945-1.75c.349-.279.778-.438 1.225-.455a2.1 2.1 0 0 1 1.592.551l1.103-1.085-.228-.192a3.5 3.5 0 0 0-1.802-.762A3.824 3.824 0 0 0 4.5 6.67a3.438 3.438 0 0 0-.184.787v.595c0 .202.052.412.087.613.063.303.163.597.298.875a3.5 3.5 0 0 0 .805 1.111 3.816 3.816 0 0 0 1.837.963c.353.078.716.105 1.077.079a3.815 3.815 0 0 0 1.75-.525 3.5 3.5 0 0 0 1.46-1.917 4.471 4.471 0 0 0 .167-1.706c0-.123 0-.254-.044-.385l-3.675.052Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_1615_938',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
