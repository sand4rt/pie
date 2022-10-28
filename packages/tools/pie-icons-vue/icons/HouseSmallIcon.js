import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'HouseSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--houseSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14.0437 7.07006C13.8862 6.90381 10.2288 2.89631 7.91875 1.34756C7.64679 1.18704 7.33646 1.10309 7.02067 1.10464C6.70487 1.10618 6.39538 1.19314 6.125 1.35631C3.77125 2.89631 0.11375 6.90381 0 7.07006L0.97125 7.94506C0.97125 7.94506 1.4 7.49006 2.0125 6.84256V12.8976H12.075V6.85131C12.6875 7.49881 13.0988 7.94506 13.1163 7.95381L14.0437 7.07006ZM7.875 11.5938V9.62506C7.875 9.393 7.78281 9.17044 7.61872 9.00634C7.45462 8.84225 7.23206 8.75006 7 8.75006C6.76794 8.75006 6.54538 8.84225 6.38128 9.00634C6.21719 9.17044 6.125 9.393 6.125 9.62506V11.5938H3.28125V5.52131C4.36144 4.40568 5.53211 3.38135 6.78125 2.45881C6.84098 2.4288 6.9069 2.41317 6.97375 2.41317C7.0406 2.41317 7.10652 2.4288 7.16625 2.45881C8.41521 3.38479 9.58583 4.41201 10.6662 5.53006V11.6026L7.875 11.5938Z"
      }
    })]);
  }

};