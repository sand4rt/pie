import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconOfferStarFilledLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--offerStarFilledLarge', 'IconOfferStarFilledLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_7019_3730)',
            },
        }, [h('path', {
            attrs: {
                d: 'M12.693 16A10.298 10.298 0 0 1 16 19.308 10.298 10.298 0 0 1 19.308 16 10.298 10.298 0 0 1 16 12.693 10.298 10.298 0 0 1 12.693 16Z',
            },
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                d: 'M27.436 13.008a5.102 5.102 0 0 1-1.05-1.313 5.433 5.433 0 0 1-.201-1.75c0-1.111-.052-2.371-.875-3.229-.822-.857-2.117-.875-3.229-.875a5.434 5.434 0 0 1-1.75-.201 5.1 5.1 0 0 1-1.312-1.05c-.84-.84-1.768-1.715-3.019-1.715-1.251 0-2.179.875-2.992 1.689-.377.42-.82.775-1.313 1.05-.569.162-1.16.23-1.75.201-1.111 0-2.371.052-3.229.875-.857.822-.875 2.117-.875 3.229.029.59-.04 1.181-.201 1.75a5.1 5.1 0 0 1-1.05 1.312c-.84.84-1.715 1.768-1.715 3.019 0 1.251.875 2.179 1.689 2.992.42.377.775.82 1.05 1.313.162.569.23 1.16.201 1.75 0 1.111.052 2.371.875 3.229.822.857 2.117.875 3.229.875.59-.029 1.181.04 1.75.201.492.275.936.63 1.312 1.05.814.788 1.75 1.689 2.993 1.689 1.242 0 2.178-.875 2.992-1.689.377-.42.82-.775 1.313-1.05a5.433 5.433 0 0 1 1.75-.201c1.111 0 2.371-.053 3.229-.875.857-.823.875-2.118.875-3.229-.029-.59.039-1.181.2-1.75.276-.492.63-.936 1.05-1.313.867-.813 1.742-1.74 1.742-2.992 0-1.251-.875-2.179-1.689-2.992Zm-8.734.29a8.487 8.487 0 0 0 2.872 1.888.875.875 0 0 1 0 1.628 8.489 8.489 0 0 0-4.76 4.76.874.874 0 0 1-1.628 0 8.487 8.487 0 0 0-4.76-4.76.874.874 0 0 1 0-1.628 8.487 8.487 0 0 0 4.76-4.76.875.875 0 0 1 1.628 0 8.488 8.488 0 0 0 1.888 2.872Z',
                'clip-rule': 'evenodd',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_7019_3730',
            },
        }, [h('rect', {
            attrs: {
                width: '28',
                height: '28',
                transform: 'translate(2 2)',
            },
        })])])]);
    },
};
