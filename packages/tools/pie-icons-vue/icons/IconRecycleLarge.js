import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRecycleLarge',
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
            class: 'c-pieIcon c-pieIcon--recycleLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.3636 24.33C28.1465 24.7242 27.827 25.0525 27.439 25.2804C27.0509 25.5083 26.6086 25.6273 26.1586 25.625H19.0711L21.5123 28.04L20.2786 29.2825L15.6936 24.75L20.2786 20.2087L21.5123 21.4512L19.0711 23.875H26.1586C26.2994 23.8767 26.4381 23.8401 26.5598 23.7693C26.6816 23.6984 26.7818 23.5958 26.8498 23.4725C26.9167 23.3568 26.9518 23.2255 26.9518 23.0919C26.9518 22.9582 26.9167 22.827 26.8498 22.7112L23.8748 17.75L25.3798 16.875L28.3373 21.8712C28.5555 22.2433 28.6726 22.6659 28.6772 23.0971C28.6818 23.5284 28.5737 23.9534 28.3636 24.33ZM16.8748 5.82373L20.3748 11.7912L16.9361 10.7937L16.4461 12.5L22.6586 14.25L24.4786 8.12498L22.7986 7.62623L21.8448 10.8375L18.3448 4.93123C18.1174 4.55444 17.7966 4.24277 17.4133 4.02643C17.0301 3.81009 16.5974 3.69641 16.1573 3.69641C15.7173 3.69641 15.2846 3.81009 14.9014 4.02643C14.5181 4.24277 14.1972 4.55444 13.9698 4.93123L11.1873 9.63873L12.6923 10.5137L15.4748 5.82373C15.5468 5.70607 15.6477 5.60885 15.768 5.5414C15.8882 5.47395 16.0238 5.43853 16.1617 5.43853C16.2996 5.43853 16.4352 5.47395 16.5555 5.5414C16.6758 5.60885 16.7767 5.70607 16.8486 5.82373H16.8748ZM9.31485 16.3237L10.3736 19.6925L12.0448 19.1587L10.1198 13.0337L3.9161 14.9062L4.43235 16.5862L7.66985 15.58L3.97735 21.81C3.7518 22.1916 3.63281 22.6267 3.63281 23.07C3.63281 23.5133 3.7518 23.9484 3.97735 24.33C4.1952 24.7216 4.51356 25.0481 4.89961 25.2757C5.28566 25.5034 5.72543 25.6239 6.1736 25.625H11.9398V23.875H6.1736C6.03443 23.8746 5.89804 23.836 5.77925 23.7635C5.66047 23.691 5.56383 23.5873 5.49985 23.4637C5.43035 23.3489 5.39361 23.2173 5.39361 23.0831C5.39361 22.9489 5.43035 22.8173 5.49985 22.7025L9.31485 16.3237Z',
                fill: '#242E30'
            }
        })]);
    }
};