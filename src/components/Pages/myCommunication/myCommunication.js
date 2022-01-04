import "./myCommunication.css";

import MyBreadcrumb from "../../generalComponents/MyBreadcrumb/MyBreadcrumb";
import MyTextBox from "../../generalComponents/MyTextBox/MyTextBox";

import { Row, Col, Container } from "react-bootstrap";

const myCommunication = () => {
	const myBread = [
		{ first: "/", second: "Αρχική" },
		{ second: "Επικοινωνία" },
	];
	return (
		<div>
			<MyBreadcrumb array={myBread} />
			<div class="external">
				<div class="internal">
					<div class="top">
						<span id="underlined">Επικοινωνία</span>
					</div>
				</div>
			</div>
			<Container>
				<Row>
					<Col>
						<Container>
							<h5>
								<b>Παράρτημα του Δ.Ο.Α.Τ.Α.Π. στην Αθήνα</b>
							</h5>

							<ul>
								<li>Τηλεφωνική εξυπηρέτηση:</li>
								<ul>
									<li>
										<a href="tel:2105281000">
											{" "}
											210-5281000
										</a>
									</li>
									<li>
										Δευτέρα έως Παρασκευή, ώρες 12:30-14:00
									</li>
								</ul>
								<li>Ωρες λειτουργιας παραρτηματος:</li>
								<ul>
									<li>Δευτέρα έως Πέμπτη, ώρες 9:00-12:00</li>
								</ul>
							</ul>

							<Row>
								<b>
									Διεύθυνση: Αγ. Κωνσταντίνου 54, Τ.Κ. 104 37,
									Αθήνα
								</b>
							</Row>
							<Row>
								<iframe
									width="350"
									height="350"
									frameborder="0"
									marginwidth="0"
									src="https://www.openstreetmap.org/export/embed.html?bbox=23.7215530872345%2C37.984574350644934%2C23.72360765933991%2C37.98576455342547&amp;layer=mapnik&amp;marker=37.98517%2C23.722579999999994"
									style={{ border: "1px solid black" }}
								></iframe>
								<br />
								<small>
									<a href="https://www.openstreetmap.org/?mlat=37.98517&amp;mlon=23.72258#map=19/37.98517/23.72258">
										Δες μεγαλύτερο χάρτη.
									</a>
								</small>
							</Row>
						</Container>
					</Col>
					<Col>
						<Container>
							<h5>
								<b>
									Παράρτημα του Δ.Ο.Α.Τ.Α.Π. στην Θεσσαλονίκη
								</b>
							</h5>

							<ul>
								<li>Τηλεφωνική εξυπηρέτηση:</li>
								<ul>
									<li>
										<a href="tel:2313501372">
											{" "}
											2313-501372
										</a>
										,
									</li>
									<li>
										Δευτέρα έως Παρασκευή, ώρες 12:30-14:00
									</li>
								</ul>
								<li>Ωρες λειτουργιας παραρτηματος:</li>
								<ul>
									<li>Δευτέρα έως Πέμπτη, ώρες 9:00-12:00</li>
								</ul>
							</ul>

							<Row>
								<b>
									Διεύθυνση: Υπουργείο Μακεδονίας Θράκης –
									Διοικητήριο, T.K. 541 23, Θεσσαλονίκη
								</b>
							</Row>
							<Row>
								<iframe
									width="350"
									height="350"
									frameborder="0"
									scrolling="no"
									marginheight="0"
									marginwidth="0"
									src="https://www.openstreetmap.org/export/embed.html?bbox=22.943221628665928%2C40.64030454666005%2C22.945276200771332%2C40.641450408453906&amp;layer=mapnik&amp;marker=40.640877480015725%2C22.944248914718628"
									style={{ border: "1px solid black" }}
								></iframe>
								<br />
								<small>
									<a href="https://www.openstreetmap.org/?mlat=40.64088&amp;mlon=22.94425#map=19/40.64088/22.94425">
										Δες μεγαλύτερο χάρτη.
									</a>
								</small>
							</Row>
						</Container>
					</Col>
				</Row>

				<div class="external mt-5">
					<div class="other-internal">
						<div class="other-top">
							<span id="underlined">
								Επικοινωνήστε Μαζί μας Ηλεκτρονικά
							</span>
						</div>
					</div>
				</div>

				<Container>
					<Row>
						<Col md={{ span: 5, offset: 4}}>
							<MyTextBox txt="Ονοματεπώνυμο" type="text" />
						</Col>
					</Row>
					<Row>
						<Col md={{ span: 5, offset: 4}}>
							<MyTextBox txt="Email Address" type="text" />
						</Col>
					</Row>
				</Container>
			</Container>
		</div>
	);
};

export default myCommunication;
