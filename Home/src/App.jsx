import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ResponsiveNavbar } from './componets/Navbar';
import { Home } from './componets/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
   
    <ResponsiveNavbar/>  
    <Routes>
    <Route path='' element={<Home/>}/>  
    </Routes>    
    </BrowserRouter>
 
  ) 
}

export default App;
