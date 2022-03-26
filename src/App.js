import './App.css';
import Homepage from './pages/homepage/hompPage.component';
import { Route ,Routes,Link} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='shop' element={<ShopPage/>}/>
      
      </Routes>
      
    
  </div>
  );
}


export default App;
