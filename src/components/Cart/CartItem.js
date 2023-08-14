import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/cartSlice";
import React, { useState, useEffect } from "react";
import axios from "axios";

const CartItem = (props) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(
          "https://shoe-website-7aab6-default-rtdb.firebaseio.com/cart.json"
        );
        const dataExtracted = [];
        for (let key in res.data) {
          dataExtracted.push({ ...res.data, id: key });
        }
        setData(res.data.items);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const increaseQuantity = (event) => {
    event.preventDefault();
    dispatch(
      cartActions.addToCart({
        id,
        title,
        price,
      })
    );
  };
  const decreaseQuantity = (event) => {
    event.preventDefault();
    dispatch(cartActions.decrease(id));
  };

  return (
    <>
      {data.map((item) => (
        <li className={classes.item} key={id}>
          <header>
            <h3>{item.name}</h3>
            <div className={classes.price}>
              ${total}
              <span className={classes.itemprice}>(${item.price})</span>
            </div>
          </header>
          <div className={classes.details}>
            <div className={classes.quantity}>
              x <span>{item.quantity}</span>
            </div>
            <div className={classes.actions}>
              <button onClick={decreaseQuantity}>-</button>
              <button onClick={increaseQuantity}>+</button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default CartItem;
