import "./Product.css";
import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import {productData} from "../../../../Services/ProductData"
import { cartContext } from "../../../../context/cartContext";
function Product() {
  const {cart,setCart}=useContext(cartContext)
  return (
    <div className="product">
      <div>iicon{cart.length?cart.length:"cart is empty"}</div>

      <div className="d-flex justify-content-center">

        <div className="row justify-content-center text-center">
        {productData.item.map((item)=>
<ProductCard item={item } setCart={setCart} cart={cart}/>
      )}
        </div>

      </div>
  

    </div>
  );
};

export default Product;
