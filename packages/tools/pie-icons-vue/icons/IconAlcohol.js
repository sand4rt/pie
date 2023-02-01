import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAlcohol',
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
            class: 'c-pieIcon c-pieIcon--alcohol'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M6.39939 5.27928V5.05405V2.57658C6.39939 2.15844 6.22997 1.75743 5.92841 1.46177C5.62685 1.1661 5.21784 1 4.79137 1H4.1114C3.68493 1 3.27592 1.1661 2.97436 1.46177C2.6728 1.75743 2.50338 2.15844 2.50338 2.57658V5.05405V5.27928C2.51618 5.81097 2.32613 6.3282 1.97044 6.72973C1.2928 7.60497 0.951213 8.68624 1.00563 9.78378V13.3874C0.990656 13.7883 1.13765 14.1787 1.41466 14.4739C1.69167 14.7691 2.07631 14.9452 2.48501 14.964H6.41777C6.82646 14.9452 7.2111 14.7691 7.48811 14.4739C7.76512 14.1787 7.91212 13.7883 7.89714 13.3874V9.78378C7.96473 8.69172 7.63957 7.61099 6.97828 6.72973C6.60592 6.33496 6.39919 5.81698 6.39939 5.27928ZM3.88169 2.57658C3.88169 2.51684 3.90589 2.45956 3.94897 2.41732C3.99205 2.37508 4.05048 2.35135 4.1114 2.35135H4.79137C4.85229 2.35135 4.91072 2.37508 4.9538 2.41732C4.99688 2.45956 5.02108 2.51684 5.02108 2.57658V3.7027H3.88169V2.57658ZM5.02108 5.05405V5.27928C5.0149 6.07417 5.28739 6.84702 5.79293 7.46847C5.96021 7.69133 6.10486 7.9297 6.2248 8.18018H2.67797C2.79791 7.9297 2.94256 7.69133 3.10984 7.46847C3.61538 6.84702 3.88787 6.07417 3.88169 5.27928V5.05405H5.02108ZM6.51884 13.3874C6.52216 13.4302 6.51467 13.4731 6.49704 13.5124C6.47941 13.5517 6.45218 13.5861 6.41777 13.6126H2.48501C2.45059 13.5861 2.42336 13.5517 2.40573 13.5124C2.3881 13.4731 2.38062 13.4302 2.38393 13.3874V9.78378C2.38393 9.7027 2.38393 9.63063 2.38393 9.55856H6.50965C6.50965 9.63063 6.50965 9.7027 6.50965 9.78378L6.51884 13.3874ZM8.60467 3.08108V7.08108C8.60471 7.79434 8.85352 8.48615 9.30981 9.04167C9.7661 9.59719 10.4024 9.98303 11.1132 10.1351V13.6486H9.65218V15H13.9525V13.6486H12.4915V10.1351C13.2022 9.98303 13.8386 9.59719 14.2949 9.04167C14.7512 8.48615 15 7.79434 15 7.08108V3.08108H8.60467ZM13.6401 7.08108C13.6401 7.55895 13.4465 8.01724 13.1018 8.35515C12.7572 8.69305 12.2897 8.88288 11.8023 8.88288C11.3149 8.88288 10.8475 8.69305 10.5029 8.35515C10.1582 8.01724 9.9646 7.55895 9.9646 7.08108V4.43243H13.6401V7.08108Z',
                fill: '#242E30'
            }
        })]);
    }
};