
import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="16" y="6" width="32" height="52" rx="2" className="fill-primary/20 stroke-primary"/>
      <path 
        d="M16 16H48" 
        className="stroke-primary/60"
      />
      <path 
        d="M16 48H48" 
        className="stroke-primary/60"
      />
      <path 
        d="M24 24L28 32L32 24L36 32L40 24" 
        className="stroke-primary stroke-[3]"
      />
      <path 
        d="M24 38H40"
        className="stroke-primary"
      />
      <path 
        d="M24 42H36"
        className="stroke-primary"
      />
    </svg>
  );
};

export default Logo;
