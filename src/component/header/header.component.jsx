import React from "react";
import { ReactComponent as Logo } from "../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHiddden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { OptionLink, OptionDiv,LogoContainer,OptionsContainer,HeaderContainer} from "./header.styles";

const Header = ({currentUser,hidden}) => {
  return  (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/shop">
          CONTACT
        </OptionLink>
        {
          currentUser ?
          <OptionDiv onClick={()=>signOut(auth)}>SIGN OUT</OptionDiv>
          :
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        }
       
        <CartIcon/>
      </OptionsContainer>
      { hidden ? null :
        <CartDropdown/>}    
        </HeaderContainer>
  );
  
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHiddden
})
//used styled component instead of normal css files
export default connect(mapStateToProps)(Header);
