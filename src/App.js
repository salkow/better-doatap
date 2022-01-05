import HomePage from "./components/Pages/myHomePage/myHomePage";
import Communication from "./components/Pages/myCommunication/myCommunication";
import QNA from "./components/Pages/myQNA/myQNA";
import MyLoginPage from "./components/Pages/myLoginPage/MyLoginPage";
import MyProfilePage from "./components/Pages/myProfilePage/MyProfilePage";
import MyRegisterPage from "./components/Pages/myRegisterPage/MyRegisterPage";
import MyMyApplicationPage from "./components/Pages/myMyApplicationPage/MyMyApplicationPage";

import TheNav from "./components/generalComponents/myNav/myNav";
import Footer from "./components/generalComponents/MyFooter/MyFooter";

import "bootstrap/dist/css/bootstrap.min.css";



import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<TheNav />
			<div className="gen-space">
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
					<Route path="/register" element={<MyRegisterPage />} />
					<Route path="/myApplications" element={<MyMyApplicationPage />} />

				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
