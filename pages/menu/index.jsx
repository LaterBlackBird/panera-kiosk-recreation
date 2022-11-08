import React from "react";
import { motion } from "framer-motion";

import MenuLayout from "../../components/molecules/MenuLayout";

const MenuHomePage = () => {
  const transitionVariants = {
    hidden: { x: 2000 },
    enter: { x: 0 },
    exit: { x: -2000 },
  };

  return (
    <motion.div
      variants={transitionVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.75, ease: "linear" }}
    >
      Menu Home Page
    </motion.div>
  );
};

export default MenuHomePage;

MenuHomePage.getLayout = function getLayout(page) {
  return (
    <MenuLayout>
      {page}
    </MenuLayout>
  )
}