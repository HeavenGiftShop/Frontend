import { Link } from "react-router-dom" 
import"./Navbar.css"
export const Navbar =() => {
return(<div> 
<nav className="nav">
    <button><Link to="/">Home</Link></button>
    <button> <Link to="/Man">Man</Link></button>
    <button> <Link to="/Woman">Woman</Link></button>
    <button> <Link to="/Sign_in">Sign_in</Link></button>
    <button><Link to="/Sign_up">Sign_up</Link></button>
    </nav>
  </div>)
};