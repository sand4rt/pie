import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'FlagRomaniaIcon',
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
      "class": "c-pieIcon c-pieIcon--flagRomania"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M6.99744 1.68893e-09C6.14158 1.68893e-09 5.32126 0.153125 4.56384 0.4375L0.24353 7L4.56384 13.5625C5.34256 13.8519 6.16667 14.0001 6.99744 14C7.8533 14 8.67361 13.8469 9.43103 13.5625L13.7513 7L9.43103 0.4375C8.6523 0.148135 7.82819 -1.82652e-05 6.99744 1.68893e-09Z",
        "fill": "#FFDA44"
      }
    }), h("path", {
      "attrs": {
        "d": "M13.9974 7C13.9973 5.57078 13.5596 4.17586 12.7433 3.0027C11.927 1.82955 10.7711 0.934378 9.43103 0.4375V13.5625C10.7711 13.0656 11.927 12.1705 12.7433 10.9973C13.5596 9.82414 13.9973 8.42922 13.9974 7Z",
        "fill": "#D80027"
      }
    }), h("path", {
      "attrs": {
        "d": "M4.56384 13.5625V0.4375C3.2242 0.934753 2.06909 1.83008 1.25321 3.00321C0.437319 4.17633 0 5.57105 0 7C0 8.42895 0.437319 9.82367 1.25321 10.9968C2.06909 12.1699 3.2242 13.0652 4.56384 13.5625Z",
        "fill": "#0052B4"
      }
    })]);
  }

};