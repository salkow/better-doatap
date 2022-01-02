import { NavLink } from "react-router-dom";

import { Dropdown } from "react-bootstrap";

import logo from "../../../doatap-logo.png"

import "./myNav.css"

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-dark mb-4"
      // ref={navRef}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            // src="https://localhost:8043/images/LionLogo.png"
	  		src={logo}
            alt="Logo"
            width="35"
            height="35"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/new_application"
              >
                Κάνε αίτηση
              </NavLink>
            </li>
	  
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/how_to_create_new_application"
              >
                Πώς να κάνω αίτηση
              </NavLink>
            </li>

            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{color: "darkgray", boxShadow: "none", border: "none", backgroundColor: "#212529"}}>
                  Πληροφορίες
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">

                  <Dropdown.Item>
                    <NavLink
                      exact
                      activeClassName="active"
                      className="nav-link"
                      to="/communication"
                    >
                      Επικοινωνία
                    </NavLink>
                  </Dropdown.Item>
	  
                  <Dropdown.Item>
                    <NavLink
                      exact
                      activeClassName="active"
                      className="nav-link"
                      to="/qna"
                    >
                      Συχνές ερωτήσεις
                    </NavLink>
                  </Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
