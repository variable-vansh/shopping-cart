import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

import { Home, Store, ShoppingCart } from "lucide-react";

function CommonNavbar({ homeNavClass }) {
  return (
    <>
      <nav className={homeNavClass == null ? styles.nav : homeNavClass}>
        <Link to="/home" className={styles.NavBtns}>
          <Home size={48} />
          HOME
        </Link>
        <Link to="/shop" className={styles.NavBtns}>
          <Store size={48} />
          SHOP
        </Link>
      </nav>
    </>
  );
}

export default CommonNavbar;

// {(homeNavClass==null)?(styles.nav):(homeNavClass)}
