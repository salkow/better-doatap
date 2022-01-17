import MyBreadcrumb from "../../generalComponents/MyBreadcrumb/MyBreadcrumb";

import { Container } from "react-bootstrap";

const HowToCreateANewApplication = () => {
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
						<ol>
							<li>Να συνδεθείς ή να εγγραφείς στην σελίδα.</li>
							<li>Να πλοηγηθείς στην σελίδα 'Κάνε αίτηση'.</li>
							<li>Να συμπληρώσεις τον τύπο του πτυχίου σου.</li>
							<li>
								Να συμπληρώσεις την χώρα, το πανεπιστήμιο και το
								τμήμα από το οποίο το οποίο πήρες πτυχίο.
							</li>
							<li>Να πας στην επόμενη καρτέλα.</li>
							<li>
								Να συμπληρώσεις το πανεπιστήμιο και το τμήμα στο
								οποίο θέλεις να γίνει η αντιστοίχιση.
							</li>
							<li>Να πας στην επόμενη καρτέλα.</li>
							<li>Να ανεβάσεις το πτυχίο σου.</li>
							<li>Να πατήσεις οριστική υποβολή.</li>

							<div className="pt-4">
								Είσαι έτοιμος!
								<br />
								Μπορείς να δεις την κατάσταση της αίτησής σου
								στην καρτέλα "Οι Αιτήσεις μου".
								<br />
								Θα σου σταλθεί email και μύνημα στην περίπτωση
								που εγκριθεί ή απορριφθεί η αίτησή σου.
							</div>
						</ol>
					</h5>
				</Container>
			</Container>
		</div>
	);
};

export default HowToCreateANewApplication;
