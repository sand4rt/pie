import * as React from "react";
import { SVGProps } from "react";

const TacoSmall = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="c-pieIcon c-pieIcon--tacoSmall" width="1em" height="1em" role="img" {...props}><path d="M13.4663 8.09373L12.25 8.53123C12.5072 9.15818 12.532 9.85635 12.32 10.5C12.32 10.5525 12.1888 10.6925 11.7863 10.6925C11.3838 10.6925 11.2525 10.4212 10.9113 9.81748L10.7975 9.62498L10.7363 9.51998C10.5438 9.20498 10.3688 8.83748 10.185 8.46123C11.2555 8.17551 12.1873 7.51392 12.81 6.59748C12.9003 6.41345 12.9515 6.21275 12.9606 6.00797C12.9696 5.80318 12.9362 5.59875 12.8625 5.40748C12.7115 5.11977 12.4833 4.8798 12.2036 4.71444C11.9239 4.54908 11.6036 4.46487 11.2788 4.47123C11.0946 4.46242 10.9122 4.43008 10.7363 4.37498C10.7363 4.28748 10.78 4.14748 10.7975 4.05123C10.935 3.6893 10.9487 3.29198 10.8363 2.92147C10.7238 2.55097 10.4917 2.22821 10.1763 2.00373C9.81119 1.83112 9.40798 1.75497 9.0051 1.78254C8.60223 1.81012 8.21315 1.94049 7.87501 2.16123C7.22751 2.44123 7.00001 2.47623 6.93001 2.36248C6.71674 2.07246 6.43888 1.83607 6.11843 1.67205C5.79798 1.50803 5.44373 1.42087 5.08376 1.41748C4.80109 1.42316 4.52343 1.49308 4.27178 1.62194C4.02013 1.75079 3.8011 1.93521 3.63126 2.16123C2.90501 3.16748 2.46751 3.08873 1.96876 3.03623C1.768 2.97411 1.5562 2.95602 1.34782 2.98321C1.13943 3.01039 0.939364 3.08219 0.761256 3.19373C0.589788 3.31211 0.445103 3.46519 0.336575 3.64306C0.228046 3.82092 0.158096 4.0196 0.131256 4.22623C0.154809 5.16097 0.497549 6.05951 1.10251 6.77248C0.531019 7.85081 0.230702 9.05208 0.227506 10.2725C0.216886 10.5041 0.252414 10.7356 0.332027 10.9534C0.411639 11.1712 0.533748 11.371 0.691256 11.5412C0.834606 11.695 1.00793 11.8179 1.20055 11.9021C1.39317 11.9864 1.60101 12.0303 1.81126 12.0312H11.7863C12.0962 12.0506 12.4059 11.9918 12.6872 11.8603C12.9685 11.7289 13.2123 11.5289 13.3963 11.2787C14.175 10.1675 13.5363 8.30373 13.4663 8.09373ZM1.46126 4.25248C1.55146 4.2437 1.6423 4.2437 1.73251 4.25248C2.60751 4.40123 3.57876 4.43623 4.69876 2.88748C4.75077 2.82418 4.81625 2.77327 4.89042 2.73846C4.96458 2.70365 5.04558 2.68581 5.12751 2.68623C5.28947 2.69658 5.44695 2.74373 5.58796 2.82409C5.72897 2.90445 5.84979 3.01591 5.94126 3.14998C6.68501 4.06873 7.69126 3.61373 8.41751 3.31623C8.83751 3.14123 9.29251 2.94873 9.47626 3.07123C9.66001 3.19373 9.64251 3.17623 9.52001 3.72748C9.4188 3.98422 9.39058 4.26395 9.43845 4.53573C9.48632 4.80752 9.60842 5.06077 9.79126 5.26748C10.1662 5.56874 10.6316 5.73516 11.1125 5.73998C11.289 5.75375 11.4628 5.79204 11.6288 5.85373C11.6418 5.87634 11.6487 5.90199 11.6487 5.92811C11.6487 5.95422 11.6418 5.97987 11.6288 6.00248C11.119 6.63649 10.4149 7.08536 9.62501 7.27998C9.28601 6.46924 8.71072 5.77938 7.97407 5.30025C7.23742 4.82111 6.37356 4.57492 5.49501 4.59373C4.90393 4.58777 4.31491 4.66435 3.74501 4.82123C3.10362 4.97846 2.50563 5.27746 1.99501 5.69623C1.68637 5.3181 1.4921 4.85973 1.43501 4.37498C1.44376 4.30498 1.47001 4.26998 1.46126 4.25248ZM1.80251 10.7187C1.77084 10.7179 1.73969 10.7105 1.71107 10.6969C1.68244 10.6833 1.65696 10.664 1.63626 10.64C1.59894 10.5987 1.5704 10.5503 1.55235 10.4976C1.5343 10.445 1.52713 10.3892 1.53126 10.3337C1.64501 7.87498 2.42376 6.53623 4.06876 6.12498C4.53435 6.00387 5.01394 5.94502 5.49501 5.94998C7.53376 5.94998 8.17251 7.31498 8.91626 8.88998C9.1319 9.39158 9.38339 9.877 9.66876 10.3425L9.79126 10.5525C9.79126 10.6225 9.86126 10.6925 9.90501 10.7625L1.80251 10.7187Z" /></svg>;

export default TacoSmall;