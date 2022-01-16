import './MyAdminAppFirst.css';

import MyBreadcrumb from '../../../../../generalComponents/MyBreadcrumb/MyBreadcrumb';
import MyRadioButton from '../../../../../generalComponents/MyRadioButton/MyRadioButton';

import MyNewAppBreadcrumbs from '../../../components/myNewAppBreadcrumbs/MyNewAppBreadcrumbs';
import MySelectBox from '../../../../../generalComponents/mySelectBox/MySelectBox';


const MyAdminAppFirst = () => 
{
    const myBread = [{first: "/", second: "Αρχική"}, {second: "Κάνε αίτηση"}]
    const radioFin = ["Βασικό πτυχίο", "Μεταπτυχιακό", "Διδακτορικό"]
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
                  <MyRadioButton txt="Επίπεδο Σπουδών" items={radioFin} selected={0} disabled={true}/>
                  <MySelectBox txt="Χωρα Σπουδών"/>
                  <div className="grouped">
                    <MySelectBox txt="Πανεπιστήμιο"/>
                    <MySelectBox txt="Τμήμα"/>
                  </div>
                </div>
            </div>
            <div className="lower">
              <div className="controls">
                <button className="chevronButton" type="submit" disabled>
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

export default MyAdminAppFirst;
