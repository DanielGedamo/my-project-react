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
    <div className="cart d-flex justify-content-center  align-content-center">
  

      <div className=" mt-5c container-fluid ">
        {cart.map((item) => (
          <CartCard item={item} setPrice={setPrice} sumPrise={sumPrise}  setCart={setCart} cart={cart}/>
        ))}
      
      <div className=" d-flex justify-content-between"><h1>Total:{price}$</h1></div>
      </div>
    </div>
  );
}

export default Cart;
