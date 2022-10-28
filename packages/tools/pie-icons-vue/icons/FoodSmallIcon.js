import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'FoodSmallIcon',
  props: {},
  functional: true,

  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 14 14"
      },
      "class": "c-pieIcon c-pieIcon--foodSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M0.9625 9.7125C0.685862 9.50387 0.346335 9.39584 0 9.40625V8.09375C0.591255 8.0823 1.17069 8.26012 1.65375 8.60125C1.93435 8.80867 2.27617 8.91646 2.625 8.9075C2.97114 8.91653 3.31022 8.80864 3.5875 8.60125C4.07352 8.25945 4.65594 8.08165 5.25 8.09375C5.84414 8.08104 6.42675 8.25889 6.9125 8.60125C7.1901 8.80802 7.52896 8.91584 7.875 8.9075C8.22114 8.91653 8.56022 8.80864 8.8375 8.60125C9.32459 8.26164 9.90628 8.08407 10.5 8.09375V9.40625C10.1512 9.39729 9.80935 9.50508 9.52875 9.7125C9.04569 10.0536 8.46626 10.2315 7.875 10.22C7.28103 10.2315 6.69879 10.0538 6.2125 9.7125C5.9349 9.50573 5.59604 9.39791 5.25 9.40625C4.90386 9.39723 4.56478 9.50512 4.2875 9.7125C3.80202 10.0554 3.21923 10.2333 2.625 10.22C2.03103 10.2315 1.4488 10.0538 0.9625 9.7125V9.7125ZM11.1562 1.96875V0H9.84375V1.96875H6.69375L6.97375 4.59375C6.41248 4.43929 5.83206 4.36563 5.25 4.375C2.8875 4.375 0.97125 5.6 0.67375 7.28L1.96875 7.5075C2.1525 6.48375 3.57875 5.6875 5.25 5.6875C6.92125 5.6875 8.33875 6.48375 8.51375 7.5075L9.80875 7.28C9.72121 6.86032 9.54775 6.4633 9.29928 6.11394C9.05081 5.76457 8.73271 5.47042 8.365 5.25L8.155 3.28125H12.53L11.8125 11.375C11.8081 11.4299 11.7831 11.4812 11.7426 11.5185C11.702 11.5558 11.6489 11.5764 11.5938 11.5763H9.765C9.80469 11.345 9.82518 11.1109 9.82625 10.8763H8.51375C8.51375 11.8913 8.51375 12.4513 5.2325 12.4513C1.95125 12.4513 1.95125 11.8913 1.95125 10.8763H0.63875C0.63875 13.3175 2.1875 13.7638 5.2325 13.7638C7.11375 13.7638 8.4175 13.5888 9.14375 12.8888H11.5938C11.9751 12.8948 12.3447 12.7566 12.6286 12.502C12.9125 12.2473 13.0898 11.8948 13.125 11.515L14 1.96875H11.1562Z"
      }
    })]);
  }

};