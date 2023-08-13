import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/cartSlice";
const CartButton = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalItem);
  return (
    <button
      className={classes.button}
      onClick={() => dispatch(cartActions.callCart())}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
