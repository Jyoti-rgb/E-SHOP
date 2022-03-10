import React from 'react'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Header from '../Header/Header';
import "./Checkout.css"
import Subtotal from '../Subtotal/Subtotal'
function Checkout() {
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />
          <div>
            <h2 className="checkout__title"> Your Shopping Basket </h2>
            
              <CheckoutProduct/>
          </div>
        </div>
        <div className="checkout__right">
            <Subtotal />
            </div>
      </div>
    </>
  );
}

export default Checkout