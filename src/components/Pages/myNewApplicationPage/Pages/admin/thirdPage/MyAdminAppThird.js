import './MyAdminAppThird.css';

import MyBreadcrumb from '../../../../../generalComponents/MyBreadcrumb/MyBreadcrumb';
import MyNewAppBreadcrumbs from '../../../components/myNewAppBreadcrumbs/MyNewAppBreadcrumbs';
import MyFileCard from '../../../components/myFileCard/MyFileCard';

const MyAdminAppThird = () => 
{
    const myBread = [{first: "/", second: "Αρχική"}, {second: "Κάνε αίτηση"}]
    return (
      <div className="content">
        <MyBreadcrumb array={myBread}/>
        <div className="external">
          <div className="internal">
            <div className="top">
              <span id="underlined">Λεπτομέρειες Αίτησης: 44499</span>
            </div>
            <div className="middle">
                <MyNewAppBreadcrumbs />
                <div className="middle-items">
                  <MyFileCard name="Πτυχίο φοίτησης" desc="Αφορά το πτυχίου που παραλάβατε αφού ολοκληρώσατε την φοίτησή σας."/>
                  
                </div>
            </div>
            <div className="lower">
              <div className="controls">
                <button className="chevronButton" type="submit">
                  <i className="material-icons chevron-item"> chevron_left </i>
                </button>
                <button className="chevronButton" type="submit" disabled>
                  <i className="material-icons chevron-item"> chevron_right </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
	);
};

export default MyAdminAppThird;
