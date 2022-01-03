import "./MyFooter.css";

import { NavLink } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<div style={{ position: "relative" }}>
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

							<ul className="list-unstyled mb-0">
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
								<li>
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
							</ul>
						</Col>
					</Row>
				</Container>
			</footer>
		</div>
	);
};

export default Footer;
