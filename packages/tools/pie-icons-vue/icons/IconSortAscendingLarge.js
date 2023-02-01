import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSortAscendingLarge',
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
            class: 'c-pieIcon c-pieIcon--sortAscendingLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M18.03 10.75H2V9H18.765L18.03 10.75ZM2 23H12.8675L13.6025 21.25H2V23ZM2 16.875H15.4487L16.1837 15.125H2V16.875ZM27.8913 20.0162L23.875 24.0937V12.5H22.125V24.0237L18.1087 20.0162L16.875 21.25L21.8012 26.185C22.1258 26.4902 22.5545 26.66 23 26.66C23.4455 26.66 23.8742 26.4902 24.1988 26.185L29.125 21.25L27.8913 20.0162Z',
                fill: '#242E30'
            }
        })]);
    }
};