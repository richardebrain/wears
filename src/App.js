import './App.css';
import Homepage from './pages/homepage/hompPage.component';
import { Route, Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import { auth } from './firebase/firebase.utils';
import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }
  unSubscribeFromAuth=null;
  componentDidMount() {
    this.unSubscribeFromAuth=onAuthStateChanged(auth, (user => {
      this.setState({ currentUser: user})
      console.log(user)
    }))
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='signin' element={<SignInAndSignUpPage />} />

        </Routes>


      </div>
    )
  }
}


export default App;
