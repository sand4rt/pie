import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconKebabBowl',
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
            class: 'c-pieIcon c-pieIcon--kebabBowl'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.7113 7.88629L14.615 7.34379H14.3438C14.6677 6.76965 14.8082 6.11011 14.7463 5.45379C14.716 5.27256 14.6463 5.10021 14.5419 4.94898C14.4376 4.79775 14.3012 4.67136 14.1425 4.57879C13.8627 4.45151 13.5478 4.42372 13.25 4.50004C13.2461 4.27233 13.2017 4.04714 13.1188 3.83504C13.0494 3.65396 12.9403 3.49076 12.7994 3.35749C12.6586 3.22422 12.4896 3.12427 12.305 3.06504C12.001 2.98161 11.6791 2.9903 11.38 3.08999C11.0809 3.18968 10.8182 3.37589 10.625 3.62504C10.5144 3.50626 10.378 3.41449 10.2262 3.35684C10.0745 3.29918 9.91158 3.27718 9.75 3.29254C9.16375 3.29254 8.6825 3.81754 8.315 4.74504C8.20143 4.73597 8.08732 4.73597 7.97375 4.74504C7.85724 4.73642 7.74026 4.73642 7.62375 4.74504C7.27375 3.87004 6.80125 3.38879 6.22375 3.35379C6.06255 3.34282 5.90088 3.36685 5.74985 3.42424C5.59881 3.48164 5.46198 3.57103 5.34875 3.68629C5.1734 3.4253 4.92355 3.22313 4.63172 3.10609C4.3399 2.98905 4.0196 2.96255 3.7125 3.03004C3.52697 3.08753 3.35712 3.18686 3.21603 3.32036C3.07495 3.45386 2.9664 3.61797 2.89875 3.80004C2.80863 4.02288 2.75829 4.2598 2.75 4.50004C2.5891 4.46395 2.42266 4.46002 2.26024 4.48847C2.09782 4.51692 1.94263 4.5772 1.80358 4.66583C1.66453 4.75446 1.54438 4.8697 1.45002 5.00493C1.35566 5.14015 1.28896 5.2927 1.25375 5.45379C1.19182 6.11011 1.33228 6.76965 1.65625 7.34379H1.385L1.28875 7.88629C1.24208 8.17562 1.21868 8.46822 1.21875 8.76129C1.21875 12.0775 4.26375 14.7725 8 14.7725C11.7362 14.7725 14.7812 12.0775 14.7812 8.76129C14.7813 8.46822 14.7579 8.17562 14.7113 7.88629V7.88629ZM9.82875 4.71879C9.89596 4.82948 9.95166 4.94676 9.995 5.06879C10.0399 5.18671 10.1187 5.2887 10.2215 5.36189C10.3242 5.43508 10.4464 5.47619 10.5725 5.48004C10.6984 5.48638 10.8235 5.4558 10.9323 5.39207C11.0411 5.32834 11.1289 5.23423 11.185 5.12129C11.3472 4.78166 11.5834 4.48268 11.8763 4.24629C11.9453 4.56431 11.921 4.89551 11.8063 5.20004C11.7356 5.31793 11.7043 5.45524 11.7169 5.5921C11.7295 5.72895 11.7853 5.85825 11.8763 5.96129C11.9854 6.08158 12.1353 6.15711 12.2969 6.17327C12.4586 6.18943 12.6204 6.14508 12.7513 6.04879C12.9666 5.90989 13.1953 5.79266 13.4338 5.69879C13.3873 6.28822 13.1749 6.85246 12.8213 7.32629H10.8963C10.861 6.88869 10.7239 6.4654 10.4961 6.09016C10.2682 5.71492 9.95578 5.39812 9.58375 5.16504C9.65077 5.0087 9.73282 4.85925 9.82875 4.71879V4.71879ZM9.58375 7.34379H6.41625C6.48401 6.97316 6.67961 6.63803 6.969 6.39675C7.25838 6.15547 7.62323 6.02333 8 6.02333C8.37677 6.02333 8.74162 6.15547 9.031 6.39675C9.32039 6.63803 9.51599 6.97316 9.58375 7.34379V7.34379ZM2.53125 5.77754C2.77571 5.85532 3.004 5.97688 3.205 6.13629C3.31863 6.22601 3.45875 6.27564 3.60352 6.27744C3.7483 6.27924 3.88961 6.23311 4.00544 6.14624C4.12126 6.05937 4.20511 5.93663 4.24392 5.79714C4.28273 5.65766 4.27432 5.50925 4.22 5.37504C4.09995 5.0296 4.0494 4.66384 4.07125 4.29879C4.39151 4.51792 4.64569 4.82052 4.80625 5.17379C4.86305 5.28929 4.95174 5.38611 5.06184 5.45279C5.17193 5.51947 5.29883 5.55322 5.4275 5.55004C5.55555 5.54492 5.67931 5.50242 5.78349 5.42779C5.88767 5.35315 5.96772 5.24964 6.01375 5.13004C6.05881 4.99734 6.12056 4.87091 6.1975 4.75379C6.27899 4.88164 6.34925 5.01631 6.4075 5.15629C6.03465 5.39398 5.72257 5.71559 5.49619 6.09541C5.26981 6.47524 5.13542 6.90275 5.10375 7.34379H3.1525C2.82096 6.88008 2.6077 6.34242 2.53125 5.77754V5.77754ZM8 13.4688C4.98125 13.4688 2.53125 11.36 2.53125 8.77004V8.65629H13.4688V8.77004C13.4688 11.36 11.0188 13.4688 8 13.4688Z',
                fill: '#242E30'
            }
        })]);
    }
};