import MyButton from "../../generalComponents/MyButton/MyButton"
import MyBreadcrumb from "../../generalComponents/MyBreadcrumb/MyBreadcrumb";
import MySearchBar from "../../generalComponents/mySearchBar/mySearchBar";

const HomePage = () => {
	return (
		<div>
		<MyBreadcrumb/>
		<h1>This is the home page</h1>
		<MySearchBar/>
		<MyButton/>
		</div>
	);
};

export default HomePage;
