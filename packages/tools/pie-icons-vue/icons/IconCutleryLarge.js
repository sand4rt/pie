import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCutleryLarge',
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
            class: 'c-pieIcon c-pieIcon--cutleryLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.3912 21.25L27.2175 21.7137C27.1212 24.0412 26.99 25.3625 26.8675 26.5175H28.6175C28.7487 25.2487 28.8975 23.7525 28.9937 20.9962C29.1823 16.7072 29.156 12.4114 28.915 8.125C28.7575 6.66375 28.4337 5.92 27.795 5.64875C27.4427 5.51111 27.0535 5.50045 26.6942 5.61861C26.3349 5.73678 26.028 5.97638 25.8262 6.29625C25.695 6.48 22.5362 11.0562 23.0525 19.5175C23.0453 19.9155 23.1741 20.304 23.4174 20.619C23.6608 20.9339 24.0043 21.1565 24.3912 21.25ZM27.0775 7.6C27.1227 7.83721 27.1548 8.07674 27.1737 8.3175C27.4625 12.1762 27.3837 16.9275 27.2875 19.9287C26.4125 19.7887 25.2837 19.6137 24.82 19.5262C24.8151 19.4914 24.8151 19.4561 24.82 19.4212C24.4 12.8587 26.3775 8.79875 27.0775 7.6Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M14.25 5.75375H14.0837L12.5 6.515V13.375C12.5 15.5013 14.3287 16.7788 16 17.12V26.5H17.75V17.1025C19.43 16.7613 21.25 15.4838 21.25 13.3488V5.71L19.5 6.585V13.375C19.5 14.8713 17.645 15.4663 16.875 15.4663C16.105 15.4663 14.25 14.8713 14.25 13.375V5.75375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M17.7587 5.6925L16.0087 6.5325V13.375H17.7587V5.6925Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.49995 15.8862V26.5H7.24995V15.8862C8.2246 15.5419 9.06158 14.8913 9.6357 14.0317C10.2098 13.1721 10.4902 12.1497 10.435 11.1175V10.3825C10.435 7.6875 8.61495 5.5 6.37495 5.5C4.13495 5.5 2.31495 7.6875 2.31495 10.3825V11.1175C2.25969 12.1497 2.54009 13.1721 3.11421 14.0317C3.68832 14.8913 4.5253 15.5419 5.49995 15.8862ZM4.06495 10.3825C4.06495 8.65875 5.1062 7.25 6.37495 7.25C7.6437 7.25 8.68495 8.65875 8.68495 10.3825V11.1175C8.68495 12.8412 7.6437 14.25 6.37495 14.25C5.1062 14.25 4.06495 12.8412 4.06495 11.1175V10.3825Z',
                fill: '#242E30'
            }
        })]);
    }
};