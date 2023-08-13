import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;
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
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}
          <span className={classes.itemprice}>(${price})</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQuantity}>-</button>
          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
