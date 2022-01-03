import HomePage from "./components/Pages/myHomePage/myHomePage";
import Communication from "./components/Pages/myCommunication/myCommunication";
import QNA from "./components/Pages/myQNA/myQNA";
import MyLoginPage from "./components/Pages/myLoginPage/MyLoginPage";
import MyProfilePage from "./components/Pages/MyProfilePage/MyProfilePage";

import TheNav from "./components/generalComponents/myNav/myNav";
import Footer from "./components/generalComponents/MyFooter/MyFooter";

import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<TheNav />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/new_application" element={<HomePage />} />
				<Route
					path="/how_to_create_new_application"
					element={<HomePage />}
				/>
				<Route path="/qna" element={<QNA />} />
				<Route path="/communication" element={<Communication />} />
				<Route path="/loginPage" element={<MyLoginPage />} />
				<Route path="/profile" element={<MyProfilePage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
