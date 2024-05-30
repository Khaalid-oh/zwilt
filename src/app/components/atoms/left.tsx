import * as React from "react";
const Left = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={11}
    fill="none"
    {...props}
  >
    <path
      fill="#50589F"
      d="M7.982 5.56c0 2.38 2.012 4.308 4.494 4.308 2.482 0 4.495-1.929 4.495-4.308 0-2.38-2.012-4.308-4.495-4.308-2.482 0-4.494 1.929-4.494 4.308Z"
    />
    <path fill="#50589F" d="M9.138 10.607V.513L.148 5.56l8.99 5.047Z" />
  </svg>
);
export default Left;
