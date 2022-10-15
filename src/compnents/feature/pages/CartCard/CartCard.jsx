import "./CartCard.css";
import React from "react";

function CartCard({ item }) {
  return (
    <div className="cart-card  container   ">
      <div className="cartcontainer text-center container">
        <img src={item.imag} alt="" />

        <p>{item.titel}</p>


        <p className="price text-lg-center">{item.price}</p>
        <span className="amount  text-lg-center">{item.amount}</span>
        <buton className="minosBTR  text-lg-center">-</buton>
        <buton className="plosBTR  text-lg-center">+</buton>
        <buton className="removeBTR  text-lg-center">remove</buton>
      </div>
    </div>
  );
}

export default CartCard;
