import './App.css';
import Homepage from './pages/homepage/hompPage.component';
import { Route ,Routes,Link} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';

function App() {
  return (
    <div>
     <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='shop' element={<ShopPage/>}/>
      
      </Routes>
      
    
  </div>
  );
}


export default App;
