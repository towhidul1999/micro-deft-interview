import React from "react";
import { Link } from "react-router-dom";

function LayOut(props) {
  return (
    <div>
      <Link to="/allProduct">
        <li>All Product</li>
      </Link>

      <Link to="/limitProduct">
        <li>Limit Product</li>
      </Link>

      <Link to="/addProduct">
        <li>Add Product</li>
      </Link>

      <main>{props.children}</main>
    </div>
  );
}

export default LayOut;
