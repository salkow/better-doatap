import MyButton from "./components/MyButton/MyButton";
import MyBreadcrumb from "./components/MyBreadcrumb/MyBreadcrumb";
import MySearchBar from "./components/mySearchBar/mySearchBar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
       return (
		   <div>
			   <MyButton btn_color="brown"/>
			   <MyBreadcrumb/>
			   <MySearchBar />
		   </div>
	   );
}

export default App;
