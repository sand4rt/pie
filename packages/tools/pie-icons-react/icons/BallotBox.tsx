import * as React from "react";
import { SVGProps } from "react";

const BallotBox = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="c-pieIcon c-pieIcon--ballotBox" width="1em" height="1em" role="img" {...props}><path d="M15.855 5.53L17.1413 6.72L14 10.115C13.8887 10.2362 13.7535 10.333 13.6029 10.3992C13.4523 10.4655 13.2895 10.4998 13.125 10.5C12.9613 10.4994 12.7995 10.4657 12.6491 10.4011C12.4988 10.3364 12.363 10.2421 12.25 10.1237L10.99 8.75L12.2937 7.58625L13.125 8.47875L15.855 5.53ZM7.875 12.25V1.75H15.75C16.3245 1.75 16.8934 1.86316 17.4242 2.08303C17.955 2.30289 18.4373 2.62515 18.8436 3.03141C19.2498 3.43766 19.5721 3.91996 19.792 4.45076C20.0118 4.98156 20.125 5.55047 20.125 6.125V12.25H21.875V14H6.125V12.25H7.875ZM9.625 12.25H18.375V6.125C18.375 5.42881 18.0984 4.76113 17.6062 4.26884C17.1139 3.77656 16.4462 3.5 15.75 3.5H9.625V12.25ZM26.25 7V25.375H1.75V7H6.125V8.75H3.5V17.5H24.5V8.75H21.875V7H26.25ZM24.5 23.625V19.25H3.5V23.625H24.5Z" /></svg>;

export default BallotBox;