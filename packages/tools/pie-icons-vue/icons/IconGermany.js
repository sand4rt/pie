import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGermany',
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
            class: 'c-pieIcon c-pieIcon--germany'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1.43763 10.4351C1.93497 11.775 2.83044 12.9306 4.00376 13.7466C5.17708 14.5626 6.57204 15 8.00122 15C9.43041 15 10.8254 14.5626 11.9987 13.7466C13.172 12.9306 14.0675 11.775 14.5648 10.4351L8.00122 9.828L1.43763 10.4351Z',
                fill: '#FFDA44'
            }
        }), h('path', {
            attrs: {
                d: 'M8.00122 1C6.57176 1.00017 5.17661 1.4379 4.00326 2.25436C2.82991 3.07082 1.93459 4.22687 1.43763 5.56717L8.00122 6.1743L14.5648 5.56717C14.0679 4.22687 13.1725 3.07082 11.9992 2.25436C10.8258 1.4379 9.43069 1.00017 8.00122 1Z',
                fill: '#333333'
            }
        }), h('path', {
            attrs: {
                d: 'M1.43763 5.56717C0.854123 7.13738 0.854123 8.86493 1.43763 10.4351H14.5648C15.1486 8.86497 15.1486 7.13733 14.5648 5.56717H1.43763Z',
                fill: '#D80027'
            }
        })]);
    }
};