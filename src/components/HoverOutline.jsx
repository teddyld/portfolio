import React from "react";

export default function HoverOutline({ children, ...rest }) {
  return (
    <div
      {...rest}
      className="hover:text-secondary bg-card group relative rounded px-2 py-1 text-xs transition-colors duration-[400ms]"
    >
      {children}
      <span className="bg-secondary absolute left-0 top-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full" />
      <span className="bg-secondary absolute bottom-0 left-0 h-0 w-[2px] transition-all duration-100 group-hover:h-full" />
      <span className="bg-secondary absolute right-0 top-0 h-0 w-[2px] transition-all duration-100 group-hover:h-full" />
      <span className="bg-secondary absolute bottom-0 right-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full" />
    </div>
  );
}
