import './MyNewAppThird.css';

import MyBreadcrumb from '../../../../generalComponents/MyBreadcrumb/MyBreadcrumb';
import MyNewAppBreadcrumbs from '../../components/myNewAppBreadcrumbs/MyNewAppBreadcrumbs';
import MyFileCard from '../../components/myNewAppBreadcrumbs/myFileCard/MyFileCard';


import MyButton from '../../../../generalComponents/MyButton/MyButton';


const MyNewAppThird = () => 
{
    const myBread = [{first: "/", second: "Αρχική"}, {second: "Κάνε αίτηση"}]
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
                  <MyFileCard name="Πτυχίο φοίτησης" desc="Αφορά το πτυχίου που παραλάβατε αφού ολοκληρώσατε την φοίτησή σας."/>
                </div>
            </div>
            <div class="lower">
              <div class="controls">
                <button class="chevronButton" type="submit">
                  <i class="material-icons chevron-item"> chevron_left </i>
                </button>
                <button class="chevronButton" type="submit" disabled>
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

export default MyNewAppThird;
