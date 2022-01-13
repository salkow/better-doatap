import './MyAdminAppSecond.css';

import MyBreadcrumb from '../../../../../generalComponents/MyBreadcrumb/MyBreadcrumb';
import MyNewAppBreadcrumbs from '../../../components/myNewAppBreadcrumbs/MyNewAppBreadcrumbs';
import MySelectBox from '../../../../../generalComponents/mySelectBox/MySelectBox';


const MyAdminAppSecond = () => 
{
    const myBread = [{first: "/", second: "Αρχική"}, {second: "Κάνε αίτηση"}]
    return (
      <div className="content">
        <MyBreadcrumb array={myBread}/>
        <div className="external">
          <div className="internal">
            <div className="top">
              <span id="underlined">ΚΛεπτομέρειες Αίτησης: 44499</span>
            </div>
            <div className="middle">
                <MyNewAppBreadcrumbs />
                <div className="middle-items">
                  <div className="grouped">
                    <MySelectBox txt="Πανεπιστήμιο"/>
                    <MySelectBox txt="Τμήμα"/>
                  </div>
                </div>
            </div>
            <div className="lower">
              <div className="controls">
                <button className="chevronButton" type="submit">
                  <i className="material-icons chevron-item"> chevron_left </i>
                </button>
                <button className="chevronButton" type="submit">
                  <i className="material-icons chevron-item"> chevron_right </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
	);
};

export default MyAdminAppSecond;
