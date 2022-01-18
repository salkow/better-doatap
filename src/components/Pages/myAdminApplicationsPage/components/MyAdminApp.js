import './MyAdminApp.css';

import {Link} from "react-router-dom"
const MyAdminApp = ({id, name, Fname, Lname}) => 
{  
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
                <Link className="tuneButton" type="submit" to={"/myNewAppF/" + id}>
                    <i className="material-icons tune-item"> tune </i>
                </Link>
              </div>
          </div>
      </div>
	);
};

export default MyAdminApp;
