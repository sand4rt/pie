import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconFlagNewZealand',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--newZealand', 'IconFlagNewZealand');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#0052B4',
                d: 'M15 8A7 7 0 1 1 1 8l7-7a7 7 0 0 1 7 7Z',
            },
        }), h('path', {
            attrs: {
                fill: '#EEE',
                d: 'M8 1a7 7 0 0 0-7 7h3.653V5.944L6.71 8H8V6.71L5.944 4.652H8V1Zm3.44 2.502-.31.957h-1.003l.813.585-.31.957.81-.593.812.59-.315-.951.813-.588h-1.004l-.309-.954.003-.003Zm1.676 1.982-.309.957h-1.004l.813.586-.31.957.81-.594.812.59-.312-.953.813-.588h-1.004l-.309-.955Zm-3.358.282-.309.954H8.446l.812.588-.31.954.81-.59.812.59-.311-.957.812-.587h-1.004l-.309-.952Zm1.616 3.546-.309.955h-1.003l.812.588-.31.954.81-.59.812.59-.311-.957.812-.588h-1.004l-.309-.951Z',
            },
        }), h('path', {
            attrs: {
                fill: '#D80027',
                d: 'M4.54 1.913a7.033 7.033 0 0 0-2.627 2.628V8H3.74V3.74H8V1.913H4.54Zm6.9 2.28-.153.476h-.504l.408.296-.156.476.405-.296.407.296-.156-.476.405-.296h-.5l-.156-.475Zm-6.787.46L8 8v-.861L5.51 4.65h-.858v.003Zm8.46 1.523-.153.476h-.503l.407.295-.156.476.405-.295.41.298-.156-.476.405-.295h-.5l-.156-.476-.003-.003Zm-3.358.279-.153.479H9.1l.407.292-.155.479.404-.296.408.296-.156-.479.405-.292h-.498l-.156-.479h-.003Zm1.616 3.546-.153.479h-.503l.407.293-.155.478.404-.295.405.295-.153-.478.405-.293h-.5l-.157-.479Z',
            },
        })]);
    },
};
