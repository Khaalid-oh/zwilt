import * as React from "react";
const SkillIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#A285D0"
      d="M8 5.001a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 3.5-1.323 2.68-2.957.43 2.14 2.085-.505 2.946L8 15.251l2.645 1.39-.505-2.945 2.14-2.086-2.957-.43L8 8.501ZM9 0l5 .001v3l-1.363 1.138A9.935 9.935 0 0 0 9 3.05V0ZM7 0v3.05a9.935 9.935 0 0 0-3.636 1.088L2 3.001v-3L7 0Z"
    />
  </svg>
);
export default SkillIcon;
