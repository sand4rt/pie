import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'VoucherSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--voucherSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M9.21375 7C8.71299 7.19801 8.25817 7.49663 7.8774 7.8774C7.49663 8.25817 7.19801 8.71299 7 9.21375C6.80199 8.71299 6.50337 8.25817 6.1226 7.8774C5.74183 7.49663 5.28701 7.19801 4.78625 7C5.28701 6.80199 5.74183 6.50337 6.1226 6.1226C6.50337 5.74183 6.80199 5.28701 7 4.78625C7.19801 5.28701 7.49663 5.74183 7.8774 6.1226C8.25817 6.50337 8.71299 6.80199 9.21375 7ZM13.7812 3.57875V10.4212L12.1712 12.0312H1.82875L0.21875 10.4212V3.57875L1.82875 1.96875H12.1712L13.7812 3.57875ZM12.4688 4.13L11.5938 3.255H2.38L1.505 4.13V9.87L2.38 10.745H11.62L12.495 9.87L12.4688 4.13Z"
      }
    })]);
  }

};