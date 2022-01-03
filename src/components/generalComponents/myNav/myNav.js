import { NavLink } from "react-router-dom";

import logo from "../../../assets/doatap-logo.png";
import user_icon from "../../../assets/user-icon.png";
import MySearchBar from "../../generalComponents/mySearchBar/mySearchBar";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import "./myNav.css";

const TheNav = () => {
	return (
		<Navbar
			bg="dark"
			variant="dark"
			expand="lg"
			style={{ fontSize: "22px" }}
		>
			<Container>
				<Navbar.Brand>
					<NavLink className="navbar-brand" to="/">
						<img
							src={logo}
							alt="doatap logo"
							width="55"
							height="55"
						/>
					</NavLink>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink
							className="nav-link selected"
							to="/new_application"
						>
							Κάνε αίτηση
						</NavLink>

						<NavLink
							className="nav-link selected"
							to="/how_to_create_new_application"
						>
							Πώς να κάνω αίτηση
						</NavLink>

						<NavDropdown title="Πληροφορίες">
							<NavDropdown.Item>
								<NavLink
									className="nav-link selected"
									to="/communication"
								>
									Επικοινωνία
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<NavLink
									className="nav-link selected"
									to="/qna"
								>
									Συχνές ερωτήσεις
								</NavLink>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>

					<MySearchBar />

					<Nav>
						<NavLink
							className="nav-link selected"
							to="/loginPage"
						>
							Είσοδος
						</NavLink>

						<NavLink
							className="nav-brand mt-1 selected"
							to="/profile"
						>
							<img
								src={user_icon}
								alt="doatap logo"
								width="45"
								height="45"
							/>
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default TheNav;
