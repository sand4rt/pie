import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'MinusSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--minusSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13.125 6.34375H7.65625H6.34375H0.875V7.65625H6.34375H7.65625H13.125V6.34375Z"
      }
    })]);
  }

};