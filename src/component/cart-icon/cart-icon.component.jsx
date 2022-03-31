import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import React from "react";
import { connect } from "react-redux";
import { toogleCartHidden } from "../../redux/cart/cart.action";
import "./cart-icon.styles.scss";
import { selectCartItemsCount } from "../../redux/cart.selectors";

const CartIcon = ({ toogleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toogleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
});
const mapStateToProps = (state) => (  
  {
  itemCount: selectCartItemsCount(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
