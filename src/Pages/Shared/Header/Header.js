
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";




import { Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  
  
  const { user, logOut } = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light fontWeight">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              height="60"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center fw-bold">
              <NavLink className="nav-link" aria-current="page" exact to="/">
                Home
              </NavLink>

              <NavLink className="nav-link" aria-current="page" exact to="/all-bikes">
                All Bikes
              </NavLink>

             

              

             
                 

              {user.email
                ? [

                  <NavLink className="nav-link" aria-current="page" exact to="/dashboard">
                Dashboard
              </NavLink>,
                  <p key={user.email} className="mt-2 mx-3 mb-lg-0 mb-3">
                      {user.displayName}
                    </p>,
                    <Button
                      key="logoutkey"
                      onClick={logOut}
                      className="rounded-pill btn-dark orange"
                      variant="outline-danger"
                    >
                      Logout<i className="fas fa-sign-out-alt"></i>
                    </Button>,
                    
                  ]
                : [
                    <NavLink className="nav-link" to="/login" key="loginkey">
                      {" "}
                      <i className="fas fa-sign-in-alt"></i> Login
                    </NavLink>,
                    <NavLink
                      
                      className="nav-link mx-2 bg-orange rounded-pill orange"
                      to="/register"
                      key="namekey"
                    >
                      Register
                    </NavLink>,
                  ]}
                  
            </ul>
          </div>
        </div>
      </nav>
      <hr/>
    </>
  );
};

export default Header;