import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import axios from "axios";
let initial = true;
function App() {
  const [request, setRequest] = useState(false);
  const [info, setInfo] = useState();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setRequest(true);
        setInfo(<div className="bg-primary text-white p-3">Sending...</div>);
        let res = await axios.put(
          "https://shoe-website-7aab6-default-rtdb.firebaseio.com/cart.json",
          cart
        );

        setRequest(true);
        setInfo(<div className="bg-success text-white p-3">Success!!!</div>);
      } catch (err) {
        setRequest(true);
        setInfo(<div className="bg-danger text-white p-3">Try Again!!!</div>);
      }
    };
    if (initial) {
      initial = false;
      return;
    }
    //to make sure that useEffect will not when the app component runs for the first time.
    fetchData();
  }, [cart]);

  return (
    <>
      {request && info}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}

export default App;
