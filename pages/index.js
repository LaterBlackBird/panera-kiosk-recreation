import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

import coffeeCup from "../public/coffee_cup.png";
import sipAd from "../public/unlimited-sip.png";
import ButtonPrimary from "../components/atoms/ButtonPrimary/ButtonPrimary";

import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  const [userClicked, setUserClicked] = useState(false);
  const [touchCoords, setTouchCoords] = useState({ x: 0, y: 0 });

  const transition = (e) => {
    setUserClicked(true);
    setTouchCoords({
      x: e.clientX - 5,
      y: e.clientY - 5,
    });
    setTimeout(() => {
      router.push("/auth");
    }, 1000);
  };

  const showCircle = () => {
    return (
      <div
        id={styles.transitionCircle}
        style={{ top: `${touchCoords.y}px`, left: `${touchCoords.x}px` }}
      ></div>
    );
  };

  return (
    <motion.div
      className={styles.container}
      onClick={transition}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5 }}
    >
      <div id={styles.welcome}>
        <div id={styles.welcomeInstructions}>
          <h2>WELCOME TO PANERA</h2>
          <h1>TAP TO ORDER</h1>
        </div>
      </div>

      <div id={styles.safetyInfo}>
        <div>
          <span>Your safety is important to us.</span>
          <br />
          <span>
            This kiosk uses an antimicrobial cover and is cleaned frequently.
          </span>
        </div>
      </div>

      <div id={styles.ad}>
        <Image src={coffeeCup} alt="a cup of coffee" id={styles.coffeeCup} />
        <Image src={sipAd} alt="unlimted sips logo" id={styles.sipLogo} />
        <ButtonPrimary text={"Subscribe & Save"} type={"primary"} />
      </div>

      {userClicked && showCircle()}
    </motion.div>
  );
}
