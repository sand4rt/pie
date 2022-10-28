import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SocialAppleFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--socialAppleFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14 1.75C11.5772 1.75 9.20877 2.46845 7.19427 3.8145C5.17977 5.16054 3.60965 7.07373 2.68248 9.31213C1.75531 11.5505 1.51272 14.0136 1.98539 16.3899C2.45805 18.7661 3.62475 20.9489 5.33795 22.6621C7.05114 24.3753 9.23388 25.542 11.6101 26.0146C13.9864 26.4873 16.4495 26.2447 18.6879 25.3175C20.9263 24.3904 22.8395 22.8202 24.1855 20.8057C25.5316 18.7912 26.25 16.4228 26.25 14C26.25 10.7511 24.9594 7.63526 22.6621 5.33794C20.3647 3.04062 17.2489 1.75 14 1.75V1.75ZM14 9.38875C14.0951 8.70445 14.3977 8.06577 14.8671 7.55883C15.3365 7.0519 15.95 6.7011 16.625 6.55375C16.73 6.55375 16.835 6.55375 16.94 6.55375C17.0111 7.08658 16.9228 7.62854 16.6863 8.11125C16.5091 8.57113 16.2204 8.97979 15.8463 9.30052C15.4721 9.62125 15.0241 9.844 14.5425 9.94875C13.8775 10.0712 13.895 10.08 14 9.38875ZM20.125 17.5C20.0886 17.5637 20.0592 17.6312 20.0375 17.7012C19.6244 18.8723 18.9684 19.9428 18.1125 20.8425C17.7944 21.169 17.3769 21.3805 16.9255 21.4439C16.4741 21.5072 16.0144 21.4188 15.6188 21.1925C15.2197 20.9621 14.767 20.8408 14.3063 20.8408C13.8455 20.8408 13.3928 20.9621 12.9938 21.1925C12.6065 21.3972 12.1713 21.4939 11.7338 21.4725C11.4726 21.4486 11.2195 21.3691 10.9916 21.2393C10.7637 21.1095 10.5663 20.9325 10.4125 20.72C8.77609 19.0074 7.86665 16.7275 7.87501 14.3587C7.87977 13.693 8.01968 13.0351 8.28626 12.425C8.46312 11.9691 8.73355 11.5553 9.08013 11.2103C9.4267 10.8653 9.84173 10.5968 10.2984 10.422C10.7552 10.2472 11.2434 10.1701 11.7318 10.1956C12.2201 10.2211 12.6977 10.3486 13.1338 10.57C13.4171 10.7336 13.7385 10.8197 14.0656 10.8197C14.3928 10.8197 14.7142 10.7336 14.9975 10.57C15.2987 10.4145 15.6154 10.2913 15.9425 10.2025C16.7283 10.0506 17.5416 10.1359 18.2788 10.4475C18.8511 10.6764 19.3312 11.0888 19.6438 11.62C19.4338 11.8037 19.2325 11.97 19.04 12.1625C18.8105 12.3508 18.61 12.5719 18.445 12.8187C18.1038 13.4282 17.9649 14.1302 18.0483 14.8237C18.1316 15.5171 18.4329 16.1662 18.9088 16.6775C19.225 17.0648 19.6478 17.3507 20.125 17.5V17.5Z"
      }
    })]);
  }

};