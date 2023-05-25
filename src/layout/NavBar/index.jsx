import {NavLink, Outlet} from 'react-router-dom';
import './navbar.css';



function Nav() {
  let activeStyle = {
    textDecoration: "underline",
    color:"black",
    fontWeight: "bold",
  
  };



  return (
    <>
    <nav className="nav">
      <div className="nav-logo">
        <img className=" logo-image "    src="../../../public/images/logo.png" alt="Michael Jackson Logo"/>
      </div>
      <ul className="nav-links">
        <NavLink to="/" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Home</NavLink>
        <NavLink to="/about" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>About</NavLink>
        <NavLink to="/albums" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Albums</NavLink>
      </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Nav