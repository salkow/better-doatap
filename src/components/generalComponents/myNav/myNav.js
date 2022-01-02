import { NavLink } from "react-router-dom";

import logo from "../../../doatap-logo.png";
import user_icon from "../../../user-icon.png";
import MySearchBar from "../../generalComponents/mySearchBar/mySearchBar";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import "./myNav.css";

const TheNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="doatap logo" width="35" height="35" />
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/new_application"
            >
              Κάνε αίτηση
            </NavLink>

            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/how_to_create_new_application"
            >
              Πώς να κάνω αίτηση
            </NavLink>

            <NavDropdown title="Πληροφορίες">
              <NavDropdown.Item>
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/communication"
                >
                  Επικοινωνία
                </NavLink>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/qna"
                >
                  Συχνές ερωτήσεις
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <MySearchBar/> 

          <Nav>
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/new_application"
            >
              Είσοδος
            </NavLink>

            <NavLink
              exact
              activeClassName="active"
              className="nav-brand"
              to="/new_application"
            >
              <img src={user_icon} alt="doatap logo" width="35" height="35" />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// const Nav = () => {
//   return (
//     <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">
//           <img src={logo} alt="Logo" width="35" height="35" />
//         </NavLink>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 activeClassName="active"
//                 className="nav-link"
//                 to="/new_application"
//               >
//                 Κάνε αίτηση
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink
//                 exact
//                 activeClassName="active"
//                 className="nav-link"
//                 to="/how_to_create_new_application"
//               >
//                 Πώς να κάνω αίτηση
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <Dropdown style={{ marginTop: "2%" }}>
//                 <Dropdown.Toggle
//                   variant="dark"
//                   id="dropdown-basic"
//                   style={{
//                     color: "darkgray",
//                     boxShadow: "none",
//                     border: "none",
//                     backgroundColor: "#212529",
//                   }}
//                 >
//                   Πληροφορίες
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu variant="dark">
//                   <Dropdown.Item>
//                     <NavLink
//                       exact
//                       activeClassName="active"
//                       className="nav-link"
//                       to="/communication"
//                     >
//                       Επικοινωνία
//                     </NavLink>
//                   </Dropdown.Item>

//                   <Dropdown.Item>
//                     <NavLink
//                       exact
//                       activeClassName="active"
//                       className="nav-link"
//                       to="/qna"
//                     >
//                       Συχνές ερωτήσεις
//                     </NavLink>
//                   </Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </li>

//             <li id="user-icon">
//               <NavLink className="navbar-item" to="/">
//                 <img src={user_icon} alt="Logo" width="35" height="35" />
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

export default TheNav;
