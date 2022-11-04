import React from "react";
import { motion } from "framer-motion";

const index = () => {
  const transitionVariants = {
    hidden: { x: 2000 },
    enter: { x: 0 },
    exit: { x: -2000 },
  };

  return (
    <motion.div
      // className={styles.container}
      variants={transitionVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.75, ease: "linear" }}
    >
      Menu
    </motion.div>
  );
};

export default index;
