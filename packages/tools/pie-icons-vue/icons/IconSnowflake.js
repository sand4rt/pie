import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSnowflake',
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
            class: 'c-pieIcon c-pieIcon--snowflake'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.7487 8.77877L12.1299 9.62752L9.31242 8.00002L12.1299 6.37252L13.7487 7.22127L14.3612 6.05752L12.7862 5.23502L12.8562 3.45877L11.5524 3.40627L11.4737 5.24377L8.65617 6.86252V3.60752L10.2049 2.62752L9.49617 1.52502L7.99992 2.47002L6.50367 1.52502L5.79492 2.62752L7.34367 3.60752V6.86252L4.52617 5.24377L4.44742 3.40627L3.14367 3.45877L3.21367 5.23502L1.63867 6.05752L2.25117 7.22127L3.86992 6.37252L6.68742 8.00002L3.86992 9.62752L2.25117 8.77877L1.63867 9.94252L3.21367 10.765L3.13492 12.5413L4.44742 12.5938L4.52617 10.7563L7.34367 9.13752V12.3925L5.79492 13.3725L6.50367 14.475L7.99992 13.53L9.49617 14.475L10.2049 13.3725L8.65617 12.3925V9.13752L11.4737 10.7563L11.5437 12.5938L12.8562 12.5413L12.7862 10.765L14.3612 9.94252L13.7487 8.77877Z',
                fill: '#242E30'
            }
        })]);
    }
};