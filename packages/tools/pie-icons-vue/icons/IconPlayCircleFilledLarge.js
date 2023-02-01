import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPlayCircleFilledLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--playCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M20.0425 16L13.41 19.4562L13.3837 12.5262L20.0425 16Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M9.19427 5.8145C11.2088 4.46845 13.5772 3.75 16 3.75C19.2489 3.75 22.3647 5.04062 24.6621 7.33794C26.9594 9.63526 28.25 12.7511 28.25 16C28.25 18.4228 27.5316 20.7912 26.1855 22.8057C24.8395 24.8202 22.9263 26.3904 20.6879 27.3175C18.4495 28.2447 15.9864 28.4873 13.6101 28.0146C11.2339 27.542 9.05114 26.3752 7.33795 24.6621C5.62475 22.9489 4.45805 20.7661 3.98539 18.3899C3.51272 16.0136 3.75531 13.5505 4.68248 11.3121C5.60965 9.07373 7.17977 7.16054 9.19427 5.8145ZM13.8825 21.18L21.4425 17.2162C21.6486 17.0865 21.819 16.9072 21.9382 16.6948C22.0574 16.4824 22.1216 16.2435 22.125 16C22.1211 15.7522 22.0549 15.5093 21.9326 15.2937C21.8103 15.0781 21.6357 14.8968 21.425 14.7663L13.9088 10.8375C13.6962 10.6913 13.4478 10.6059 13.1903 10.5905C12.9328 10.5751 12.676 10.6302 12.4475 10.75C12.208 10.8764 12.0084 11.0669 11.8709 11.3002C11.7333 11.5336 11.6634 11.8005 11.6688 12.0712V19.9463C11.6666 20.2141 11.7381 20.4773 11.8755 20.7072C12.0128 20.9372 12.2107 21.1249 12.4475 21.25C12.6526 21.358 12.8807 21.415 13.1125 21.4163C13.3869 21.4157 13.655 21.3334 13.8825 21.18Z',
                fill: '#242E30'
            }
        })]);
    }
};