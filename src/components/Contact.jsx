import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import React from "react";

export default function Contact({ contactRef }) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [COLORS, setCOLORS] = React.useState([
    "#fda4af",
    "#fb7185",
    "#f43f5e",
    "#e11d48",
    "#be123c",
  ]);
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${isDarkMode ? "#171717" : "#fafafa"} 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  React.useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
      setCOLORS(["#a5b4fc", "#818cf8", "#6366f1", "#4f46e5", "#4338ca"]);
    }
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [isDarkMode]);

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative w-full rounded-xl p-8"
      ref={contactRef}
    >
      <div className="relative z-10 flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">
          Contact<span className="text-primary">.</span>
        </h1>

        <p className="text-lg">
          Send me an email or check me out on{" "}
          <a
            className="text-secondary hover:underline"
            href="https://www.linkedin.com/in/vincentpham2/"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
        <motion.a
          style={{
            boxShadow,
            border,
          }}
          className="hover:text-secondary bg-background hover:bg-background-dark flex items-center gap-2 rounded-full px-4 py-2 text-lg transition-colors hover:cursor-pointer"
          href="mailto:vincent.pham2@outlook.com"
        >
          <svg
            className="text-xl"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"></path>
          </svg>
          vincent.pham2@outlook.com
        </motion.a>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={200} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
}
