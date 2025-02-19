import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSun',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--sun', 'IconSun');
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
                d: 'M7.344 13.425v1.137h1.312v-1.137a5.538 5.538 0 0 1-.656.044 5.538 5.538 0 0 1-.656-.044Z',
            },
        }), h('path', {
            attrs: {
                d: 'M8.656 2.575V1.411H7.344v1.164c.217-.028.436-.042.656-.044.22.002.438.016.656.044Z',
            },
        }), h('path', {
            attrs: {
                d: 'M13.425 8.639h1.155V7.326h-1.155c.027.224.042.449.044.674a5.11 5.11 0 0 1-.044.639Z',
            },
        }), h('path', {
            attrs: {
                d: 'M2.575 7.326H1.42V8.64h1.155A5.11 5.11 0 0 1 2.53 8a5.81 5.81 0 0 1 .044-.674Z',
            },
        }), h('path', {
            attrs: {
                d: 'm4.64 3.695-.823-.822-.927.927.814.822c.276-.343.59-.654.936-.927Z',
            },
        }), h('path', {
            attrs: {
                d: 'm11.377 12.296.805.805.928-.927-.805-.814c-.273.346-.584.66-.928.936Z',
            },
        }), h('path', {
            attrs: {
                d: 'M11.377 12.287c.344-.276.655-.59.928-.936-.27.349-.582.663-.928.936Z',
            },
        }), h('path', {
            attrs: {
                d: 'M3.704 4.622c.276-.343.59-.654.936-.927-.348.27-.663.582-.936.927Z',
            },
        }), h('path', {
            attrs: {
                d: 'm12.296 4.622.814-.822-.928-.927-.822.822c.346.273.66.584.936.927Z',
            },
        }), h('path', {
            attrs: {
                d: 'm3.695 11.36-.805.814.927.927.805-.805a5.863 5.863 0 0 1-.927-.936Z',
            },
        }), h('path', {
            attrs: {
                d: 'M4.622 12.296a5.863 5.863 0 0 1-.927-.936c.27.348.582.663.927.936Z',
            },
        }), h('path', {
            attrs: {
                d: 'M12.287 4.622a5.863 5.863 0 0 0-.936-.927c.348.27.663.582.936.927Z',
            },
        }), h('path', {
            attrs: {
                d: 'M8 3.844a4.156 4.156 0 1 0 0 8.312 4.156 4.156 0 0 0 0-8.312Zm0 7A2.844 2.844 0 1 1 10.844 8 2.853 2.853 0 0 1 8 10.844Z',
            },
        })]);
    },
};
