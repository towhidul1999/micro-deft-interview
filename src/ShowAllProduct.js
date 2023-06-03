import React, { useEffect, useState } from "react";
import LayOut from "./LayOut";

function ShowAllProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <LayOut>
      <div>
        {products.map((product) => {
          return (
            <div>
              <img src={product.image} alt="Avatar" style={{ width: "50px" }} />
              <div class="container">
                <h4>
                  <b>{product.title}</b>
                </h4>
                <p>Price: {product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </LayOut>
  );
}

export default ShowAllProduct;
