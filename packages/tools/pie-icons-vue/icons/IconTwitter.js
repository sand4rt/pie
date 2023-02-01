import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconTwitter',
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
            class: 'c-pieIcon c-pieIcon--twitter'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.5296 5.09994C13.5381 5.22404 13.5381 5.34814 13.5381 5.47338C13.5381 9.28964 10.6704 13.6909 5.42656 13.6909V13.6887C3.87753 13.691 2.36067 13.2414 1.05664 12.3939C1.28188 12.4213 1.50825 12.4351 1.73519 12.4356C3.0189 12.4368 4.26591 12.0004 5.27583 11.1969C4.05591 11.1735 2.98616 10.3677 2.61245 9.19128C3.03979 9.27477 3.48011 9.25762 3.89954 9.14152C2.56954 8.8693 1.61269 7.68548 1.61269 6.31064V6.27404C2.00898 6.49765 2.45269 6.62175 2.90656 6.63548C1.6539 5.78735 1.26777 4.09912 2.02422 2.77919C3.47164 4.58352 5.60721 5.68041 7.89971 5.79651C7.66995 4.7934 7.98382 3.74226 8.72446 3.03711C9.87269 1.94365 11.6786 1.99969 12.7579 3.16236C13.3964 3.03482 14.0083 2.79749 14.5683 2.46121C14.3555 3.12976 13.9101 3.69765 13.3151 4.05852C13.8802 3.99103 14.4323 3.83776 14.9522 3.60386C14.5695 4.1849 14.0874 4.69103 13.5296 5.09994Z',
                fill: '#1D9BF0'
            }
        })]);
    }
};