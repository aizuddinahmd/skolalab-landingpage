import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, number, {
        duration: 2,
      });

      return controls.stop;
    }
  }, [isInView, count, number]);

  return (
    <motion.h1 ref={ref} className="h2 font-bold">
      {rounded}
    </motion.h1>
  );
};

export default Counter;
