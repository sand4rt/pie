import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserMarkerLarge',
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
            class: 'c-pieIcon c-pieIcon--userMarkerLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 15.125C16.6922 15.125 17.3689 14.9197 17.9445 14.5351C18.5201 14.1506 18.9687 13.6039 19.2336 12.9644C19.4985 12.3249 19.5678 11.6211 19.4327 10.9422C19.2977 10.2633 18.9644 9.63961 18.4749 9.15013C17.9854 8.66064 17.3617 8.3273 16.6828 8.19225C16.0039 8.0572 15.3001 8.12651 14.6606 8.39142C14.0211 8.65633 13.4744 9.10493 13.0899 9.6805C12.7053 10.2561 12.5 10.9328 12.5 11.625C12.5 12.5533 12.8687 13.4435 13.5251 14.0999C14.1815 14.7563 15.0717 15.125 16 15.125ZM16 9.875C16.3461 9.875 16.6845 9.97764 16.9722 10.1699C17.26 10.3622 17.4843 10.6355 17.6168 10.9553C17.7492 11.2751 17.7839 11.6269 17.7164 11.9664C17.6489 12.3059 17.4822 12.6177 17.2374 12.8624C16.9927 13.1072 16.6809 13.2739 16.3414 13.3414C16.0019 13.4089 15.6501 13.3742 15.3303 13.2418C15.0105 13.1093 14.7372 12.885 14.5449 12.5972C14.3526 12.3095 14.25 11.9711 14.25 11.625C14.25 11.1609 14.4344 10.7158 14.7626 10.3876C15.0908 10.0594 15.5359 9.875 16 9.875ZM21.25 18.4413L21.9412 20.375H20.0688L19.57 19.0625C19.39 18.6543 19.0904 18.3103 18.7107 18.076C18.3311 17.8417 17.8893 17.728 17.4437 17.75H14.9325C14.4869 17.728 14.0451 17.8417 13.6655 18.076C13.2859 18.3103 12.9863 18.6543 12.8063 19.0625L12.3075 20.375H10.435L11.1613 18.4413C11.47 17.7013 11.9955 17.0721 12.6686 16.6363C13.3417 16.2006 14.131 15.9788 14.9325 16H17.4437C18.2512 15.9716 19.0481 16.19 19.7281 16.6262C20.4082 17.0624 20.9391 17.6956 21.25 18.4413ZM26.5 4.625H5.5C4.80381 4.625 4.13613 4.90156 3.64384 5.39384C3.15156 5.88613 2.875 6.55381 2.875 7.25V22.125C2.875 22.8212 3.15156 23.4889 3.64384 23.9812C4.13613 24.4734 4.80381 24.75 5.5 24.75H12.1413L16 28.6087L19.8587 24.75H26.5C27.1962 24.75 27.8639 24.4734 28.3562 23.9812C28.8484 23.4889 29.125 22.8212 29.125 22.125V7.25C29.125 6.55381 28.8484 5.88613 28.3562 5.39384C27.8639 4.90156 27.1962 4.625 26.5 4.625ZM27.375 22.125C27.375 22.3571 27.2828 22.5796 27.1187 22.7437C26.9546 22.9078 26.7321 23 26.5 23H19.1413L16 26.1413L12.8587 23H5.5C5.26794 23 5.04538 22.9078 4.88128 22.7437C4.71719 22.5796 4.625 22.3571 4.625 22.125V7.25C4.625 7.01794 4.71719 6.79538 4.88128 6.63128C5.04538 6.46719 5.26794 6.375 5.5 6.375H26.5C26.7321 6.375 26.9546 6.46719 27.1187 6.63128C27.2828 6.79538 27.375 7.01794 27.375 7.25V22.125Z',
                fill: '#242E30'
            }
        })]);
    }
};