import * as React from "react";
const PeopleStarIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#A285D0"
      d="M6.825 10.615v6.532H0c0-1.733.719-3.394 1.999-4.62a6.983 6.983 0 0 1 4.826-1.912Zm5.119 6.123L9.436 18l.479-2.672-2.028-1.892 2.803-.39 1.254-2.431 1.253 2.43 2.803.39-2.028 1.893L14.45 18l-2.506-1.262Zm-5.12-6.94c-2.827 0-5.118-2.192-5.118-4.899S3.996 0 6.825 0c2.828 0 5.119 2.192 5.119 4.9 0 2.706-2.291 4.898-5.12 4.898Z"
    />
  </svg>
);
export default PeopleStarIcon;
