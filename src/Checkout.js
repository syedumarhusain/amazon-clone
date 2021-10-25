import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket}]=useStateValue();
    return <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src="https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2fcontent%2ffake-20200305040317765.jpg&h=570&w=855&q=100&v=20170226&c=1" alt=""/>
          {basket?.length ===0 ?(
            <div>
              <h2>Your shopping basket is empty</h2>
              <p>You have no iteam in your basket to buy one or more items, click "Add to basket" next to the item.</p>
            </div>
          ):(
            <div>
              <h2 className="checkout_title">Your shopping basket</h2>
             {basket?.map((item)=>(
              <CheckoutProduct 
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                 />
                 ))}
            </div>
          )}
          </div>
          {basket.length >0 && (
            <div className="checkout_right">
              <Subtotal />
            </div>

          )}
        </div>
      
    
}

export default Checkout
