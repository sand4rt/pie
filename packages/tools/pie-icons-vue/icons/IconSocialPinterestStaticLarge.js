import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialPinterestStaticLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--pinterestStaticLarge', 'IconSocialPinterestStaticLarge');
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
                fill: '#E60023',
                d: 'M16 3.75C9.235 3.75 3.75 9.235 3.75 16c0 5.19 3.229 9.626 7.786 11.411-.107-.97-.204-2.46.042-3.518.223-.956 1.437-6.089 1.437-6.089s-.367-.734-.367-1.819c0-1.703.988-2.975 2.217-2.975 1.045 0 1.55.785 1.55 1.726 0 1.051-.67 2.622-1.015 4.079-.288 1.219.612 2.213 1.814 2.213 2.178 0 3.851-2.295 3.851-5.61 0-2.932-2.107-4.983-5.117-4.983-3.485 0-5.531 2.614-5.531 5.316 0 1.053.405 2.182.912 2.796.1.121.114.227.084.351-.093.387-.3 1.219-.34 1.39-.053.224-.177.271-.41.163-1.53-.712-2.486-2.949-2.486-4.746 0-3.864 2.808-7.413 8.094-7.413 4.25 0 7.552 3.028 7.552 7.075 0 4.222-2.662 7.62-6.357 7.62-1.241 0-2.408-.645-2.807-1.407 0 0-.615 2.34-.764 2.912-.276 1.064-1.023 2.398-1.522 3.212 1.146.355 2.364.546 3.627.546 6.765 0 12.25-5.485 12.25-12.25S22.765 3.75 16 3.75Z',
            },
        })]);
    },
};
