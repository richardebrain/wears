import './App.css';
import Homepage from './pages/homepage/hompPage.component';
import { Route ,Routes,Link} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';

function App() {
  return (
    <div>
     <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='shop' element={<ShopPage/>}/>
        <Route path='signin' element={<SignInAndSignUpPage/>}/>
      
      </Routes>
      
    
  </div>
  );
}


export default App;
