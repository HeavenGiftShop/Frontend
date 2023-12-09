import "bootstrap-icons/font/bootstrap-icons.css";
import CartPage from './Pages/CartPage';

import "./App.css";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import * as ROUTES from './Routes';
import Nav from "./Component/nav";


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path={ROUTES.CartPage}  element ={<CartPage />}/>
        
        
      </Routes>
    </Router>
    
   
  )}

export default App;
