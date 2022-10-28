import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'DashboardIcon',
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
      "class": "c-pieIcon c-pieIcon--dashboard"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M27.0726 16.625C27.0712 18.4333 26.6928 20.2213 25.9613 21.875H24.0276C24.9086 20.1991 25.3536 18.3284 25.3215 16.4353C25.2894 14.5422 24.7812 12.6876 23.8438 11.0425L25.0513 9.66878C26.3695 11.7496 27.0704 14.1618 27.0726 16.625ZM13.9476 5.25003C16.194 5.24879 18.3901 5.91583 20.2563 7.16628L21.4113 5.84503C19.0642 4.22871 16.2547 3.42024 13.4075 3.5418C10.5602 3.66335 7.82991 4.70832 5.62906 6.5188C3.42821 8.32929 1.87644 10.8069 1.20821 13.5773C0.539975 16.3477 0.7916 19.2603 1.92506 21.875H3.85881C2.95685 20.1414 2.51675 18.2046 2.58094 16.2514C2.64513 14.2982 3.21145 12.3945 4.2253 10.7238C5.23914 9.0531 6.66632 7.67179 8.36922 6.71303C10.0721 5.75428 11.9933 5.25042 13.9476 5.25003ZM17.3338 10.5L18.5151 9.15253C17.1881 8.34044 15.6687 7.89682 14.1132 7.86737C12.5578 7.83792 11.0226 8.2237 9.66587 8.98497C8.30913 9.74624 7.17989 10.8555 6.39449 12.1984C5.60908 13.5413 5.19592 15.0693 5.19756 16.625H6.94756C6.94781 15.4075 7.26564 14.211 7.86965 13.1539C8.47367 12.0967 9.34299 11.2153 10.3918 10.5969C11.4405 9.97837 12.6325 9.64414 13.8499 9.62716C15.0674 9.61017 16.2682 9.91104 17.3338 10.5ZM16.8263 16.3888C17.2704 17.0331 17.4858 17.8077 17.438 18.5888C17.3902 19.3699 17.082 20.1125 16.5626 20.6979C16.0432 21.2833 15.3426 21.6777 14.5728 21.8182C13.8029 21.9587 13.0082 21.8371 12.3156 21.4729C11.6229 21.1086 11.0723 20.5228 10.7517 19.8089C10.4311 19.095 10.359 18.2943 10.5469 17.5346C10.7348 16.7749 11.1719 16.1002 11.7883 15.6181C12.4048 15.136 13.165 14.8743 13.9476 14.875C14.4895 14.881 15.0227 15.0128 15.5051 15.26L24.0713 5.47753L25.3751 6.62378L16.8263 16.3888ZM15.6976 18.375C15.6976 18.0289 15.5949 17.6906 15.4026 17.4028C15.2103 17.115 14.937 16.8907 14.6173 16.7582C14.2975 16.6258 13.9456 16.5911 13.6062 16.6587C13.2667 16.7262 12.9549 16.8929 12.7101 17.1376C12.4654 17.3823 12.2987 17.6942 12.2312 18.0336C12.1637 18.3731 12.1983 18.725 12.3308 19.0447C12.4632 19.3645 12.6875 19.6378 12.9753 19.8301C13.2631 20.0224 13.6014 20.125 13.9476 20.125C14.4117 20.125 14.8568 19.9407 15.185 19.6125C15.5132 19.2843 15.6976 18.8392 15.6976 18.375Z"
      }
    })]);
  }

};