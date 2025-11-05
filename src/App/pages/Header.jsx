import { NavLink, Outlet } from "react-router";
import "./header.css";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div style={{display:'flex',alignItems:'center'}}>
          {/* <NavLink className="headerlogo"> */}
        <img src={require("../images/car.png")} style={{width:'50px',height:'50px'}} />
          <h2 style={{marginLeft:'12px'}}>BillaCar</h2>
          {/* </NavNavLink> */}
        </div>

        <div className="second">
          <ul className="body">
            <li>
              <NavLink className={({isActive})=>isActive?'custom-active link':'link'}  to="/">
                <h2>Home</h2>
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/profile">
                <h2>Profile</h2>
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about">
                <h2>About</h2>
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/college">
                <h2>College</h2>
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/user">
                <h2>User</h2>
              </NavLink>
            </li>

            <li>
              <NavLink className="link" to="/product">
                <h2>Product</h2>
              </NavLink>
            </li>

            <li>
              <NavLink className="link" to="/portfolio">
                <h2>Portfolio</h2>
              </NavLink>
            </li>

            <li>
              <NavLink className="link" to="/productlogin">
                <h2>Login</h2>
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
