import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRssLarge',
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
            class: 'c-pieIcon c-pieIcon--rssLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.76247 21.355C8.5784 21.5383 8.45288 21.7722 8.40182 22.0269C8.35076 22.2817 8.37645 22.5458 8.47564 22.786C8.57482 23.0261 8.74305 23.2314 8.959 23.3758C9.17495 23.5203 9.42891 23.5974 9.68872 23.5974C9.94853 23.5974 10.2025 23.5203 10.4184 23.3758C10.6344 23.2314 10.8026 23.0261 10.9018 22.786C11.001 22.5458 11.0267 22.2817 10.9756 22.0269C10.9246 21.7722 10.799 21.5383 10.615 21.355C10.369 21.11 10.0359 20.9724 9.68872 20.9724C9.34152 20.9724 9.00846 21.11 8.76247 21.355Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8.49996 7V8.5C12.4782 8.5 16.2935 10.0804 19.1066 12.8934C21.9196 15.7064 23.5 19.5218 23.5 23.5H25C25 19.1239 23.2616 14.9271 20.1672 11.8327C17.0729 8.73839 12.876 7 8.49996 7Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.24996 11.8075V13.3075C11.7531 13.3115 14.1525 14.3076 15.9224 16.0775C17.6924 17.8475 18.6885 20.2469 18.6925 22.75H20.1925C20.1885 19.8491 19.0344 17.0681 16.9831 15.0169C14.9318 12.9656 12.1509 11.8115 9.24996 11.8075Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.99996 16.615V18.115C11.0297 18.117 12.0167 18.5269 12.7449 19.2551C13.473 19.9832 13.883 20.9702 13.885 22H15.385C15.383 20.5724 14.815 19.2039 13.8055 18.1944C12.7961 17.185 11.4275 16.617 9.99996 16.615Z',
                fill: '#242E30'
            }
        })]);
    }
};