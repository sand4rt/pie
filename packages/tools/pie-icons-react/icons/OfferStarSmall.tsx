import * as React from "react";
import { SVGProps } from "react";

const OfferStarSmall = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="c-pieIcon c-pieIcon--offerStarSmall" width="1em" height="1em" role="img" {...props}><path d="M12.8713 5.355C12.6846 5.185 12.5252 4.98727 12.3988 4.76875C12.329 4.50937 12.2995 4.24083 12.3112 3.9725C12.3691 3.34463 12.1844 2.71845 11.795 2.2225C11.2991 1.83315 10.6729 1.64842 10.045 1.70625C9.77667 1.71799 9.50813 1.68848 9.24875 1.61875C9.03165 1.49398 8.83654 1.33435 8.67125 1.14625C8.46905 0.887549 8.2169 0.672133 7.9298 0.5128C7.64271 0.353468 7.32651 0.25347 7 0.21875C6.3547 0.280161 5.76004 0.594796 5.34625 1.09375C5.18096 1.28185 4.98585 1.44148 4.76875 1.56625C4.50937 1.63598 4.24083 1.66549 3.9725 1.65375C3.3441 1.59038 2.71588 1.7757 2.2225 2.17C1.83315 2.66595 1.64842 3.29213 1.70625 3.92C1.71799 4.18833 1.68848 4.45687 1.61875 4.71625C1.49228 4.93477 1.33292 5.1325 1.14625 5.3025C0.883008 5.50625 0.66473 5.76221 0.505119 6.05433C0.345508 6.34645 0.248012 6.66841 0.21875 7C0.248395 7.31848 0.34101 7.62789 0.491218 7.91028C0.641426 8.19267 0.846233 8.44241 1.09375 8.645C1.28042 8.815 1.43978 9.01273 1.56625 9.23125C1.63598 9.49063 1.66549 9.75917 1.65375 10.0275C1.59592 10.6554 1.78065 11.2816 2.17 11.7775C2.66595 12.1669 3.29213 12.3516 3.92 12.2937C4.18833 12.282 4.45687 12.3115 4.71625 12.3812C4.93335 12.506 5.12846 12.6657 5.29375 12.8537C5.70754 13.3527 6.3022 13.6673 6.9475 13.7287C7.5928 13.6673 8.18746 13.3527 8.60125 12.8537C8.76654 12.6657 8.96165 12.506 9.17875 12.3812C9.43813 12.3115 9.70667 12.282 9.975 12.2937C10.6034 12.3571 11.2316 12.1718 11.725 11.7775C12.1144 11.2816 12.2991 10.6554 12.2413 10.0275C12.2295 9.75917 12.259 9.49063 12.3288 9.23125C12.4552 9.01273 12.6146 8.815 12.8013 8.645C13.0488 8.44241 13.2536 8.19267 13.4038 7.91028C13.554 7.62789 13.6466 7.31848 13.6763 7C13.6343 6.36724 13.3452 5.77637 12.8713 5.355ZM11.935 7.735C11.6224 8.02284 11.3671 8.36723 11.1825 8.75C11.0437 9.158 10.9814 9.58813 10.9987 10.0188C11.0248 10.3167 10.9799 10.6166 10.8675 10.8938C10.5903 11.0061 10.2904 11.0511 9.9925 11.025C9.56188 11.0076 9.13175 11.0699 8.72375 11.2088C8.34723 11.3952 8.00892 11.6504 7.72625 11.9613C7.48125 12.1975 7.175 12.495 6.99125 12.495C6.8075 12.495 6.50125 12.1975 6.25625 11.9613C5.97335 11.6401 5.63184 11.3758 5.25 11.1825C4.842 11.0437 4.41187 10.9814 3.98125 10.9987C3.68331 11.0248 3.38342 10.9799 3.10625 10.8675C2.99388 10.5903 2.9489 10.2904 2.975 9.9925C2.99763 9.57223 2.94428 9.15133 2.8175 8.75C2.63106 8.37348 2.37584 8.03517 2.065 7.7525C1.82875 7.5075 1.53125 7.20125 1.53125 7.0175C1.53125 6.83375 1.82875 6.5275 2.065 6.2825C2.3794 5.98948 2.63482 5.63902 2.8175 5.25C2.95634 4.842 3.01864 4.41187 3.00125 3.98125C2.97515 3.68331 3.02013 3.38342 3.1325 3.10625C3.40967 2.99388 3.70956 2.9489 4.0075 2.975C4.42777 2.99763 4.84867 2.94428 5.25 2.8175C5.62652 2.63106 5.96483 2.37584 6.2475 2.065C6.4925 1.82875 6.79875 1.53125 6.9825 1.53125C7.16625 1.53125 7.4725 1.82875 7.7175 2.065C8.01052 2.3794 8.36098 2.63482 8.75 2.8175C9.158 2.95634 9.58813 3.01864 10.0188 3.00125C10.3167 2.97515 10.6166 3.02013 10.8938 3.1325C11.0061 3.40967 11.0511 3.70956 11.025 4.0075C11.0024 4.42777 11.0557 4.84867 11.1825 5.25C11.3689 5.62652 11.6242 5.96483 11.935 6.2475C12.1713 6.4925 12.4688 6.79875 12.4688 6.9825C12.4688 7.16625 12.1713 7.49 11.935 7.735ZM9.73 7C9.11141 7.24239 8.54959 7.61001 8.0798 8.0798C7.61001 8.54959 7.24239 9.11141 7 9.73C6.75761 9.11141 6.38999 8.54959 5.9202 8.0798C5.45041 7.61001 4.88859 7.24239 4.27 7C4.88859 6.75761 5.45041 6.38999 5.9202 5.9202C6.38999 5.45041 6.75761 4.88859 7 4.27C7.24239 4.88859 7.61001 5.45041 8.0798 5.9202C8.54959 6.38999 9.11141 6.75761 9.73 7Z" /></svg>;

export default OfferStarSmall;