import './UserApplicationListPage.css';
import MyBreadcrumb from '../../../generalComponents/MyBreadcrumb/MyBreadcrumb';
import ApplicationCard from './components/ApplicationCard';
import axiosInstance from "../../../../axios";

import { useEffect, useState } from "react";

const UserApplicationListPage = () => 
{
  const [data, setData] = useState([])

  const initFunc = () =>{
    axiosInstance
        .get(`applications/`)
        .then((res) => {
          console.log(res.data)
          setData(res.data)
        });
  }

  useEffect(() => {
      initFunc();
    }, []);

    const deleteApp = (id) =>{
      axiosInstance
      .delete('applications/'+id+'/')
      .then(()=>{
        initFunc();
      })
    }

    const myBread = [{first: "/", second: "Αρχική"}, {second: "Οι αιτήσεις μου"}]
    
    return (
      <div>
        <MyBreadcrumb array={myBread}/>
        <div className="external">
          <div className="internal">
            <div className="top">
              <span id="underlined">Οι αιτήσεις μου</span>
            </div>
            <div className="middle">
      
				{data.map((item, index) => (
              <div key={item.id} className="middle-middle">
                <ApplicationCard id={item.id} name={item.name} isFinalized={item.is_submitted} status={item.progress} tool_txt={item.reasons_for_declination} otherUni={item.destination_university_1} otherDep={item.destination_department_1} class_txt={item.extra_subject}/>
                {!(item.is_submitted) &&
                  <button
                    className="chevronButton"
                    type="submit"
                    onClick={()=>{deleteApp(item.id)}}
                    >
                    <i className="material-icons chevron-item">
                      {" "}
                      close{" "}
                    </i>
                  </button>
                }
              </div>
        ))}
            </div>
          </div>
        </div>
      </div>
	);
};

export default UserApplicationListPage;

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
