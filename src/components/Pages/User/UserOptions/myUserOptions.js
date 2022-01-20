import MyBreadcrumb from "../../../generalComponents/MyBreadcrumb/MyBreadcrumb";

import { Container, Card, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

const UserOptions = ({ isAdmin }) => {
	const myBread = [
		{ first: "/", second: "Αρχική" },
		{ second: "Επιλογές προφίλ" },
	];

	return (
		<div>
			<MyBreadcrumb array={myBread} />

			<div className="external">
				<div className="internal">
					<div className="top">
						<span id="underlined">Επιλογές προφίλ</span>
					</div>
				</div>
			</div>

			<Container>
				<Container>
					<Row>
						<Col>
							<Link
								to="/profile"
								style={{
									color: "inherit",
									textDecoration: "inherit",
								}}
							>
								<Card>
									<Card.Header as="h5">Προφίλ</Card.Header>
									<Card.Body>
										<Card.Text>
											Εδώ μπορείς να δεις και να αλλάξεις
											τις προσωπικές σου πληροφορίες.
										</Card.Text>
									</Card.Body>
								</Card>
							</Link>
						</Col>
						<Col>
							<Link
								to={
									isAdmin === true
										? "/myAdminApplications"
										: "/myApplications"
								}
								style={{
									color: "inherit",
									textDecoration: "inherit",
								}}
							>
								<Card>
									<Card.Header as="h5">
										{isAdmin && (
											<div>Υποβληθείσες Αιτήσεις</div>
										)}
										{!isAdmin && <div>Οι αιτήσεις μου</div>}
									</Card.Header>
									<Card.Body>
										<Card.Text>
											{isAdmin && (
												<div>
													Εδώ μπορείς να δεις τις
													αιτήσεις των χρηστών.
												</div>
											)}
											{!isAdmin && (
												<div>
													Εδώ μπορείς να δεις και να
													αλλάξεις τις αιτήσεις σου.
												</div>
											)}
										</Card.Text>
									</Card.Body>
								</Card>
							</Link>
						</Col>
					</Row>
				</Container>
			</Container>
		</div>
	);
};

export default UserOptions;
