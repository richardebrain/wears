import './App.css';
import Homepage from './pages/homepage/hompPage.component';
import { Route, Routes, Navigate } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {

  unSubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unSubscribeFromAuth = onAuthStateChanged(auth, (async userAuth => {
      // this.setState({ currentUser: user})
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        const snapShot = await getDoc(userRef);
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
      }
      setCurrentUser(userAuth)
      // addCollectionAndDocuments('collections',collectionsArray.map(({items,title})=>({items,title})));
    }));
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.props
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='shop/*' element={<ShopPage />} />
          <Route exact path='signin' element={currentUser ? <Navigate to='/' /> : <SignInAndSignUpPage />} />
          <Route exact path='checkout' element={<CheckoutPage />} />

        </Routes>

      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
// collectionsArray:selectCollectionsForPreview
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))


})

export default connect(mapStateToProps, mapDispatchToProps)(App);