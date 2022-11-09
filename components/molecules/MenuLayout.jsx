import React from "react";
import {
  faStar,
  fa2,
  faBurger,
  faCarrot,
  faBowlRice,
  faPizzaSlice,
  faCookieBite,
  faGlassWater,
} from "@fortawesome/free-solid-svg-icons";
import ScrollContainer from "react-indiana-drag-scroll";

import NavLink from "./NavLink";

import styles from "../../styles/MenuLayout.module.css";
import ShoppingCartToken from "./ShoppingCartToken";

const MenuLayout = ({ children }) => {
  return (
    <>
      <ScrollContainer horizontal={true} vertical={false}>
        <div className={styles.menuNavbar}>
          <NavLink href="/menu/favs" icon={faStar} text="Favorites" />

          <NavLink href="/menu/pickTwo" icon={fa2} text="You Pick Two" />

          <NavLink href="/menu/sandwiches" icon={faBurger} text="Sandwiches" />

          <NavLink href="/menu/salads" icon={faCarrot} text="Salads" />

          <NavLink href="/menu/soup" icon={faBowlRice} text="Soup & Mac" />

          <NavLink href="/menu/pizza" icon={faPizzaSlice} text="Pizza" />

          <NavLink href="/menu/bakery" icon={faCookieBite} text="Bakery" />

          <NavLink
            href="/menu/beverages"
            icon={faGlassWater}
            text="Beverages"
          />
        </div>
      </ScrollContainer>
      {children}
      <ShoppingCartToken />
    </>
  );
};

export default MenuLayout;
