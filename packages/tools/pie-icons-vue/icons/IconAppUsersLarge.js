import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconAppUsersLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--appUsersLarge', 'IconAppUsersLarge');
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
                d: 'M17.75 18.695a4.463 4.463 0 0 0-2.328-.875 3.5 3.5 0 1 0-4.952 0c.063.06.13.116.201.166a4.506 4.506 0 0 0-2.931 2.835L6.996 23h1.847l.56-1.636a2.774 2.774 0 0 1 2.624-1.864h2.94a2.721 2.721 0 0 1 1.61.516 4.513 4.513 0 0 0-.358.779L15.475 23h1.855l.551-1.645a2.765 2.765 0 0 1 2.625-1.855h2.949a2.765 2.765 0 0 1 2.625 1.855L26.658 23h1.846l-.744-2.205a4.49 4.49 0 0 0-2.931-2.835c.07-.05.138-.106.201-.166a3.5 3.5 0 0 0 0-4.935 3.57 3.57 0 0 0-4.935 0 3.5 3.5 0 0 0 0 4.926 4.524 4.524 0 0 0-2.345.91Zm-3.579-2.135a1.75 1.75 0 1 1-2.49-2.459 1.75 1.75 0 0 1 2.49 2.459Zm7.158-2.459a1.75 1.75 0 0 1 2.975 1.225c0 .462-.182.906-.508 1.234a1.75 1.75 0 0 1-2.467 0 1.75 1.75 0 0 1-.508-1.234c.002-.459.184-.899.508-1.225Z',
            },
        }), h('path', {
            attrs: {
                d: 'M5.5 26.5a.875.875 0 0 1-.875-.796V7.189a.875.875 0 0 1 .971-.814H7.53l.665 1.505h5.11l.665-1.505h1.934a.875.875 0 0 1 .971.814v2.686h1.75V7.189a2.626 2.626 0 0 0-2.721-2.564H5.596a2.625 2.625 0 0 0-2.721 2.564v18.497a2.625 2.625 0 0 0 2.721 2.564H16a2.625 2.625 0 0 0 2.468-1.75H5.5Z',
            },
        })]);
    },
};
