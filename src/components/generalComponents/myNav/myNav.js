import { NavLink, Link, useNavigate } from "react-router-dom";

import logo from "../../../assets/doatap-logo.png";
import user_icon from "../../../assets/user-icon.png";
import MySearchBar from "../../generalComponents/mySearchBar/mySearchBar";

import { Navbar, Container, Nav, NavDropdown, Dropdown } from "react-bootstrap";

import axiosInstance from "../../../axios";

import "./myNav.css";

const TheNav = ({ loggedIn, setLoggedIn, isAdmin }) => {
	const history = useNavigate();

	const logout = async () => {
		console.log("hey");
		axiosInstance.post("user/logout/blacklist/", {
			refresh_token: localStorage.getItem("refresh_token"),
		});

		localStorage.removeItem("access_token");
		localStorage.removeItem("refresh_token");
		axiosInstance.defaults.headers["Authorization"] = null;
		setLoggedIn(false);
		history("/");
	};

	return (
		<Navbar
			bg="dark"
			variant="dark"
			expand="lg"
			style={{ fontSize: "22px" }}
		>
			<Container>
				<Navbar.Brand>
					<Link className="navbar-brand" to="/">
						<img
							src={logo}
							alt="doatap logo"
							width="55"
							height="55"
						/>
					</Link>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink className="nav-link selected" to="/myNewAppF/-1">
							Κάνε αίτηση
						</NavLink>

						<NavLink
							className="nav-link selected"
							to="/how_to_create_new_application"
						>
							Πώς να κάνω αίτηση
						</NavLink>

						<NavDropdown title="Πληροφορίες">
							<NavDropdown.Item as="div">
								<NavLink
									className="nav-link selected"
									to="/communication"
								>
									Επικοινωνία
								</NavLink>
							</NavDropdown.Item>

							<NavDropdown.Item as="div">
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
						{!loggedIn && (
							<NavLink
								style={{ paddingLeft: "15px" }}
								className="nav-link selected"
								to="/loginPage"
							>
								Είσοδος
							</NavLink>
						)}

						{loggedIn && (
							<Dropdown>
								<Dropdown.Toggle
									id="dropdown-basic"
									className="dropdown-header"
								>
									<img
										src={user_icon}
										alt="doatap logo"
										width="45"
										height="45"
									/>
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item as="div">
										<NavLink
											style={{ paddingLeft: "15px" }}
											className="nav-link selected"
											to="/profile"
										>
											Προφίλ
										</NavLink>
									</Dropdown.Item>
									{!isAdmin && (
										<Dropdown.Item as="div">
											<NavLink
												style={{ paddingLeft: "15px" }}
												className="nav-link selected"
												to="/myApplications"
											>
												Οι αιτήσεις μου
											</NavLink>
										</Dropdown.Item>
									)}

									<Dropdown.Item as="div">
										<div
											className="nav-link selected"
											onClick={logout}
											style={{ paddingLeft: "15px" }}
										>
											Έξοδος
										</div>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default TheNav;
