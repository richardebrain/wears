import './App.css';
import Homepage from './pages/homepage/hompPage.component';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';



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
          <Route path='/' element={<Homepage />} />
          <Route path='shop' element={<ShopPage />} />
          {/* <Route path='signin' element={<SignInAndSignUpPage/>}/> */}
          <Route exact path='signin' element={currentUser ? <Navigate to='/'/> : <SignInAndSignUpPage />} />

        </Routes>



      </div>
    )
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser

})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))


})

export default connect(mapStateToProps, mapDispatchToProps)(App);
{ }