import * as React from "react";
import { SVGProps } from "react";

const KebabBowlSmall = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="c-pieIcon c-pieIcon--kebabBowlSmall" width="1em" height="1em" role="img" {...props}><path d="M13.7113 6.88629L13.615 6.34379H13.3438C13.6677 5.76965 13.8082 5.11011 13.7463 4.45379C13.716 4.27256 13.6463 4.10021 13.5419 3.94898C13.4376 3.79775 13.3012 3.67136 13.1425 3.57879C12.8627 3.45151 12.5478 3.42372 12.25 3.50004C12.2461 3.27233 12.2017 3.04714 12.1188 2.83504C12.0494 2.65396 11.9403 2.49076 11.7994 2.35749C11.6586 2.22422 11.4896 2.12427 11.305 2.06504C11.001 1.98161 10.6791 1.9903 10.38 2.08999C10.0809 2.18968 9.81815 2.37589 9.625 2.62504C9.51439 2.50626 9.37796 2.41449 9.22624 2.35684C9.07452 2.29918 8.91158 2.27718 8.75 2.29254C8.16375 2.29254 7.6825 2.81754 7.315 3.74504C7.20143 3.73597 7.08732 3.73597 6.97375 3.74504C6.85724 3.73642 6.74026 3.73642 6.62375 3.74504C6.27375 2.87004 5.80125 2.38879 5.22375 2.35379C5.06255 2.34282 4.90088 2.36685 4.74985 2.42424C4.59881 2.48164 4.46198 2.57103 4.34875 2.68629C4.1734 2.4253 3.92355 2.22313 3.63172 2.10609C3.3399 1.98905 3.0196 1.96255 2.7125 2.03004C2.52697 2.08753 2.35712 2.18686 2.21603 2.32036C2.07495 2.45386 1.9664 2.61797 1.89875 2.80004C1.80863 3.02288 1.75829 3.2598 1.75 3.50004C1.5891 3.46395 1.42266 3.46002 1.26024 3.48847C1.09782 3.51692 0.942629 3.5772 0.803582 3.66583C0.664535 3.75446 0.544378 3.8697 0.450018 4.00493C0.355659 4.14015 0.288958 4.2927 0.25375 4.45379C0.191825 5.11011 0.332284 5.76965 0.65625 6.34379H0.385L0.28875 6.88629C0.242084 7.17562 0.218675 7.46822 0.21875 7.76129C0.21875 11.0775 3.26375 13.7725 7 13.7725C10.7362 13.7725 13.7812 11.0775 13.7812 7.76129C13.7813 7.46822 13.7579 7.17562 13.7113 6.88629V6.88629ZM8.82875 3.71879C8.89596 3.82948 8.95166 3.94676 8.995 4.06879C9.03988 4.18671 9.11868 4.2887 9.22146 4.36189C9.32423 4.43508 9.44638 4.47619 9.5725 4.48004C9.69844 4.48638 9.82348 4.4558 9.93229 4.39207C10.0411 4.32834 10.1289 4.23423 10.185 4.12129C10.3472 3.78166 10.5834 3.48268 10.8763 3.24629C10.9453 3.56431 10.921 3.89551 10.8063 4.20004C10.7356 4.31793 10.7043 4.45524 10.7169 4.5921C10.7295 4.72895 10.7853 4.85825 10.8763 4.96129C10.9854 5.08158 11.1353 5.15711 11.2969 5.17327C11.4586 5.18943 11.6204 5.14508 11.7513 5.04879C11.9666 4.90989 12.1953 4.79266 12.4338 4.69879C12.3873 5.28822 12.1749 5.85246 11.8213 6.32629H9.89625C9.86098 5.88869 9.72394 5.4654 9.49607 5.09016C9.26819 4.71492 8.95578 4.39812 8.58375 4.16504C8.65077 4.0087 8.73282 3.85925 8.82875 3.71879V3.71879ZM8.58375 6.34379H5.41625C5.48401 5.97316 5.67961 5.63803 5.969 5.39675C6.25838 5.15547 6.62323 5.02333 7 5.02333C7.37677 5.02333 7.74162 5.15547 8.031 5.39675C8.32039 5.63803 8.51599 5.97316 8.58375 6.34379V6.34379ZM1.53125 4.77754C1.77571 4.85532 2.004 4.97688 2.205 5.13629C2.31863 5.22601 2.45875 5.27564 2.60352 5.27744C2.7483 5.27924 2.88961 5.23311 3.00544 5.14624C3.12126 5.05937 3.20511 4.93663 3.24392 4.79714C3.28273 4.65766 3.27432 4.50925 3.22 4.37504C3.09995 4.0296 3.0494 3.66384 3.07125 3.29879C3.39151 3.51792 3.64569 3.82052 3.80625 4.17379C3.86305 4.28929 3.95174 4.38611 4.06184 4.45279C4.17193 4.51947 4.29883 4.55322 4.4275 4.55004C4.55555 4.54492 4.67931 4.50242 4.78349 4.42779C4.88767 4.35315 4.96772 4.24964 5.01375 4.13004C5.05881 3.99734 5.12056 3.87091 5.1975 3.75379C5.27899 3.88164 5.34925 4.01631 5.4075 4.15629C5.03465 4.39398 4.72257 4.71559 4.49619 5.09541C4.26981 5.47524 4.13542 5.90275 4.10375 6.34379H2.1525C1.82096 5.88008 1.6077 5.34242 1.53125 4.77754V4.77754ZM7 12.4688C3.98125 12.4688 1.53125 10.36 1.53125 7.77004V7.65629H12.4688V7.77004C12.4688 10.36 10.0188 12.4688 7 12.4688Z" /></svg>;

export default KebabBowlSmall;