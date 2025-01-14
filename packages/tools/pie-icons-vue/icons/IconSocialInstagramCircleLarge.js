import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialInstagramCircleLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--instagramCircleLarge', 'IconSocialInstagramCircleLarge');
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
                d: 'M16.25 18.251a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
            },
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                d: 'M12.32 10.565c-.394.153-.729.358-1.063.693a2.936 2.936 0 0 0-.692 1.06c-.15.381-.25.818-.278 1.457-.03.64-.037.844-.037 2.474 0 1.63.007 1.834.037 2.474.029.639.131 1.075.278 1.456.153.395.358.73.692 1.064.335.334.669.539 1.064.692.38.15.817.25 1.456.278.639.03.844.037 2.473.037 1.63 0 1.834-.007 2.473-.037.64-.029 1.076-.131 1.456-.278.395-.153.73-.358 1.064-.692.334-.335.539-.669.692-1.064.15-.38.25-.817.278-1.456.03-.64.037-.845.037-2.474 0-1.63-.007-1.835-.037-2.474-.029-.639-.131-1.076-.278-1.456a2.96 2.96 0 0 0-.69-1.062 2.942 2.942 0 0 0-1.063-.692c-.38-.15-.817-.25-1.456-.278-.64-.03-.844-.037-2.474-.037-1.629 0-1.834.007-2.473.037-.641.026-1.078.129-1.458.278Zm7.854 2.483a.72.72 0 1 1-1.44 0 .72.72 0 0 1 1.44 0Zm-3.924 6.284a3.08 3.08 0 1 1 0-6.162 3.08 3.08 0 0 1 0 6.162Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                d: 'M9.444 6.064a12.25 12.25 0 1 1 13.612 20.372A12.25 12.25 0 0 1 9.444 6.064Zm.972 18.916A10.5 10.5 0 1 0 22.084 7.52a10.5 10.5 0 0 0-11.666 17.46Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
