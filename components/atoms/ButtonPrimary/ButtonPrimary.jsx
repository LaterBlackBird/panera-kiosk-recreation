import React from "react";
import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = ({ text, onClick, style }) => {
  return (
    <div className={styles.buttonPrimary} style={style} onClick={onClick}>
      {text}
    </div>
  );
};

export default ButtonPrimary;
