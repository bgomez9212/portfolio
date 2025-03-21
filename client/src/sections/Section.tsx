import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Section({
  title,
  id,
  children,
}: {
  title: string;
  id: string;
  children: ReactNode;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "25vh"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div className="pt-mobileNav sm:pt-navbar flex flex-col w-4/5" id={id}>
      <motion.h1
        ref={ref}
        style={{ scale, opacity }}
        className="text-3xl underline scroll-view"
      >
        {title}
      </motion.h1>
      <div className="flex justify-evenly flex-wrap">{children}</div>
    </div>
  );
}
