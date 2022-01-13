import './MyNewAppSecond.css';

import MyBreadcrumb from '../../../../../generalComponents/MyBreadcrumb/MyBreadcrumb';
import MyNewAppBreadcrumbs from '../../../components/myNewAppBreadcrumbs/MyNewAppBreadcrumbs';
import MySelectBox from '../../../../../generalComponents/mySelectBox/MySelectBox';

import MyButton from '../../../../../generalComponents/MyButton/MyButton';


const MyNewAppSecond = () => 
{
    const myBread = [{first: "/", second: "Αρχική"}, {second: "Κάνε αίτηση"}]
    return (
      <div className="content">
        <MyBreadcrumb array={myBread}/>
        <div className="external">
          <div className="internal">
            <div className="top">
              <span id="underlined">Κάνε Αίτηση</span>
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
              <div className="login-promt">
                <span className="login-promt-txt">
                <span id="star">*</span>Απαιτείται σύνδεση για αποθήκευση/υποβολή/διαγραφή/επαναπεξεργασία της αίτησης σας
                </span>                
                <MyButton btn_color="#A8A8A8" txt_color="white" curr_msg="Κάνε σύνδεση"/>
              </div>
              <div className="buttons">
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
