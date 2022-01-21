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
		<div className="external-home">
			<div className="internal-home">
				<img className="bgimg" src={img} alt="home page background image"></img>
				<div className="on-top">
					<div className="on-top-first">
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
					<div className="on-top-second">
						Κάνε αναγνώριση του πτυχίου σου εύκολα, γρήγορα και
						ηλεκτρονικά!
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
