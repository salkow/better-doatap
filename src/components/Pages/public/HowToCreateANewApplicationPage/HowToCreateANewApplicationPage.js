import MyBreadcrumb from "../../../generalComponents/MyBreadcrumb/MyBreadcrumb";

import { Container, ListGroup } from "react-bootstrap";

const HowToCreateANewApplicationPage = () => {
	const myBread = [
		{ first: "/", second: "Αρχική" },
		{ second: "Πώς να κάνω αίτηση" },
	];

	return (
		<div>
			<MyBreadcrumb array={myBread} />

			<div className="external">
				<div className="internal">
					<div className="top">
						<span id="underlined">Πώς κάνω αίτηση</span>
					</div>
				</div>
			</div>

			<Container>
				<Container>
					<h5>
						<b>Για να κάνεις αίτηση θα χρειαστείς:</b>
						<ListGroup variant="flush" as="ol" numbered>
							<ListGroup.Item as="li">
								Να συνδεθείς ή να εγγραφείς στην σελίδα.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								Να πλοηγηθείς στην σελίδα 'Κάνε αίτηση'.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								Να συμπληρώσεις τον τύπο του πτυχίου σου.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								Να συμπληρώσεις την χώρα, το πανεπιστήμιο και το
								τμήμα από το οποίο το οποίο πήρες πτυχίο.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								Να πας στην επόμενη καρτέλα.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								Να συμπληρώσεις το πανεπιστήμιο και το τμήμα στο
								οποίο θέλεις να γίνει η αντιστοίχιση.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								Να πας στην επόμενη καρτέλα.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								Να ανεβάσεις το πτυχίο σου.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								Να πατήσεις οριστική υποβολή.
							</ListGroup.Item>

							<div className="pt-4">
								Είσαι έτοιμος!
								<br />
								Μπορείς να δεις την κατάσταση της αίτησής σου,
								στην καρτέλα "Οι Αιτήσεις μου".
								<br />
								Θα σου σταλθεί email και μύνημα στην περίπτωση
								που εγκριθεί ή απορριφθεί η αίτησή σου.
							</div>
						</ListGroup>
					</h5>
				</Container>
			</Container>
		</div>
	);
};

export default HowToCreateANewApplicationPage;
