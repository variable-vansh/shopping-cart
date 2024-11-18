import CommonNavbar from "../Misc Elements/CommonNavbar";

import styles from "../styles/homePage.module.css";

import { Camera, Home, Store, ShoppingCart } from "lucide-react";

function HomePage() {
  return (
    <>
      <div className={styles.header}>
        <CommonNavbar homeNavClass={styles.homeNav} />
      </div>
      <div className={styles.dummyHome}>
        <p>Follow me on Twitter @variable_vansh</p>
        <img src="src/assets/homeimg.png" alt="can't load image" />
      </div>
    </>
  );
}

export default HomePage;
