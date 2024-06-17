import React from "react";

export default function HoverOutline({ children, ...rest }) {
  return (
    <div
      {...rest}
      className="group relative rounded bg-zinc-700 px-2 py-1 text-xs transition-colors duration-[400ms] hover:text-indigo-300"
    >
      {children}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-300 group-hover:w-full" />
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all duration-100 group-hover:h-full" />
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all duration-100 group-hover:h-full" />
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all duration-300 group-hover:w-full" />
    </div>
  );
}
