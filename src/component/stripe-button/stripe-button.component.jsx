import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton=({price})=>{
  const priceForStripe =price *100;
  const publishabkeKey ='pk_test_51Kk7m0JlQRZq0Lv2APdoThpaV8YPm6f4cyDHpKC47TMM9TinceLDRHOp22B6Zz5pmEatV9UE7sOH7SkpHcGN8FY500aFdrkR6v';
  const onToken=token=>{
    console.log(token);
    alert('payment successful')
  }
  return(
    <StripeCheckout
    name="wears Ltd"
    label="Pay Now"
    billingAddress
    shippingAdress
    image="https://svgshare.com/i/CUz.svg"
    description={`your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishabkeKey}

    />
  )
}
export default StripeCheckoutButton