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
  const COLORS = ["#a5b4fc", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9"];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #171717 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  React.useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

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
          Contact<span className="text-indigo-500">.</span>
        </h1>

        <p className="text-lg">
          Send me an email or check me out on{" "}
          <a
            className="text-indigo-300 hover:underline"
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
          className="flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-lg transition-colors hover:cursor-pointer hover:bg-neutral-950 hover:text-indigo-300"
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
