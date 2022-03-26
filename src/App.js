import './App.css';
import Homepage from './pages/homepage/hompPage.component';
import { Route ,Routes,Link} from 'react-router-dom';



const Jackets=()=>{
  return(
    <h1>jackets page</h1>
  )
}
const Hatspage=()=>{
  return(
    <h1>Hats page</h1>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='hats' element={<Hatspage/>}/>
        <Route path='jackets' element={<Jackets/>}/>
      </Routes>
      
    
  </div>
  );
}


export default App;
