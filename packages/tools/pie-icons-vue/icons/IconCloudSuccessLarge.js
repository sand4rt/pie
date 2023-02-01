import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCloudSuccessLarge',
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
            class: 'c-pieIcon c-pieIcon--cloudSuccessLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.1375 25.625H8.64997C6.9559 25.625 5.33122 24.952 4.13333 23.7542C2.93544 22.5563 2.26247 20.9316 2.26247 19.2375C2.25921 17.9791 2.6324 16.7484 3.33406 15.7037C4.03572 14.659 5.03379 13.848 6.19997 13.375C6.72211 11.0269 8.06951 8.9442 9.9972 7.50543C11.9249 6.06666 14.3049 5.36741 16.7045 5.5348C19.1041 5.70219 21.3639 6.7251 23.0732 8.41757C24.7825 10.11 25.8276 12.3597 26.0187 14.7575C27.0996 15.1549 28.034 15.8715 28.6982 16.8123C29.3624 17.753 29.7248 18.8735 29.7375 20.025C29.7352 21.5095 29.1444 22.9325 28.0947 23.9823C27.045 25.032 25.622 25.6227 24.1375 25.625ZM8.64997 14.6C8.17369 14.5947 7.70007 14.6717 7.24997 14.8275C6.31219 15.1138 5.49089 15.6932 4.90662 16.4806C4.32235 17.268 4.0059 18.222 4.00372 19.2025C4.00026 19.8149 4.11789 20.4219 4.34983 20.9886C4.58178 21.5554 4.92347 22.0707 5.35526 22.5049C5.78705 22.9391 6.30042 23.2837 6.86585 23.5188C7.43127 23.754 8.0376 23.875 8.64997 23.875H24.1375C25.1586 23.875 26.1378 23.4694 26.8598 22.7474C27.5818 22.0254 27.9875 21.0461 27.9875 20.025C27.9828 19.1495 27.6832 18.3012 27.137 17.6169C26.5909 16.9327 25.8301 16.4524 24.9775 16.2538L24.3037 16.0963V15.405C24.2813 13.4421 23.5643 11.5506 22.2798 10.0662C20.9953 8.58173 19.2265 7.60035 17.2872 7.29618C15.3478 6.99202 13.3635 7.38474 11.6862 8.40465C10.0089 9.42456 8.74722 11.0057 8.12497 12.8675C8.92426 12.8064 9.72798 12.8924 10.4962 13.1213L9.97122 14.7925C9.54204 14.6666 9.09725 14.6018 8.64997 14.6ZM14.775 20.375C14.9717 20.3742 15.1662 20.3335 15.3467 20.2553C15.5272 20.1771 15.6899 20.063 15.825 19.92L21.3375 13.97L20.0512 12.78L14.8012 18.4675L12.8762 16.2975L11.5637 17.4525L13.76 19.92C13.8928 20.0636 14.0538 20.1781 14.233 20.2564C14.4122 20.3347 14.6057 20.3751 14.8012 20.375H14.775Z',
                fill: '#242E30'
            }
        })]);
    }
};