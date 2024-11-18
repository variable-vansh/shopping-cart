import CommonNavbar from "../Misc Elements/CommonNavbar";
import ProductCard from "./ProductCard";

import { useState } from "react";

import styles from "../styles/shopPage.module.css";

import { Home, Store, ShoppingCart } from "lucide-react";

function ShopPage() {
  const [qty, setQty] = useState(0);
  const [amt, setAmt] = useState(0);

  const productCards = [];
  for (let x = 1; x <= 20; x++) {
    productCards.push(
      <ProductCard
        key={x}
        id={x}
        setQtyCart={setQty}
        setAmtCart={setAmt}
        qtyCart={qty}
        amtCart={amt}
      />
    );
  }

  return (
    <>
      <div className={styles.header}>
        <CommonNavbar />
        <button className={styles.cart}>
          <ShoppingCart size={60} />
          <div className={styles.cartText}>
            <p>Quantity: {qty}</p>
            <p>Amount: ₹{amt}</p>
          </div>
        </button>
      </div>
      {/* <h1>Shop page</h1> */}
      <div className={styles.productCardsDisplay}> {productCards}</div>
    </>
  );
}

export default ShopPage;
