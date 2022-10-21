import "./CartCard.css";
import React from "react";
import { useState } from "react";
import { cartContext } from "../../../../context/cartContext";
import { useEffect } from "react";
// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCol,
//   MDBContainer,
//   MDBIcon,
//   MDBInput,
//   MDBRadio,
//   MDBRow,
//   MDBTable,
//   MDBTableBody,
//   MDBTableHead,
// } from "mdb-react-ui-kit";

function CartCard({ item, sumPrise, setPrice, setCart, cart }) {
  const remove = (id) => {
    const array = cart.filter((item) => item.id !== id);
    setCart(array);
    sumPrise();
  };

  const hendelAmount = (item, num) => {
    const itemIndex = cart.indexOf(item);
    const newCart = cart;
    newCart[itemIndex].amount += num;
    if (newCart[itemIndex].amount == 0) newCart[itemIndex].amount = 1;
    setCart([...newCart]);
  };

  return (
    <div className="cart-card  containerDiv ">
      <div className="cartcontainer text-center container row-sm-12  ">
        <div className=" w-50 ">
          <div className="imgDiv ">
            <img src={item.imag} alt="" />
          </div>
          <h2>{item.titel}</h2>
          <div className="d-flex justify-content-between text-center">
            <p className="price  ">${item.price}</p>
            
              <button
                onClick={() => hendelAmount(item, -1)}
                className=" minosBTR  text-lg-center btn bg-info"
              >
                -
              </button>
            
            <button className="amount  text-lg-center ">{item.amount}</button>

            <buton
              onClick={() => hendelAmount(item, 1)}
              className="plosBTR  text-lg-center btn bg-info"
            >
              +
            </buton>
            
              <buton
                onClick={() => remove(item.id)}
                className="removeBTR  text-md-center btn bg-danger"
              >
                remove
              </buton>
            
          </div>
        </div>
      </div>
      </div>
  

/* <div>

<MDBCardBody className="p-4">
  <MDBRow>
    <MDBCol md="6" lg="4" xl="3" className="mb-4 mb-md-0">
      <form>
        <div className="d-flex flex-row pb-3">
          <div className="d-flex align-items-center pe-2">
            <MDBRadio
              type="radio"
              name="radio1"
              checked
              value=""
              aria-label="..."
            />
          </div>
          <div className="rounded border w-100 p-3">
            <p className="d-flex align-items-center mb-0">
              <MDBIcon
                fab
                icon="cc-mastercard fa-2x text-dark pe-2"
              />
              Credit Card
            </p>
          </div>
        </div>
        <div className="d-flex flex-row pb-3">
          <div className="d-flex align-items-center pe-2">
            <MDBRadio
              type="radio"
              name="radio1"
              checked
              value=""
              aria-label="..."
            />
          </div>
          <div className="rounded border w-100 p-3">
            <p className="d-flex align-items-center mb-0">
              <MDBIcon fab icon="cc-visa fa-2x text-dark pe-2" />
              Debit Card
            </p>
          </div>
        </div>
        <div className="d-flex flex-row pb-3">
          <div className="d-flex align-items-center pe-2">
            <MDBRadio
              type="radio"
              name="radio1"
              checked
              value=""
              aria-label="..."
            />
          </div>
          <div className="rounded border w-100 p-3">
            <p className="d-flex align-items-center mb-0">
              <MDBIcon fab icon="cc-paypal fa-2x text-dark pe-2" />
              PayPal
            </p>
          </div>
        </div>
      </form>
    </MDBCol>
    <MDBCol md="6" lg="4" xl="6">
      <MDBRow>
        <MDBCol size="12" xl="6">
          <MDBInput
            className="mb-4 mb-xl-5"
            label="Name on card"
            placeholder="John Smiths"
            size="lg"
          />
          <MDBInput
            className="mb-4 mb-xl-5"
            label="Expiration"
            placeholder="MM/YY"
            size="lg"
            maxLength={7}
            minLength={7}
          />
        </MDBCol>

        <MDBCol size="12" xl="6">
          <MDBInput
            className="mb-4 mb-xl-5"
            label="Card Number"
            placeholder="1111 2222 3333 4444"
            size="lg"
            minlength="19"
            maxlength="19"
          />
          <MDBInput
            className="mb-4 mb-xl-5"
            label="Cvv"
            placeholder="&#9679;&#9679;&#9679;"
            size="lg"
            minlength="3"
            maxlength="3"
            type="password"
          />
        </MDBCol>
        </MDBRow>
      
     </MDBCol>
    </MDBRow>
  </MDBCardBody> 

  </div> */

              
     ); 
  }

export default CartCard;
                
