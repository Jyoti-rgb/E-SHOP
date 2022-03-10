import React from 'react';
import '../Subtotal/Subtotal.css';
import CurrencyFormat from 'react-currency-format'

function Subtotal(){

return(
    <>
     <div className="subtotal">
         <CurrencyFormat
             renderText= {(value) =>(
                 <>
                     <p>
                         Subtotal(0 items):<strong>$0</strong>
                     </p>
                     <small>
                         <input type="checkbox" /> This order contains a gift
                     </small>
                 </>
             )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandsSeparator={true}
         />
         <button>Proceed to Checkout</button>
     </div>
    </>
)

}
export default Subtotal;