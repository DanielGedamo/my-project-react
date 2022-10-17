import "./ProductCard.css";
import React from "react";
import {productData}  from "../../../../Services/ProductData";

function ProductCard({item,setCart,cart}) {

  const addTOcrt=(obj)=>{
if(cart.indexOf(obj)!= -1)return;
setCart([...cart,obj])
  }
  return (
    <>
      <div className=" ProductCard card  col-sm-4 mt-3 bg-Secondary  mb-3 ">
        <div className="productPic img-top w-75 h-50">
          <img className="card-img-top" src={item.imag} alt="" />
        </div>
        <div className="productText mt-4">
          <p>{item.titel}</p>
          <p>{item.price}</p>
        </div>
        <button onClick={()=>addTOcrt(item)}>add item</button>
      </div>
    </>
  );
}

export default ProductCard;
