import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'NotificationsOffIcon',
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
      "class": "c-pieIcon c-pieIcon--notificationsOff"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M25.375 19.7663L24.6925 19.0837C23.7926 18.1889 23.0799 17.1237 22.5962 15.9504C22.1124 14.777 21.8673 13.5191 21.875 12.25V11.375C21.8741 9.43857 21.1597 7.57037 19.8684 6.12735C18.5771 4.68432 16.7994 3.76766 14.875 3.5525V0.875H13.125V3.5525C11.8599 3.70872 10.6554 4.1845 9.625 4.935L7.14875 0.875H5.10125L8.25125 6.125C6.88513 7.66062 6.12874 9.64341 6.125 11.6987V12.25C6.12926 13.5147 5.88241 14.7677 5.39876 15.9362C4.91511 17.1048 4.20428 18.1657 3.3075 19.0575L2.625 19.7663V22.75H9.49375C9.53415 23.8817 9.99998 24.9565 10.7982 25.7598C11.5964 26.563 12.6683 27.0356 13.7997 27.0831C14.9311 27.1306 16.0388 26.7496 16.9016 26.0161C17.7643 25.2825 18.3186 24.2506 18.4538 23.1263L20.8512 27.125H22.8988L20.2738 22.75H25.375V19.7663ZM14 25.375C13.2903 25.3759 12.6074 25.1039 12.0927 24.6153C11.578 24.1266 11.2709 23.4588 11.235 22.75H16.765C16.7291 23.4588 16.422 24.1266 15.9073 24.6153C15.3926 25.1039 14.7097 25.3759 14 25.375ZM9.7125 21H4.375V20.4837L4.54125 20.3175C5.60509 19.2617 6.44784 18.0045 7.02024 16.6193C7.59264 15.2342 7.88322 13.7488 7.875 12.25V11.6725C7.87626 10.2338 8.34281 8.83418 9.205 7.6825L17.1762 21H9.7125ZM23.625 21H19.25L10.5 6.43125C11.3354 5.77926 12.3346 5.37051 13.3875 5.25C14.2398 5.16012 15.1014 5.25165 15.9158 5.51859C16.7302 5.78552 17.4788 6.2218 18.1125 6.79875C18.7509 7.37712 19.2601 8.08366 19.6069 8.8722C19.9537 9.66075 20.1302 10.5136 20.125 11.375V12.25C20.1203 13.7444 20.4125 15.2248 20.9848 16.6052C21.5571 17.9856 22.3981 19.2386 23.4587 20.2913L23.625 20.4575V21Z"
      }
    })]);
  }

};