import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPrepare',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--prepare', 'IconPrepare');
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
                'clip-path': 'url(#prefix__clip0_6395_3745)',
            },
        }, [h('path', {
            attrs: {
                d: 'M13.574 12.813c.219-.342.341-.744.341-1.182 0-.262-.052-.56-.149-.875a1.414 1.414 0 0 0-.726-.857 1.476 1.476 0 0 0-.542-.149.634.634 0 0 1 .437-.525l-.402-1.251c-.49.157-1.33.726-1.357 1.793a1.593 1.593 0 0 0-.288-.008 4.788 4.788 0 0 0-.15-.587 2.412 2.412 0 0 0-1.26-1.39c.263-.158.517-.298.78-.482.42-.254.778-.814.56-1.418A161.98 161.98 0 0 0 10.1 4.02c1.391-.718 2.188-1.059 2.888-1.365L13.1 2.6l-.62-1.085-.088.035c-.85.368-1.75.77-3.36 1.61-2.888 1.505-5.067 2.774-6.86 3.999l-.044.035C1.315 7.79.99 8.262 1.053 8.744c.078.586.577.91 1.032.971.105.017.455.079 1.024.079h.061A3.94 3.94 0 0 0 4.23 12.69c.044.044.096.079.14.123H1.21l.35 1.312h12.915l.35-1.313h-1.26.009ZM8.98 4.604l.639 1.627s-.026.018-.035.027C8.77 6.8 8 7.212 7.283 7.536a.12.12 0 0 0-.035-.026l-.56-.464A1.657 1.657 0 0 0 5.2 6.722a79.426 79.426 0 0 1 3.78-2.117ZM3.476 8.534c-.472.026-.813 0-.997-.018a4.88 4.88 0 0 1 .376-.306c.473-.324.98-.648 1.514-.98a3.895 3.895 0 0 0-.893 1.304Zm2.87 3.272-.052.709a2.652 2.652 0 0 1-1.111-.718 2.597 2.597 0 0 1-.71-1.916c0-.07.027-.131.036-.201.07-.525.306-1.024.674-1.409.078-.079.148-.166.227-.236a.312.312 0 0 1 .201-.07c.088 0 .175.035.245.087l.027.018.525.429c.218.201.48.341.76.428.01 0 .018.01.027.01l.096.025c.228.07.385.28.385.517a.154.154 0 0 1-.07.131 2.838 2.838 0 0 0-1.26 2.179v.017Zm3.16-.831a2.635 2.635 0 0 1-1.9 1.61l.053-.683c.035-.48.28-.91.682-1.172.412-.271.657-.726.657-1.225 0-.184-.027-.359-.08-.525.263.122.482.35.578.639.167.472.167.962.01 1.365v-.009Zm2.178 1.584a.926.926 0 0 1-.928-.919c0-.088.018-.245.088-.473.009-.043.044-.06.061-.07.018 0 .035-.017.061-.017h.044c.289.105.49.149.665.149.131 0 .289-.026.656-.158.053-.017.088 0 .114 0a.1.1 0 0 1 .061.07c.08.236.088.394.088.482a.919.919 0 0 1-.919.918l.009.018Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_6395_3745',
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
