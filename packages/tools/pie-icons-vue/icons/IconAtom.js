import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAtom',
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
            class: 'c-pieIcon c-pieIcon--atom'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.3749 8.00004C12.8736 7.36003 13.3157 6.67788 13.6962 5.96129C14.7374 3.91379 14.2824 2.82004 13.6962 2.26004C12.6199 1.13129 10.6249 1.62129 7.99995 3.62504C7.36275 3.11482 6.68034 2.66378 5.9612 2.27754C3.9137 1.23629 2.81995 1.69129 2.25995 2.26004C1.69995 2.82879 1.2362 3.91379 2.25995 5.96129C2.65441 6.67951 3.11116 7.36172 3.62495 8.00004C3.12629 8.64006 2.68421 9.32221 2.3037 10.0388C1.26245 12.0863 1.71745 13.18 2.3037 13.74C2.50124 13.9389 2.73753 14.0952 2.99791 14.199C3.2583 14.3029 3.53724 14.3521 3.81745 14.3438C4.93745 14.3438 6.37245 13.6788 8.0437 12.3925C8.68142 12.8969 9.36383 13.3421 10.0824 13.7225C10.7467 14.0978 11.4903 14.3107 12.2524 14.3438C12.5356 14.3551 12.8181 14.3073 13.0817 14.2033C13.3454 14.0994 13.5844 13.9416 13.7837 13.74C14.3524 13.18 14.8074 12.0863 13.7837 10.0388C13.3753 9.3189 12.9039 8.63665 12.3749 8.00004ZM12.7862 3.18754C13.2762 3.66879 12.8299 4.76254 12.5237 5.36629C12.2263 5.92129 11.8839 6.45098 11.4999 6.95004C11.1237 6.53004 10.7299 6.07504 10.2924 5.67254C9.85495 5.27004 9.41745 4.79754 9.0062 4.46504C10.8174 3.15254 12.2699 2.64504 12.8124 3.18754H12.7862ZM3.1612 12.8125C2.6712 12.3313 3.1612 11.2375 3.4237 10.6338C3.73789 10.0769 4.09788 9.54719 4.49995 9.05004C4.8762 9.47004 5.26995 9.92504 5.70745 10.3275C6.14495 10.73 6.58245 11.1588 6.9937 11.535C5.18245 12.8475 3.72995 13.355 3.18745 12.8125H3.1612ZM12.7862 12.8125C12.3049 13.3025 11.2112 12.8563 10.6074 12.55C9.12375 11.7032 7.77334 10.6417 6.59995 9.40004C6.12745 8.92754 5.72495 8.46379 5.30495 8.00004C5.6987 7.53629 6.12745 7.07254 6.59995 6.60004C6.83328 6.36088 7.06953 6.13338 7.3087 5.91754L6.4337 4.95504C6.17995 5.18254 5.93495 5.41879 5.68995 5.67254C5.25245 6.10129 4.81495 6.54754 4.48245 6.95004C4.09589 6.45409 3.75057 5.92733 3.44995 5.37504C3.1437 4.77129 2.69745 3.67754 3.18745 3.19629C3.67745 2.71504 4.76245 3.19629 5.3662 3.45879C6.85858 4.30085 8.21794 5.35943 9.39995 6.60004C9.87245 7.07254 10.2749 7.53629 10.6949 8.00004C10.3012 8.46379 9.87245 8.92754 9.39995 9.40004C9.15495 9.65379 8.9012 9.89004 8.6562 10.1263L9.5312 11.0888C9.7937 10.8438 10.0562 10.59 10.3099 10.3275C10.7474 9.89879 11.1412 9.45254 11.5174 9.05004C11.904 9.54599 12.2493 10.0728 12.5499 10.625C12.8562 11.2375 13.3024 12.375 12.8124 12.8125H12.7862Z',
                fill: '#242E30'
            }
        })]);
    }
};