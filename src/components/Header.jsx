import React from "react";
import Links from "./Links";

export default function Header() {
  const btnRef = React.useRef(null);
  const spanRef = React.useRef(null);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const { width, height } = e.target.getBoundingClientRect();
      const offsetX = e.offsetX;
      const offsetY = e.offsetY;
      const left = `${(offsetX / width) * 100}%`;
      const top = `${(offsetY / height) * 100}%`;

      spanRef.current.animate(
        { left, top, backgroundColor: "#f1f5f9" },
        { duration: 250, fill: "forwards" },
      );
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { backgroundColor: "#171717" },
        { duration: 100, fill: "forwards" },
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current.removeEventListener("mousemove", handleMouseMove);
      btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between bg-transparent px-4 text-white backdrop-blur-md">
      <Links />
      <button
        ref={btnRef}
        className="relative overflow-hidden rounded-md border-2 px-4 py-2 text-sm font-medium"
      >
        <span className="pointer-events-none relative z-10 mix-blend-difference">
          My Resume
        </span>
        <span
          ref={spanRef}
          className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full"
        ></span>
      </button>
    </header>
  );
}
