import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPauseCircleFilled',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--pauseCircleFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.21875C6.6588 1.21875 5.34771 1.61646 4.23254 2.3616C3.11737 3.10673 2.2482 4.16582 1.73494 5.40493C1.22169 6.64404 1.0874 8.00752 1.34905 9.32296C1.61071 10.6384 2.25656 11.8467 3.20494 12.7951C4.15331 13.7434 5.36161 14.3893 6.67705 14.651C7.99248 14.9126 9.35596 14.7783 10.5951 14.2651C11.8342 13.7518 12.8933 12.8826 13.6384 11.7675C14.3835 10.6523 14.7813 9.3412 14.7813 8C14.7789 6.20221 14.0637 4.47872 12.7925 3.20749C11.5213 1.93626 9.79779 1.22107 8 1.21875ZM7.34375 10.1875H6.03125V5.8125H7.34375V10.1875ZM9.96875 10.1875H8.65625V5.8125H9.96875V10.1875Z',
                fill: '#242E30'
            }
        })]);
    }
};