import "./myHomePage.css";
import img from "../../../../assets/bgImage.jpg";
import MyButton from "../../../generalComponents/MyButton/MyButton";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const HomePage = () => {
	useEffect(() => {
		localStorage.removeItem("was_in_new_app");
	}, []);
	
	const [goToNewApp, setGoToNewApp] = useState(false);

	if (goToNewApp) {
		return <Navigate to="/myNewAppF/:id" />;
	}

	return (
		<div class="external-home">
			<div class="internal-home">
				<img class="bgimg" src={img}></img>
				<div class="on-top">
					<div class="on-top-first">
						<span>
							Διεπιστημονικός Οργανισμός Αναγνώρισης Τίτλων
							Ακαδημαϊκών και πληροφόρισης
						</span>
						<MyButton
							btn_color="#A8A8A8"
							txt_color="black"
							curr_msg="Κάνε αίτηση τώρα!"
							funcc={() => {
								setGoToNewApp(true);
							}}
						/>
					</div>
					<div class="on-top-second">
						Κάνε αναγνώριση του πτυχίου σου εύκολα, γρήγορα και
						ηλεκτρονικά!
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
