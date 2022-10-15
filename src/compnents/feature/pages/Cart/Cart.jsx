import "./Cart.css";
import React, { useContext } from "react";
import { cartContext } from "../../../../context/cartContext";
import CartCard from "../CartCard/CartCard";

function Cart() {
  const { cart, setCart } = useContext(cartContext);
  return (
    <div className="cart d-flex justify-content-center ">
      <h1 className="text-center">Cart</h1>

      <div className=" mt-5c flex-wrapper">
        {cart.map((item) => (
          <CartCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
