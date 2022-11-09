import React from "react";

import MenuLayout from "../../components/molecules/MenuLayout";
import ButtonPrimary from "../../components/atoms/ButtonPrimary/ButtonPrimary";

import styles from "../../styles/pickTwo.module.css";

const PickTwo = () => {
  return (
    <div className={styles.pickTwoContainer}>
      <h2>You Pick Two</h2>
      <p>
        Choose any two entrees.
        <br />
        Along with your side choice of chips, an apple,
        <br />
        or a French baguette.
      </p>
      <ButtonPrimary text={"Build Your Own"} style={{ width: "250px" }} />
    </div>
  );
};

export default PickTwo;

PickTwo.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
