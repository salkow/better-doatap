import { NavLink, Link } from "react-router-dom";

import logo from "../../../doatap-logo.png";
import user_icon from "../../../user-icon.png";
import MySearchBar from "../../generalComponents/mySearchBar/mySearchBar";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import "./myNav.css";

const TheNav = () => {
	return (
		<Navbar
			bg="dark"
			variant="dark"
			expand="lg"
			style={{ fontSize: "18px" }}
		>
			<Container>
				<Navbar.Brand>
					<Link className="navbar-brand" to="/">
						<img
							src={logo}
							alt="doatap logo"
							width="35"
							height="35"
						/>
					</Link>
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
							to="/new_application"
						>
							Είσοδος
						</NavLink>

						<NavLink
							className="nav-brand mt-1 selected"
							to="/new_application"
						>
							<img
								src={user_icon}
								alt="doatap logo"
								width="35"
								height="35"
							/>
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default TheNav;
