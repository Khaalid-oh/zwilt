import * as React from "react";
const CategoryIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#A285D0"
      d="M0 10h8V0H0v10Zm0 8h8v-6H0v6Zm10 0h8V8h-8v10Zm0-18v6h8V0h-8Z"
    />
  </svg>
);
export default CategoryIcon;
