import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPaymentIDeal',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--iDeal', 'IconPaymentIDeal');
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
                fill: '#000',
                'fill-rule': 'evenodd',
                d: 'M8.853 13.25H1.875V2.75h6.978c2.857.04 5.158 1.969 5.158 5.25 0 3.281-2.301 5.21-5.158 5.25Zm-6.431-.547V3.297h6.374C11.535 3.31 13.47 5.147 13.47 8c0 2.852-1.934 4.69-4.673 4.703H2.422Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#000',
                'fill-rule': 'evenodd',
                d: 'M3.148 8.696h1.82v3.277h-1.82V8.695Zm.91-.486a1.154 1.154 0 1 0 0-2.31 1.154 1.154 0 1 0 0 2.31Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#E54279',
                'fill-rule': 'evenodd',
                d: 'M12.72 7.545c-.288-3.522-3.928-3.522-3.928-3.522H5.939v7.954h2.853s3.885 0 3.946-3.885h-1.334V5.966h.547v1.579h.77ZM7.52 5.965h1.273v.548h-.726v.24h.669v.486h-.67v.302h.788v.546H7.52V5.962v.005Zm-.81 1.064c0-.516-.34-.516-.34-.516h-.425v-.547h.363s.91 0 .91 1.063-.91 1.063-.91 1.063h-.363v-.547h.424s.341 0 .341-.516ZM9.75 5.966h.744l.639 2.126h-.552l-.114-.403h-.7l-.118.403H9.1l.651-2.126Zm.372.56.192.625H9.93l.193-.625Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
