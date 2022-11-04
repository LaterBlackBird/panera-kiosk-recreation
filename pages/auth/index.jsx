import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ButtonPrimary from "../../components/atoms/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../../components/atoms/ButtonSecondary/ButtonSecondary";

import styles from "../../styles/Auth.module.css";

const index = () => {
  const router = useRouter();

  const transitionVariants = {
    hidden: { x: 2000 },
    enter: { x: 0 },
    exit: { x: -2000 },
  };

  const navHome = () => {
    router.push("/");
  };

  const navToMenu = () => {
    router.push("/menu");
  };

  return (
    <motion.div
      className={styles.container}
      variants={transitionVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: .75, ease: "linear" }}
    >
      <div className={styles.nav}>
        <ButtonSecondary
          text={<FontAwesomeIcon icon={faArrowLeft} />}
          style={{ height: "70px", width: "70px", borderRadius: "50%" }}
          onClick={navHome}
        />
        <Link href="/">Join</Link>
      </div>

      <div className={styles.options}>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: "100",
            fontSize: "50px",
          }}
        >
          Welcome To Panera!
        </h2>
        <ButtonPrimary text={"Sign In to MyPanera"} style={{ width: "50%" }} />
        <ButtonSecondary
          text={"Continue as Guest"}
          style={{ width: "50%" }}
          onClick={navToMenu}
        />
        <p>Swipe your MyPanera card or Credit Card to Sign In.</p>
      </div>

      <div className={styles.footer}>
        <Link href="/">Privacy</Link>
        <span>◾</span>
        <Link href="/">Terms Of Use</Link>
        <span>◾</span>
        <Link href="/">Allergen And Nutrition Information</Link>
      </div>
    </motion.div>
  );
};

export default index;
