import "./MyFooter.css";

import { NavLink } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import full_logo from "../../../assets/doatap-logo-full.png";
import call from "../../../assets/call.png";

const Footer = () => {
	return (
		<div
			style={{ position: "relative", backgroundColor: "#D0CECE" }}
			className="mt-3"
		>
			<footer className="the-footer text-center footer mt-auto py-3">
				<Container className="p-4">
					<Row>
						<Col lg={3} md={6} className="mx-auto">
							<h5>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "link-secondary"
											: "link-dark"
									}
									to="/new_application"
								>
									Κάνε αίτηση
								</NavLink>
							</h5>
						</Col>

						<Col lg={3} md={6} className="mb-4 mb-md-0 mx-auto">
							<h5>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "link-secondary"
											: "link-dark"
									}
									to="/how_to_create_new_application"
								>
									Πώς κάνω αίτηση
								</NavLink>
							</h5>
						</Col>

						<Col lg={3} md={6} className="mb-4 mb-md-0 mx-auto">
							<h5>Πληροφορίες</h5>

							<ul className="list-unstyled mb-0 mt-3">
								<li className="mt-2">
									<NavLink
										className={({ isActive }) =>
											isActive
												? "link-secondary"
												: "link-dark"
										}
										to="/communication"
									>
										Επικοινωνία
									</NavLink>
								</li>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive
												? "link-secondary"
												: "link-dark"
										}
										to="/qna"
									>
										Συχνές ερωτήσεις
									</NavLink>
								</li>
							</ul>
						</Col>
					</Row>

					<Row className="mt-5" md={2}>
						<Col lg={3} md={6} className="mb-4 mb-md-0 mx-auto">
							<NavLink className="navbar-brand" to="/">
								<img
									src={full_logo}
									alt="doatap full logo"
									className="the-logo"
								/>
							</NavLink>
						</Col>

						<Row md={1}>
							<Col className="mb-4 mb-md-0 mx-auto">
								<span>
									<img
										src={call}
										alt="doatap full logo"
										className="call p-0 m-0"
									/>
									<span> Αθήνα - 210-5281000</span>
								</span>
							</Col>

							<Col className="mb-4 mb-md-0 mx-auto">
								<span>
									<img
										src={call}
										alt="doatap full logo"
										className="call p-0 m-0"
									/>
									<span> Θεσσαλονίκη - 2313-501372</span>
								</span>
							</Col>
						</Row>
					</Row>
				</Container>
			</footer>
		</div>
	);
};

export default Footer;
