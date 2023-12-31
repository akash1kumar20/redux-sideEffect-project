import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="p1"
          title="Test One"
          price={6}
          description="This is a first product - amazing!"
        />
        <ProductItem
          id="p2"
          title="Test Two"
          price={7}
          description="This is a second product - amazing!"
        />
      </ul>
    </section>
  );
};

export default Products;
