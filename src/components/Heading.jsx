import TagLine from "./Tagline";
import brackets from "../assets/svg/Brackets";
import { TypingText, TitleText } from "./CustomText";
import { motion } from "framer-motion";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto flex items-center justify-center"
        >
          {brackets("left")}
          <TypingText title={tag} textStyles="text-center text-n-3 mx-3" />
          {brackets("right")}
        </motion.div>
      )}

      {title && (
        <motion.div>
          <TitleText title={title} textStyles="h2 text-center" />
        </motion.div>
      )}
      {text && <p className="body-1 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
