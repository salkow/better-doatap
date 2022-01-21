import './AdminEvaluationListPage.css';

import MyBreadcrumb from '../../../generalComponents/MyBreadcrumb/MyBreadcrumb';
import axiosInstance from "../../../../axios";

import { useEffect, useState } from "react";

import EvaluationCard from './components/EvaluationCard';

const AdminEvaluationListPage = () => 
{
  const [data, setData] = useState([])

  useEffect(() => {
      axiosInstance
        .get(`applications/admin/`)
        .then((res) => {
          setData(res.data)
        });
    }, []);

    const myBread = [{second: "Υποβληθείσες αιτήσεις"}]
    
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
                <EvaluationCard key={item.id} id={item.id} name={item.name} user={item.user} />
              ))}
            </div>
          </div>
        </div>
      </div>
	);
};

export default AdminEvaluationListPage;