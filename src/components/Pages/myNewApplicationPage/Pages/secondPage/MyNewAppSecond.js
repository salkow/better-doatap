import './MyNewAppSecond.css';

import MyBreadcrumb from '../../../../generalComponents/MyBreadcrumb/MyBreadcrumb';
import MyNewAppBreadcrumbs from '../../components/myNewAppBreadcrumbs/MyNewAppBreadcrumbs';
import MyRadioButton from '../../../../generalComponents/MyRadioButton/MyRadioButton';
import MySelectBox from '../../../../generalComponents/mySelectBox/MySelectBox';

import MyButton from '../../../../generalComponents/MyButton/MyButton';


const MyNewAppSecond = () => 
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
                <div class="middle-items">
                  <div class="grouped">
                    <MySelectBox txt="Πανεπιστήμιο"/>
                    <MySelectBox txt="Τμήμα"/>
                  </div>
                </div>
            </div>
            <div class="lower">
              <div class="controls">
                <button class="chevronButton" type="submit">
                  <i class="material-icons chevron-item"> chevron_left </i>
                </button>
                <button class="chevronButton" type="submit">
                  <i class="material-icons chevron-item"> chevron_right </i>
                </button>
              </div>
              <div class="login-promt">
                <span class="login-promt-txt">
                <span id="star">*</span>Απαιτείται σύνδεση για αποθήκευση/υποβολή/διαγραφή/επαναπεξεργασία της αίτησης σας
                </span>                
                <MyButton btn_color="#A8A8A8" txt_color="white" curr_msg="Κάνε σύνδεση"/>
              </div>
              <div class="buttons">
                <MyButton btn_color="#1FAEFF" txt_color="white" curr_msg="Προσωρινή Αποθήκευση" disable={true}/>
                <MyButton btn_color="#DD9F00" txt_color="white" curr_msg="Οριστική Υποβολή" disable={true}/>
              </div>
            </div>
          </div>
        </div>
      </div>
	);
};

export default MyNewAppSecond;
