import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconDriverCarLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--driverCarLarge', 'IconDriverCarLarge');
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
                d: 'M16 12.5a4.813 4.813 0 1 0-.003-9.626A4.813 4.813 0 0 0 16 12.5Zm-2.17-7a3.071 3.071 0 1 1 4.312 4.375A3.071 3.071 0 0 1 13.83 5.5Zm-5.434 14H6.55l.464-1.374a6.886 6.886 0 0 1 6.545-4.751h4.882a6.887 6.887 0 0 1 6.545 4.751l.464 1.374h-1.846l-.271-.823a5.153 5.153 0 0 0-4.892-3.552H13.56a5.154 5.154 0 0 0-4.891 3.552l-.272.823Zm15.916 7.438v.437h-1.75a3.628 3.628 0 0 0 0-.438 6.563 6.563 0 1 0-13.124 0 3.666 3.666 0 0 0 0 .438h-1.75v-.438a8.313 8.313 0 0 1 16.624 0Zm-2.93 0v.437h-1.75a3.713 3.713 0 0 0 0-.438 3.631 3.631 0 0 0-7.263 0c.006.147.02.293.043.438h-1.75v-.438a5.381 5.381 0 0 1 10.763 0h-.044Z',
            },
        })]);
    },
};
