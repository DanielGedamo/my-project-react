import "./CartCard.css";
import React from "react";
import { useState } from "react";
import { cartContext } from "../../../../context/cartContext";
import { useEffect } from "react";

function CartCard({ item,sumPrise,setPrice,setCart,cart }) {
 const remove =(id)=>{
  const array =cart.filter((item)=>item.id!==id);
  setCart(array);
  sumPrise();
 }

  const hendelAmount=(item,num)=>{
    const itemIndex = cart.indexOf(item);
    const newCart = cart ;
   newCart[itemIndex].amount+=num
   if(newCart[itemIndex].amount ==0)newCart[itemIndex].amount=1
   setCart([...newCart])
  }
 
  return (
    <div className="cart-card  container   ">
      <div className="cartcontainer text-center container">
        <img src={item.imag} alt="" />

        <p>{item.titel}</p>


        <p className="price text-lg-center ">{item.price}</p>
        <span className="amount  text-lg-center ">{item.amount}</span>
        <div><button onClick={()=>hendelAmount(item,-1)}className=" minosBTR  text-lg-center btn bg-info">-</button></div>
        <buton onClick={()=>hendelAmount(item,1)} className="plosBTR  text-lg-center btn bg-info">+</buton>
         <div><buton onClick={()=>remove(item.id)} className="removeBTR  text-lg-center btn bg-info">remove</buton></div>
      </div>
    </div>
  );
}

export default CartCard;
