import * as React from "react";
const ZwiltICon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="#202229"
      d="M13.359 7.5c0 3.536-2.99 6.402-6.68 6.402C2.99 13.902 0 11.036 0 7.5s2.99-6.402 6.68-6.402c3.688 0 6.679 2.866 6.679 6.402Z"
    />
    <path fill="#202229" d="M11.641 15V0L25 7.5 11.641 15Z" />
  </svg>
);
export default ZwiltICon;
