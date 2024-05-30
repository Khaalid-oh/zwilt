import * as React from "react";
const Pointer = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#FFBE2E"
      d="M13.924 7.817c0 3.686-3.117 6.674-6.962 6.674C3.117 14.49 0 11.503 0 7.817c0-3.685 3.117-6.673 6.962-6.673 3.845 0 6.962 2.988 6.962 6.673Z"
    />
    <path fill="#FFBE2E" d="M12.134 15.635V0l13.924 7.817-13.924 7.818Z" />
  </svg>
);
export default Pointer;
