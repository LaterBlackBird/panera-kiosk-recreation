import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../styles/NavLink.module.css";

const NavLink = ({ href, icon, text }) => {
  const router = useRouter();

  return (
    <Link href={href} className={styles.nav}>
      <div
        className={`${styles.menuIconContainer} ${
          router.pathname === href ? styles.active : styles.notActive
        }`}
      >
        <FontAwesomeIcon icon={icon} className={styles.menuIcon} />
      </div>
      <p>{text}</p>
    </Link>
  );
};

export default NavLink;
