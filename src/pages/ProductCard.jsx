import { useEffect, useState } from "react";

import styles from "../styles/productCard.module.css";

function ProductCard({ id, setQtyCart, setAmtCart, qtyCart, amtCart }) {
  const [imageURL, setImageURL] = useState(null);
  const [productName, setProductName] = useState(null);
  const [price, setPrice] = useState(null);
  const [qty, setQty] = useState(0);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProductName(json.title);
        setImageURL(json.image);
        setPrice(json.price);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className={styles.card}>Loading...</p>;
  if (error) return <p>An error has occured</p>;

  return (
    <>
      <div className={styles.card}>
        <img src={imageURL} alt="" className={styles.img} />
        <div>{productName}</div>
        <div className={styles.lower}>
          <div className={styles.qty}>
            <button
              onClick={() => {
                setQty((qty) => (qty > 0 ? qty - 1 : qty));
              }}
            >
              -
            </button>
            <input
              type="number"
              min={0}
              max={10}
              id={id - "qty-input"}
              value={qty}
            />
            <button
              onClick={() => {
                setQty((qty) => (qty < 20 ? qty + 1 : qty));
              }}
            >
              +
            </button>
          </div>
          <div>₹{Math.floor(price * 84.48)}</div>
        </div>
        <button
          className={styles.addToCartBtn}
          onClick={() => {
            setQtyCart(qtyCart + qty);
            setAmtCart(amtCart + qty * Math.floor(price * 84.48));
            // console.log(qty * Math.floor(price * 84.48));
          }}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
