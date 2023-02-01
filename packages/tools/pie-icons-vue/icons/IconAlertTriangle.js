import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAlertTriangle',
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
            class: 'c-pieIcon c-pieIcon--alertTriangle'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.65626 5.375H7.34376V8H8.65626V5.375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8.00001 10.625C8.48325 10.625 8.87501 10.2332 8.87501 9.75C8.87501 9.26675 8.48325 8.875 8.00001 8.875C7.51676 8.875 7.12501 9.26675 7.12501 9.75C7.12501 10.2332 7.51676 10.625 8.00001 10.625Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M13.4075 13.0312H2.5925C2.31924 13.0326 2.05081 12.9592 1.81635 12.8188C1.58189 12.6784 1.39035 12.4765 1.2625 12.235C1.12604 11.987 1.05815 11.707 1.06584 11.4241C1.07353 11.1411 1.15652 10.8653 1.30625 10.625L6.71375 1.9625C6.84548 1.73783 7.03324 1.5512 7.2587 1.42083C7.48415 1.29047 7.73958 1.22084 8 1.21875C8.25875 1.21903 8.51305 1.28601 8.73836 1.41322C8.96367 1.54044 9.15237 1.72359 9.28625 1.945L14.6938 10.625C14.8401 10.8712 14.9174 11.1523 14.9174 11.4388C14.9174 11.7252 14.8401 12.0063 14.6938 12.2525C14.5672 12.4843 14.3815 12.6784 14.1556 12.8152C13.9296 12.952 13.6716 13.0265 13.4075 13.0312ZM8 2.53125C7.96393 2.53059 7.92839 2.54008 7.89745 2.55865C7.8665 2.57722 7.8414 2.6041 7.82501 2.63625L2.4175 11.3075C2.39139 11.3527 2.37765 11.404 2.37765 11.4562C2.37765 11.5085 2.39139 11.5598 2.4175 11.605C2.43414 11.6395 2.46027 11.6685 2.49282 11.6886C2.52536 11.7088 2.56298 11.7192 2.60125 11.7187H13.4075C13.4458 11.7192 13.4834 11.7088 13.5159 11.6886C13.5485 11.6685 13.5746 11.6395 13.5913 11.605C13.6174 11.5598 13.6311 11.5085 13.6311 11.4562C13.6311 11.404 13.6174 11.3527 13.5913 11.3075L8.175 2.63625C8.15861 2.6041 8.13351 2.57722 8.10256 2.55865C8.07162 2.54008 8.03608 2.53059 8 2.53125Z',
                fill: '#242E30'
            }
        })]);
    }
};