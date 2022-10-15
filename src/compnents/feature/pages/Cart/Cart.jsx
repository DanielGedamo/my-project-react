import "./Cart.css";
import React, { useContext,useEffect, useState } from "react";
import { cartContext } from "../../../../context/cartContext";
import CartCard from "../CartCard/CartCard";

function Cart() {
  const { cart, setCart } = useContext(cartContext);
  const [price,setPrice] = useState(0)

  const  sumPrise= () => {
    let sum =0;
    cart.map((item)=> sum+=item.price * item.amount) ;
    setPrice(sum)
  }
  useEffect(()=>{
    sumPrise()
  })
  return (
    <div className="cart d-flex justify-content-center ">
      <h1 className="text-center">Cart</h1>

      <div className=" mt-5c flex-wrapper">
        {cart.map((item) => (
          <CartCard item={item} setPrice={setPrice} sumPrise={sumPrise}  setCart={setCart} cart={cart}/>
        ))}
      </div>
      <div>{price}</div>
    </div>
  );
}

export default Cart;
