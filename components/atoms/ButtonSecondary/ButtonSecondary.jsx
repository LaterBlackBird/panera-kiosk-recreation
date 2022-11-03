import React from "react";
import styles from "./ButtonSecondary.module.css";

const ButtonSecondary = ({ text, onClick, style }) => {
  return (
    <div className={styles.buttonSecondary} style={style} onClick={onClick}>
      {text}
    </div>
  );
};

export default ButtonSecondary;
