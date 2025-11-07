import { NavLink } from "react-router-dom";
import './header.css';
// import "../App.css"; // (for your custom link styles if needed)

export default function Header() {
  return (
    <header className="header px-4 py-1">
      {/* Left: Logo */}
      <div className=" align-items-center">
        <img
          src={require("../images/car.png")}
          alt="Logo"
          className="me-2"
          style={{ width: "50px", height: "50px", alignItems: 'center' }}
        />
        <h3 className="m-0" style={{ color: "hsl(315, 84%, 41%)" }}>
          BillaCar
        </h3>
      </div>

      {/* Right: Nav Links */}
      <ul className="d-flex align-items-center list-unstyled mb-0">
        {/* Search */}
        <li className="d-flex align-items-center ms-1">
          <NavLink
            className={({ isActive }) =>
              isActive ? "custom-active text-decoration-none" : "text-decoration-none"
            }
            to="/"
          >
            <div className="d-flex align-items-center text-dark">
              <img
                src={require("../images/search.png")}
                alt="Search"
                className="me-2"
                style={{ width: "20px", height: "20px" }}
              />
              <h6 className="m-0 fw-normal">Search</h6>
            </div>
          </NavLink>
        </li>

        {/* Publish a Ride */}
        <li className="d-flex align-items-center ms-1">
          <NavLink className="text-decoration-none" to="">
            <div className="d-flex align-items-center text-dark">
              <img
                src={require("../images/plus.png")}
                alt="Publish"
                className="me-2"
                style={{ width: "20px", height: "20px" }}
              />
              <h6 className="m-0 fw-normal">Publish a ride</h6>
            </div>
          </NavLink>
        </li>

        {/* Profile */}
        <li className="d-flex align-items-center ms-1">
          <NavLink className="text-decoration-none" to="">
            <img
              src={require("../images/user.png")}
              alt="User"
              className="rounded-circle"
              style={{ width: "45px", height: "45px" }}
            />
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
