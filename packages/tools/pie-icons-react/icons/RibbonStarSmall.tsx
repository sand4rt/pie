import * as React from "react";
import { SVGProps } from "react";

const RibbonStarSmall = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="c-pieIcon c-pieIcon--ribbonStarSmall" width="1em" height="1em" role="img" {...props}><path d="M12.6962 10.955C12.0748 10.3785 11.5595 9.69731 11.1737 8.94248C11.2703 8.63391 11.3176 8.31203 11.3138 7.98873C11.3071 7.79431 11.3277 7.59992 11.375 7.41123C11.4765 7.26196 11.5939 7.12408 11.725 6.99998C11.9363 6.82757 12.1116 6.61516 12.2407 6.37493C12.3698 6.1347 12.4503 5.87135 12.4775 5.59998C12.4501 5.32988 12.3695 5.06789 12.2404 4.8291C12.1112 4.59032 11.9361 4.37947 11.725 4.20873C11.5939 4.08462 11.4765 3.94674 11.375 3.79748C11.3312 3.60828 11.3135 3.41397 11.3225 3.21998C11.3677 2.68945 11.2045 2.16218 10.8675 1.74998C10.4491 1.41307 9.91419 1.25575 9.38 1.31248C9.18865 1.31491 8.99769 1.29435 8.81125 1.25123C8.65346 1.14721 8.51193 1.02042 8.39125 0.874976C8.22039 0.664801 8.00935 0.490781 7.77048 0.363081C7.5316 0.235381 7.26968 0.156561 7 0.131226C6.73032 0.156561 6.4684 0.235381 6.22952 0.363081C5.99065 0.490781 5.77961 0.664801 5.60875 0.874976C5.4862 1.01112 5.34476 1.12898 5.18875 1.22498C5.0023 1.2681 4.81135 1.28866 4.62 1.28623C4.08581 1.2295 3.55092 1.38682 3.1325 1.72373C2.79418 2.14172 2.63389 2.67603 2.68625 3.21123C2.6927 3.40852 2.67209 3.60577 2.625 3.79748C2.52345 3.94674 2.40611 4.08462 2.275 4.20873C2.06555 4.38025 1.89203 4.59144 1.7644 4.83019C1.63676 5.06893 1.55753 5.33053 1.53125 5.59998C1.55845 5.87135 1.63892 6.1347 1.76805 6.37493C1.89717 6.61516 2.07242 6.82757 2.28375 6.99998C2.41486 7.12408 2.5322 7.26196 2.63375 7.41123C2.6781 7.60034 2.69577 7.79472 2.68625 7.98873C2.68242 8.31203 2.72967 8.63391 2.82625 8.94248C2.44054 9.69731 1.92521 10.3785 1.30375 10.955L0.65625 11.5587L4.6025 13.8687L4.96125 13.5012C5.65167 12.7569 6.24015 11.9242 6.71125 11.025C6.81193 11.0481 6.91437 11.0627 7.0175 11.0687C7.12063 11.0627 7.22307 11.0481 7.32375 11.025C7.79485 11.9242 8.38333 12.7569 9.07375 13.5012L9.4325 13.8687L13.3787 11.5587L12.6962 10.955ZM3.22875 5.11873C3.48166 4.88447 3.68929 4.60566 3.84125 4.29623C3.95685 3.95864 4.01021 3.60287 3.99875 3.24623C3.99038 3.05175 4.01102 2.85712 4.06 2.66873C4.25155 2.62119 4.44976 2.6064 4.64625 2.62498C5.00286 2.63586 5.35853 2.58251 5.69625 2.46748C6.00795 2.31543 6.28726 2.10446 6.51875 1.84623C6.65744 1.68803 6.81978 1.55226 7 1.44373C7.179 1.54693 7.34127 1.67675 7.48125 1.82873C7.71274 2.08696 7.99205 2.29793 8.30375 2.44998C8.64147 2.56501 8.99714 2.61836 9.35375 2.60748C9.54777 2.59701 9.74229 2.61469 9.93125 2.65998C9.98762 2.85002 10.0113 3.04825 10.0013 3.24623C9.98979 3.60287 10.0432 3.95864 10.1587 4.29623C10.3107 4.60566 10.5183 4.88447 10.7713 5.11873C10.8938 5.24998 11.1562 5.51248 11.1562 5.59998C11.1562 5.68748 10.8938 5.95873 10.7713 6.08123C10.5158 6.33343 10.3083 6.6299 10.1587 6.95623C10.0432 7.29381 9.98979 7.64958 10.0013 8.00623C10.0091 8.20068 9.98847 8.39524 9.94 8.58373C9.74945 8.63714 9.55122 8.65785 9.35375 8.64498C8.99714 8.63409 8.64147 8.68744 8.30375 8.80248C7.99205 8.95452 7.71274 9.16549 7.48125 9.42373C7.35 9.54623 7.0875 9.79998 7 9.79998C6.9125 9.79998 6.65 9.54623 6.51875 9.42373C6.29221 9.14659 6.01257 8.91752 5.69625 8.74998C5.35853 8.63494 5.00286 8.58159 4.64625 8.59248C4.45222 8.60295 4.25771 8.58526 4.06875 8.53998C4.01238 8.34993 3.98871 8.1517 3.99875 7.95373C4.01021 7.59708 3.95685 7.24131 3.84125 6.90373C3.69171 6.5774 3.48418 6.28093 3.22875 6.02873C3.10625 5.90623 2.84375 5.64373 2.84375 5.54748C2.84375 5.45123 3.10625 5.24998 3.22875 5.11873ZM4.375 12.1975L2.82625 11.3225C3.21811 10.876 3.56129 10.3891 3.85 9.86998C4.10909 9.92247 4.37322 9.94594 4.6375 9.93998C4.82903 9.93321 5.02055 9.95383 5.20625 10.0012C5.35492 10.0897 5.49042 10.1987 5.60875 10.325C5.26868 10.9932 4.85485 11.6213 4.375 12.1975ZM9.625 12.1975C9.1435 11.6131 8.72962 10.9761 8.39125 10.2987C8.50958 10.1725 8.64508 10.0635 8.79375 9.97498C8.97945 9.92758 9.17097 9.90696 9.3625 9.91373C9.62678 9.91969 9.89091 9.89622 10.15 9.84373C10.4387 10.3629 10.7819 10.8498 11.1737 11.2962L9.625 12.1975Z" /><path d="M8.23372 7.41997L7.06122 6.79873C7.04198 6.79003 7.0211 6.78553 6.99997 6.78553C6.97885 6.78553 6.95797 6.79003 6.93872 6.79873L5.76622 7.41997L5.99372 6.12498C6.00151 6.10857 6.00554 6.09064 6.00554 6.07248C6.00554 6.05432 6.00151 6.03638 5.99372 6.01998L5.00497 5.07498L6.31747 4.88248C6.33872 4.88192 6.35929 4.87493 6.37647 4.86243C6.39366 4.84993 6.40665 4.83251 6.41372 4.81248L6.99997 3.63123L7.58622 4.81248C7.5933 4.83251 7.60629 4.84993 7.62347 4.86243C7.64066 4.87493 7.66123 4.88192 7.68247 4.88248L8.99497 5.07498L8.04122 6.00248C8.03344 6.01888 8.0294 6.03682 8.0294 6.05498C8.0294 6.07314 8.03344 6.09107 8.04122 6.10748L8.23372 7.41997Z" /></svg>;

export default RibbonStarSmall;