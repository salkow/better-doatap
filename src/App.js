import HomePage from "./components/Pages/myHomePage/myHomePage";
import Communication from "./components/Pages/myCommunication/myCommunication";
import QNA from "./components/Pages/myQNA/myQNA";
import MyLoginPage from "./components/Pages/myLoginPage/MyLoginPage";
import MyProfilePage from "./components/Pages/myProfilePage/MyProfilePage";
import MyRegisterPage from "./components/Pages/myRegisterPage/MyRegisterPage";
import HowToCreateANewApplication from "./components/Pages/myHowToCreateANewApplication/myHowToCreateANewApplication";

import MyMyApplicationPage from "./components/Pages/myMyApplicationPage/MyMyApplicationPage";

import MyNewAppFirst from "./components/Pages/myNewApplicationPage/Pages/user/firstPage/MyNewAppFirst";
import MyNewAppSecond from "./components/Pages/myNewApplicationPage/Pages/user/secondPage/MyNewAppSecond";
import MyNewAppThird from "./components/Pages/myNewApplicationPage/Pages/user/thirdPage/MyNewAppThird";

// import MyAdminAppFirst from "./components/Pages/myNewApplicationPage/Pages/admin/firstPage/MyAdminAppFirst";
import MyAdminAppFirst from "./components/Pages/myNewApplicationPage/Pages/admin/firstPage/MyAdminAppFirst";
import MyAdminAppSecond from "./components/Pages/myNewApplicationPage/Pages/admin/secondPage/MyAdminAppSecond";
import MyAdminAppThird from "./components/Pages/myNewApplicationPage/Pages/admin/thirdPage/MyAdminAppThird";

import TheNav from "./components/generalComponents/myNav/myNav";
import Footer from "./components/generalComponents/MyFooter/MyFooter";

import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem("access_token") != null
	);

	const [isAdmin, setIsAdmin] = useState(false);

	return (
		<BrowserRouter>
			<TheNav
				loggedIn={loggedIn}
				setLoggedIn={setLoggedIn}
				isAdmin={isAdmin}
			/>
			<div className="gen-space content">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/new_application" element={<HomePage />} />
					<Route
						path="/how_to_create_new_application"
						element={<HowToCreateANewApplication />}
					/>
					<Route path="/qna" element={<QNA />} />
					<Route path="/communication" element={<Communication />} />
					<Route
						path="/loginPage"
						element={
							<MyLoginPage
								setLoggedIn={setLoggedIn}
								isAdmin={isAdmin}
								setIsAdmin={setIsAdmin}
							/>
						}
					/>
					<Route path="/profile" element={<MyProfilePage />} />
					<Route path="/register" element={<MyRegisterPage />} />
					<Route
						path="/myApplications"
						element={<MyMyApplicationPage />}
					/>

					<Route path="/myNewAppF/:id" element={<MyNewAppFirst loggedIn={loggedIn} />} />
					{/* <Route path="/myNewAppS" element={<MyNewAppSecond />} />
					<Route path="/myNewAppT" element={<MyNewAppThird />} /> */}

					{/* <Route path="/myApplications" element={<MyMyApplicationPage />} /> */}

					<Route path="/myAdminAppF" element={<MyAdminAppFirst />} />
					<Route path="/myAdminAppS" element={<MyAdminAppSecond />} />
					<Route path="/myAdminAppT" element={<MyAdminAppThird />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
