import './MyNewAppFirst.css';

import MyBreadcrumb from '../../../../generalComponents/MyBreadcrumb/MyBreadcrumb';
import MyNewAppBreadcrumbs from '../../components/myNewAppBreadcrumbs/MyNewAppBreadcrumbs';
import MyRadioButton from '../../../../generalComponents/MyRadioButton/MyRadioButton';
import MySelectBox from '../../../../generalComponents/mySelectBox/MySelectBox';
import MyTextBox from '../../../../generalComponents/MyTextBox/MyTextBox';
const MyNewAppFirst = () => 
{
    const myBread = [{first: "/", second: "Αρχική"}, {second: "Κάνε αίτηση"}]
    const radioFin = ["Βασικό πτυχίο", "Μεταπτυχιακό", "Διδακτορικό"]
    return (
      <div className="content">
        <MyBreadcrumb array={myBread}/>
        <div class="external">
          <div class="internal">
            <div class="top">
              <span id="underlined">Κάνε Αίτηση</span>
            </div>
            <div class="middle">
                <MyNewAppBreadcrumbs />
                <MyRadioButton txt="Επίπεδο Σπουδών" items={radioFin}/>
                <MySelectBox txt="Χωρα Σπουδών"/>
                <MyTextBox txt="Χωρα Σπουδών" type="text"/>
            </div>
          </div>
        </div>
      </div>
	);
};

export default MyNewAppFirst;
