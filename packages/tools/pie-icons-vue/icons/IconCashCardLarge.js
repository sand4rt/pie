import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCashCardLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--cashCardLarge', 'IconCashCardLarge');
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
                d: 'M28.74 25.957H8.519v-10.99H28.74v10.99Zm-18.471-1.75H26.99v-7.49H10.269v7.49Z',
            },
        }), h('path', {
            attrs: {
                d: 'M14.784 19.587h-3.08v1.75h3.08v-1.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M25.555 19.587h-3.08v1.75h3.08v-1.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M18.625 23.227a2.766 2.766 0 1 1 2.756-2.765 2.774 2.774 0 0 1-2.756 2.765Zm0-3.727a1.015 1.015 0 1 0-.017 2.03 1.015 1.015 0 0 0 .017-2.03Z',
            },
        }), h('path', {
            attrs: {
                d: 'M6.769 16.945H5.71a.202.202 0 0 1-.21-.201v-5.189h13.414v1.662h1.75V8.072a1.96 1.96 0 0 0-1.952-1.96H5.71a1.96 1.96 0 0 0-1.96 1.96v8.672a1.952 1.952 0 0 0 1.96 1.951h1.059v-1.75ZM5.5 8.072a.21.21 0 0 1 .21-.21h13.002a.201.201 0 0 1 .202.21v.875H5.5v-.875Z',
            },
        })]);
    },
};
