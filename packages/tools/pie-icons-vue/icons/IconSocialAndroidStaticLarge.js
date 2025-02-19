import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialAndroidStaticLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--androidStaticLarge', 'IconSocialAndroidStaticLarge');
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
                fill: '#A4C639',
                'fill-rule': 'evenodd',
                d: 'M15.204 3.75c-1.714.164-3.243.85-4.373 1.873L9.525 3.365a.17.17 0 0 0-.227-.061.17.17 0 0 0-.062.227l1.347 2.328C9.51 6.934 8.855 8.333 8.833 9.866h14.342c-.021-1.537-.682-2.94-1.761-4.016l1.341-2.319a.17.17 0 0 0-.061-.227.17.17 0 0 0-.228.061l-1.3 2.25c-1.131-1.018-2.656-1.701-4.361-1.865h-1.601Zm-2.161 4.086a.812.812 0 0 0 .822-.805v-.009a.812.812 0 0 0-.822-.805.825.825 0 0 0-.823.814c0 .446.368.805.823.805Zm6.134 0a.812.812 0 0 0 .822-.805v-.009a.812.812 0 0 0-.822-.805.825.825 0 0 0-.823.814c0 .446.367.805.823.805Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#A4C639',
                d: 'M17.995 23.061h-3.99v4.095a1.593 1.593 0 0 1-3.185 0v-4.095h-.07c-1.094 0-1.969-.892-1.969-2.003V10.733c0-.031.002-.062.005-.092a1.29 1.29 0 0 0 .004-.092h14.429v10.509c0 1.11-.875 2.003-1.969 2.003h-.07v4.095a1.593 1.593 0 0 1-3.185 0v-4.095Z',
            },
        }), h('path', {
            attrs: {
                fill: '#A4C639',
                d: 'M7.819 13.06a1.593 1.593 0 0 0-3.185 0v6.816a1.593 1.593 0 1 0 3.185 0V13.06Z',
            },
        }), h('path', {
            attrs: {
                fill: '#A4C639',
                d: 'M27.366 13.06a1.593 1.593 0 0 0-3.185 0v6.816a1.593 1.593 0 1 0 3.185 0V13.06Z',
            },
        })]);
    },
};
