import "./Product.css";
import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { productData } from "../../../../Services/ProductData";
import { cartContext } from "../../../../context/cartContext";
function Product() {
  const { cart, setCart } = useContext(cartContext);
  return (
    <div className="product">
      <div ><img className="cartImg" src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png" alt="" />{cart.length ? cart.length : ""}</div>

      <div className="d-flex justify-content-center border-">
        <div className="row justify-content-center text-center">
          {productData.item.map((item) => (
            <ProductCard item={item} setCart={setCart} cart={cart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
