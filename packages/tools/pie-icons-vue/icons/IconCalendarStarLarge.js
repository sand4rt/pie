import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCalendarStarLarge',
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
            class: 'c-pieIcon c-pieIcon--calendarStarLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.3266 12.5087H21.7867L22.6596 10.7631H9.45382L10.3266 12.5087Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M22.0748 6.36411V4.61847H20.3291V6.36411H11.601V4.61847H9.85532V6.36411H4.61841V27.3117H22.9476C24.105 27.3117 25.215 26.8519 26.0335 26.0335C26.8519 25.2151 27.3117 24.1051 27.3117 22.9476V6.36411H22.0748ZM25.566 22.9476C25.566 23.6421 25.2902 24.3081 24.7991 24.7992C24.3081 25.2902 23.642 25.5661 22.9476 25.5661H6.36404V8.10974H9.85532V8.98256H11.601V8.10974H20.3291V8.98256H22.0748V8.10974H25.566V22.9476Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M21.071 17.9377C21.0211 17.7837 20.9294 17.6467 20.8061 17.5419C20.6828 17.4371 20.5327 17.3686 20.3728 17.3442L17.894 16.9863L16.7768 14.7432C16.7044 14.5979 16.5929 14.4757 16.4549 14.3903C16.3169 14.3049 16.1579 14.2597 15.9956 14.2597C15.8333 14.2597 15.6742 14.3049 15.5362 14.3903C15.3983 14.4757 15.2868 14.5979 15.2144 14.7432L14.1059 16.9863L11.6009 17.3442C11.4386 17.3663 11.2857 17.4336 11.1599 17.5385C11.034 17.6434 10.9402 17.7816 10.8892 17.9374C10.8382 18.0931 10.8321 18.26 10.8715 18.419C10.9109 18.5781 10.9943 18.7228 11.1122 18.8367L12.9102 20.5823L12.4912 23.0524C12.4591 23.2152 12.4741 23.3837 12.5344 23.5383C12.5947 23.6929 12.6978 23.8271 12.8316 23.9252C12.9814 24.0336 13.1617 24.0917 13.3466 24.091C13.4887 24.0892 13.6287 24.0565 13.7568 23.995L15.965 22.808L18.182 23.9776C18.3268 24.056 18.4908 24.0919 18.6552 24.0811C18.8195 24.0703 18.9774 24.0133 19.1107 23.9165C19.2439 23.8197 19.3471 23.6873 19.4083 23.5344C19.4694 23.3814 19.4861 23.2144 19.4563 23.0524L19.0374 20.5823L20.8266 18.8367C20.9481 18.7252 21.0356 18.5816 21.0788 18.4225C21.1221 18.2634 21.1194 18.0953 21.071 17.9377ZM17.5099 19.6833C17.4105 19.7823 17.3363 19.9037 17.2938 20.0374C17.2512 20.1712 17.2415 20.3131 17.2655 20.4514L17.4663 21.6384L16.4014 21.0798C16.2763 21.0141 16.137 20.9797 15.9956 20.9797C15.8542 20.9797 15.7149 21.0141 15.5897 21.0798L14.5336 21.6384L14.7344 20.4514C14.7573 20.3124 14.7462 20.17 14.7021 20.0363C14.6581 19.9025 14.5823 19.7814 14.4812 19.6833L13.6084 18.8105L14.7955 18.6359C14.9344 18.6158 15.0665 18.5625 15.1805 18.4804C15.2944 18.3984 15.3869 18.29 15.4501 18.1646L15.965 17.0998L16.4887 18.1733C16.5527 18.2999 16.6465 18.4089 16.7621 18.491C16.8777 18.5731 17.0115 18.6259 17.1521 18.6447L18.3304 18.8192L17.5099 19.6833Z',
                fill: '#242E30'
            }
        })]);
    }
};