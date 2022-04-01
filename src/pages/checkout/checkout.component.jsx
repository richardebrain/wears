import React from "react";
import './checkout.styles.scss'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../component/checkout-item/checkout-item";

const CheckoutPage =({cartItems,total})=>(
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span className="product">
          Product
        </span>
      </div>
      <div className="header-block">
        <span className="description">
          Description
        </span>
      </div>
      <div className="header-block">
        <span className="quantity">
          Quantity
        </span>
      </div>
      <div className="header-block">
        <span className="price">
          price
        </span>
      </div>
      <div className="header-block">
        <span className="remove">
          Remove
        </span>
      </div>
     
    </div>
    {cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}

      <div className="total"><span>TOTAL : $ {total}</span></div>

    
  </div>
)
const mapStateToProps=createStructuredSelector({
  cartItems:selectCartItems,
  total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)