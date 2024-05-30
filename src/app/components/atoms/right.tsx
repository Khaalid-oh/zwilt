import * as React from "react";
const Right = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={11}
    fill="none"
    {...props}
  >
    <path
      fill="#50589F"
      d="M9.604 5.56c0 2.38-2.012 4.308-4.494 4.308C2.627 9.868.615 7.94.615 5.56c0-2.38 2.012-4.308 4.495-4.308 2.482 0 4.494 1.929 4.494 4.308Z"
    />
    <path fill="#50589F" d="M8.448 10.607V.513l8.99 5.047-8.99 5.047Z" />
  </svg>
);
export default Right;
