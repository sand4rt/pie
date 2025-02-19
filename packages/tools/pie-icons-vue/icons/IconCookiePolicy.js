import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCookiePolicy',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--cookiePolicy', 'IconCookiePolicy');
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
                'clip-path': 'url(#prefix__clip0_5014_3343)',
            },
        }, [h('path', {
            attrs: {
                d: 'M8 14.563A6.565 6.565 0 0 1 1.437 8 6.565 6.565 0 0 1 8 1.437a6.7 6.7 0 0 1 1.321.132l.28 1.155a1.21 1.21 0 0 0-.464.945c0 .674.552 1.225 1.226 1.225h.07l.656.866a1.22 1.22 0 0 0-.079.411c0 .674.551 1.225 1.225 1.225.429 0 .814-.218 1.041-.586l1.208.245a6.565 6.565 0 0 1-6.492 7.508H8ZM8 2.75A5.254 5.254 0 0 0 2.75 8 5.254 5.254 0 0 0 8 13.25a5.254 5.254 0 0 0 5.224-4.742 2.54 2.54 0 0 1-3.526-2.336v-.053A2.536 2.536 0 0 1 7.99 2.74L8 2.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M5.839 7.37a.805.805 0 1 0 0-1.61.805.805 0 0 0 0 1.61Z',
            },
        }), h('path', {
            attrs: {
                d: 'M5.839 11.106a.805.805 0 1 0 0-1.61.805.805 0 0 0 0 1.61Z',
            },
        }), h('path', {
            attrs: {
                d: 'M9.426 11.106a.805.805 0 1 0 0-1.61.805.805 0 0 0 0 1.61Z',
            },
        }), h('path', {
            attrs: {
                d: 'M12.279 4.692a.805.805 0 1 0 0-1.61.805.805 0 0 0 0 1.61Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_5014_3343',
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
