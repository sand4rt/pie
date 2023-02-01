import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPinAtHome',
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
            class: 'c-pieIcon c-pieIcon--pinAtHome'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.6937 7.12496L13.7837 7.99996C13.7837 7.99996 13.4862 7.71121 13.0312 7.29996V8.87496H11.7187V6.15371C10.6273 5.15635 9.45678 4.24921 8.21865 3.44121C8.08963 3.38869 7.94518 3.38869 7.81615 3.44121C6.57733 4.24499 5.40672 5.14928 4.31615 6.14496V12.585H13.0662V13.8975H2.96865V7.33496C2.51365 7.74621 2.2249 8.02621 2.21615 8.03496L1.30615 7.12496C3.10076 5.35316 5.04786 3.74278 7.1249 2.31246C7.39017 2.15754 7.69154 2.07517 7.99873 2.07363C8.30592 2.07209 8.6081 2.15145 8.8749 2.30371C10.9526 3.73641 12.8997 5.34976 14.6937 7.12496ZM7.1249 9.74996C6.95184 9.74996 6.78267 9.80128 6.63878 9.89743C6.49488 9.99357 6.38273 10.1302 6.31651 10.2901C6.25028 10.45 6.23295 10.6259 6.26672 10.7957C6.30048 10.9654 6.38381 11.1213 6.50618 11.2437C6.62855 11.3661 6.78446 11.4494 6.9542 11.4832C7.12393 11.5169 7.29986 11.4996 7.45975 11.4334C7.61964 11.3671 7.75629 11.255 7.85244 11.1111C7.94858 10.9672 7.9999 10.798 7.9999 10.625C7.9999 10.3929 7.90771 10.1703 7.74362 10.0062C7.57953 9.84215 7.35697 9.74996 7.1249 9.74996ZM8.8749 10.625C8.8749 10.798 8.92622 10.9672 9.02237 11.1111C9.11851 11.255 9.25517 11.3671 9.41505 11.4334C9.57494 11.4996 9.75087 11.5169 9.92061 11.4832C10.0903 11.4494 10.2462 11.3661 10.3686 11.2437C10.491 11.1213 10.5743 10.9654 10.6081 10.7957C10.6419 10.6259 10.6245 10.45 10.5583 10.2901C10.4921 10.1302 10.3799 9.99357 10.236 9.89743C10.0921 9.80128 9.92296 9.74996 9.7499 9.74996C9.51784 9.74996 9.29528 9.84215 9.13118 10.0062C8.96709 10.1703 8.8749 10.3929 8.8749 10.625ZM12.3749 9.74996C12.2018 9.74996 12.0327 9.80128 11.8888 9.89743C11.7449 9.99357 11.6327 10.1302 11.5665 10.2901C11.5003 10.45 11.483 10.6259 11.5167 10.7957C11.5505 10.9654 11.6338 11.1213 11.7562 11.2437C11.8786 11.3661 12.0345 11.4494 12.2042 11.4832C12.3739 11.5169 12.5499 11.4996 12.7097 11.4334C12.8696 11.3671 13.0063 11.255 13.1024 11.1111C13.1986 10.9672 13.2499 10.798 13.2499 10.625C13.2499 10.3929 13.1577 10.1703 12.9936 10.0062C12.8295 9.84215 12.607 9.74996 12.3749 9.74996Z',
                fill: '#242E30'
            }
        })]);
    }
};