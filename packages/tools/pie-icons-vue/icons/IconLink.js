import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLink',
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
            class: 'c-pieIcon c-pieIcon--link'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.53118 8.4375C2.52098 7.57683 2.8331 6.74346 3.40618 6.10125C3.66592 5.80672 3.98488 5.57031 4.34222 5.40747C4.69956 5.24463 5.08725 5.15903 5.47993 5.15625H7.12493V3.84375H5.47993C4.90674 3.84761 4.34066 3.97101 3.81785 4.20604C3.29505 4.44108 2.82702 4.78259 2.44368 5.20875C1.64997 6.09639 1.21351 7.24676 1.21868 8.4375C1.17842 9.61072 1.6039 10.7522 2.40225 11.6129C3.2006 12.4735 4.30699 12.9834 5.47993 13.0312H7.12493V11.7188H5.47993C4.65502 11.6713 3.88228 11.2998 3.32999 10.6852C2.77769 10.0707 2.49058 9.26277 2.53118 8.4375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.5199 3.84375H8.87492V5.15625H10.5199C11.3448 5.20372 12.1176 5.57519 12.6699 6.18976C13.2222 6.80433 13.5093 7.61223 13.4687 8.4375C13.4789 9.29817 13.1668 10.1315 12.5937 10.7738C12.3349 11.0672 12.0174 11.303 11.6616 11.4658C11.3059 11.6286 10.9199 11.7147 10.5287 11.7188H8.87492V13.0312H10.5199C11.0931 13.0274 11.6592 12.904 12.182 12.669C12.7048 12.4339 13.1728 12.0924 13.5562 11.6662C14.3499 10.7786 14.7863 9.62824 14.7812 8.4375C14.8214 7.26428 14.396 6.12276 13.5976 5.26212C12.7993 4.40148 11.6929 3.89159 10.5199 3.84375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.47117 9.09375H10.5287L11.1324 7.78125H4.86742L5.47117 9.09375Z',
                fill: '#242E30'
            }
        })]);
    }
};