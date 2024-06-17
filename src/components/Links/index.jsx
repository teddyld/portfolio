import React from "react";
import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";

export default function Links() {
  return (
    <div className="inline-flex text-xl gap-4 items-center">
      <LinkedIn />
      <GitHub />
    </div>
  );
}
