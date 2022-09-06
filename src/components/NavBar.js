import  Logo  from "../assets/rym.png"
import  Logo1  from "../assets/rym1.png"
import { Link } from 'react-router-dom'
import Form from './Form';
import Home from './Home';
import Users from './Users';

import "./navbar.css"

const NavBar = () => {
    return (
        <div className='nav-cont'>
          
          <nav className="nav-bar">
            <Link className="link" to='/' element={<Home />}>Home</Link>
            <Link className="link" to='/form' element={<Form />}>Formulario</Link>
            <img className="nav-logo" src={Logo1} />
            <Link className="link" to='/users' element={<Users />}>Users</Link> 
            <Link className="link" to='/api' >R&M API</Link> 

          </nav>
        </div>
    );
  }
  
  export default NavBar;