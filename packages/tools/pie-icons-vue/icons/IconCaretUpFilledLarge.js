import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCaretUpFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--caretUpFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M17.2687 8.12498C17.1174 7.88457 16.9077 7.68644 16.659 7.54912C16.4103 7.41181 16.1309 7.33978 15.8469 7.33978C15.5628 7.33978 15.2834 7.41181 15.0347 7.54912C14.7861 7.68644 14.5763 7.88457 14.425 8.12498L5.75373 22.125C5.59644 22.3793 5.50987 22.6709 5.50295 22.9699C5.49604 23.2688 5.56903 23.5642 5.71439 23.8255C5.85975 24.0868 6.07222 24.3045 6.32986 24.4563C6.5875 24.608 6.88097 24.6883 7.17998 24.6887H24.82C25.1271 24.6924 25.4293 24.6117 25.6938 24.4556C25.9582 24.2995 26.1749 24.0739 26.3201 23.8033C26.4653 23.5327 26.5336 23.2274 26.5175 22.9207C26.5014 22.614 26.4015 22.3176 26.2287 22.0637L17.2687 8.12498Z',
                fill: '#242E30'
            }
        })]);
    }
};