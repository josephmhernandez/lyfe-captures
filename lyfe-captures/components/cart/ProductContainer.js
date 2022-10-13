import React, { useState, useEffect } from "react";
import Commerce from "@chec/commerce.js";
import { Grid, Divider } from "semantic-ui-react";
import ProductCard from "./ProductCard";

const ProductContainer = (props) => {
  const commerce = new Commerce(process.env.CHEC_PK);

  const [products, setProducts] = useState([]);
  const [variants, setVariants] = useState({});
  useEffect(() => {
    commerce.products
      .list()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));

    props.setCheckout(false);
    console.log(products);
    for (let i = 0; i < products.length; i++) {
      console.log(products[i].id, "product id");
      commerce.products
        .getVariants(products[i].id)
        .then((vars) => {
          setVariants((prevState) => {
            return { ...prevState, [products[i].id]: vars.data };
          });
        })
        .catch((err) => console.log("MESSED UP", err));
    }
  }, []);

  return (
    <>
      <Divider horizontal>Shop All Products</Divider>
      <Grid stackable columns="equal" centered>
        {/* <Image src={hero} fluid/> */}
        {products.map((product) => (
          <Grid.Column width={5} key={product.id}>
            <ProductCard
              product={product}
              variants={variants[product.id]}
              // addToCart={props.addToCart}
            />
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
};

export default ProductContainer;
