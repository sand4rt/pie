import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CheckCircleFilledIcon',
  props: {},
  functional: true,

  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 28 28"
      },
      "class": "c-pieIcon c-pieIcon--checkCircleFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M24.5002 7.71753L14.219 18.6638C14.0501 18.8485 13.8447 18.996 13.6157 19.0969C13.3867 19.1978 13.1392 19.25 12.889 19.25C12.6396 19.2495 12.393 19.198 12.1643 19.0987C11.9356 18.9994 11.7296 18.8544 11.559 18.6725L7.80523 14.455L9.11773 13.2913L12.8452 17.5H12.9415L23.4415 6.27378C21.6017 4.04859 19.0351 2.54476 16.1945 2.02764C13.354 1.51052 10.422 2.01334 7.91611 3.44739C5.41018 4.88144 3.49131 7.15454 2.4981 9.86558C1.50489 12.5766 1.50119 15.5514 2.48764 18.2649C3.47409 20.9784 5.38729 23.2562 7.88964 24.6965C10.392 26.1368 13.3227 26.6469 16.1645 26.1369C19.0063 25.6269 21.5767 24.1294 23.422 21.9088C25.2673 19.6882 26.269 16.8872 26.2502 14C26.2533 11.7851 25.6479 9.6119 24.5002 7.71753Z"
      }
    })]);
  }

};