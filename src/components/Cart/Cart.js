import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const showCart = useSelector((state) => state.cart.showCart);
  const items = useSelector((state) => state.cart.items);

  return (
    <>
      {showCart && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  id: item.id,
                  title: item.name,
                  quantity: item.quantity,
                  total: item.quantity * item.price,
                  price: item.price,
                }}
              />
            ))}
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;
