import React from "react";
import Links from "./Links";

export default function Header() {
  const btnRef = React.useRef(null);
  const spanRef = React.useRef(null);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }
    const handleMouseMove = (e) => {
      const { width, height } = e.target.getBoundingClientRect();
      const offsetX = e.offsetX;
      const offsetY = e.offsetY;
      const left = `${(offsetX / width) * 100}%`;
      const top = `${(offsetY / height) * 100}%`;

      spanRef.current.animate(
        { left, top, opacity: "100%" },
        { duration: 250, fill: "forwards" },
      );
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { opacity: 0 },
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
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between bg-transparent px-4 text-content backdrop-blur-md">
      <Links />
      <button
        ref={btnRef}
        onClick={() =>
          window.open(
            "https://github.com/teddyld/resume/blob/main/vincentResume.pdf",
            "_blank",
          )
        }
        className={`group relative overflow-hidden rounded-md border-2 border-content px-4 py-2 text-sm font-medium transition-all ${!isDarkMode && "hover:scale-[110%]"}`}
      >
        <a className="pointer-events-none relative z-10 mix-blend-difference">
          My Resume
        </a>
        <span
          ref={spanRef}
          className={`pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ${!isDarkMode && "hidden"}`}
        ></span>
      </button>
    </header>
  );
}
