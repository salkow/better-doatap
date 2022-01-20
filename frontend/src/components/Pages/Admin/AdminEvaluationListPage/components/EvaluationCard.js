import './EvaluationCard.css';

import {Link} from "react-router-dom"
import axiosInstance from '../../../../../axios';

import { useEffect, useState } from "react";
const EvaluationCard = ({id, name, user}) => 
{  
    const [Fname, setFname ] = useState("");
    const [Lname, setLname ] = useState("");
    useEffect(() => {
        axiosInstance.get('user/all_profiles/'+user+'/')
        .then((res)=>{
            setFname(res.data.first_name);
            setLname(res.data.last_name);
        })
    }, [])
    return (
      <div className="external-app">
          <div className="internal-app">
              <div className="other">
                  <div className="id">
                      <span>{id}</span>
                  </div>
                  <div className="data">
                    <span>{name}</span>
                    <div className="info">
                        {Fname} {Lname}
                    </div>
                  </div>
              </div>
              <div className="edit-icon">
                <Link className="tuneButton" type="submit" to={"/myAdminAppF/" + id}>
                    <i className="material-icons tune-item"> reorder </i>
                </Link>
              </div>
          </div>
      </div>
	);
};

export default EvaluationCard;
