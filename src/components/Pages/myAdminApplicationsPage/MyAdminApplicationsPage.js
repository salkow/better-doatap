import './MyAdminApplicationsPage.css';

import MyBreadcrumb from '../../generalComponents/MyBreadcrumb/MyBreadcrumb';
import axiosInstance from "../../../axios";

import { useEffect, useState } from "react";

import MyAdminApp from './components/MyAdminApp';

const MyAdminApplicationsPage = () => 
{
  const [data, setData] = useState([])

  useEffect(() => {
      axiosInstance
        .get(`applications/admin/`)
        .then((res) => {
          console.log(res.data);
          setData(res.data)
        });
    }, []);

    const myBread = [{first: "/", second: "Αρχική"}, {second: "Υποβληθείσες αιτήσεις"}]
    
    return (
      <div>
        <MyBreadcrumb array={myBread}/>
        <div className="external">
          <div className="internal">
            <div className="top">
              <span id="underlined">Υποβληθείσες αιτήσεις</span>
            </div>
            <div className="middle">
              {data.map((item, index) => (
                <MyAdminApp key={item.id} id={item.id} name={item.name} Fname={""} Lname={""} />
              ))}
            </div>
          </div>
        </div>
      </div>
	);
};

export default MyAdminApplicationsPage;

// [
// 	{
// 		"diploma": "http://127.0.0.1:8000/media/media/user_1/ToDo.txt",
// 		"id": 14,
// 		"name": "",
// 		"is_submitted": false,
// 		"progress": "N",
// 		"origin_country": "Greece",
// 		"origin_university": "Greece Uni 1",
// 		"origin_department": "Gree Uni 1 Dep 1",
// 		"destination_university": null,
// 		"destination_department": null,
// 		"type_of_diploma": "B",
// 		"reasons_for_declination": null,
// 		"extra_subject": null
// 	},
// 	{
// 		"diploma": "http://127.0.0.1:8000/media/media/user_1/ToDo_hSqf5Vx.txt",
// 		"id": 15,
// 		"name": "",
// 		"is_submitted": false,
// 		"progress": "N",
// 		"origin_country": "Greece",
// 		"origin_university": "Greece Uni 1",
// 		"origin_department": "Gree Uni 1 Dep 1",
// 		"destination_university": null,
// 		"destination_department": null,
// 		"type_of_diploma": "B",
// 		"reasons_for_declination": null,
// 		"extra_subject": null
// 	}
// ]
