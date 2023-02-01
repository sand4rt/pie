import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconTranslateFilled',
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
            class: 'c-pieIcon c-pieIcon--translateFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.21875C6.6588 1.21875 5.34771 1.61646 4.23254 2.3616C3.11737 3.10673 2.2482 4.16582 1.73494 5.40493C1.22169 6.64404 1.0874 8.00752 1.34905 9.32296C1.61071 10.6384 2.25656 11.8467 3.20494 12.7951C4.15331 13.7434 5.36161 14.3893 6.67705 14.651C7.99248 14.9126 9.35596 14.7783 10.5951 14.2651C11.8342 13.7518 12.8933 12.8826 13.6384 11.7675C14.3835 10.6523 14.7813 9.34121 14.7813 8C14.7789 6.20221 14.0637 4.47872 12.7925 3.20749C11.5213 1.93626 9.79779 1.22107 8 1.21875ZM7.8775 10.0125C7.39057 9.7691 6.9302 9.47587 6.50375 9.1375C5.86759 9.66497 5.14933 10.0847 4.3775 10.38L4.05375 9.505C4.70236 9.26925 5.30821 8.92937 5.8475 8.49875C5.55635 8.19119 5.29827 7.85392 5.0775 7.4925L5.83 7.02875C6.02365 7.34069 6.24631 7.63365 6.495 7.90375C6.66997 7.69912 6.83076 7.48278 6.97625 7.25625C7.17 6.93908 7.32844 6.60165 7.44875 6.25H3.9925V5.375H6.08375V4.815H6.95875V5.375H9.0675V6.25H8.37625C8.24234 6.7513 8.03285 7.22928 7.755 7.6675C7.57385 7.95808 7.36899 8.23318 7.1425 8.49C7.47741 8.75809 7.8379 8.99255 8.21875 9.19L7.8775 10.0125ZM11.57 11.3425L11.5 11.0538L11.3163 10.5725H9.40875L9.11125 11.3425H8.23625L8.35875 11.0538L8.63875 10.345L8.84875 9.82875L8.98 9.5225L9.61 7.895L9.89 7.2125H10.8613L12.515 11.3075L11.57 11.3425Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.0213 9.00625L9.81125 9.54875L9.6975 9.8375H10.9838L10.3363 8.18375L10.0213 9.00625Z',
                fill: '#242E30'
            }
        })]);
    }
};