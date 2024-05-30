import * as React from "react";
const PlayWhite = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M0 .822C0 .368.391 0 .873 0H14.96c.482 0 .873.368.873.822V14.08a.799.799 0 0 1-.256.581.903.903 0 0 1-.617.241H.873a.903.903 0 0 1-.617-.24A.8.8 0 0 1 0 14.08V.822Zm6.705 3.661a.367.367 0 0 0-.497.105.317.317 0 0 0-.05.17v5.386c0 .06.017.119.05.17.033.052.08.094.136.122a.37.37 0 0 0 .36-.017l4.292-2.692a.34.34 0 0 0 .116-.12.316.316 0 0 0 0-.312.34.34 0 0 0-.116-.12L6.704 4.483Z"
    />
  </svg>
);
export default PlayWhite;
