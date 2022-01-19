import './UserAppBreadcrumbs.css';

import MyBreadFirst from './MyBreadFirst';
import MyBreadSecond from './MyBreadSecond';
import MyBreadThird from './MyBreadThird';

const UserAppBreadcrumbs = ({setCurr, curr, first, second, third, val, firstdis, seconddis, thirddis}) => 
{

    return (
    <div className="external-nab">
        <MyBreadFirst setCurr={setCurr} val={val} txt="Το Πανεπιστήμιο μου" curr={(curr===1 ? 0 : first)} disabled={firstdis}/>
        <MyBreadSecond setCurr={setCurr} val={val} txt="Το αλλο Πανεπιστήμιο" curr={(curr===2 ? 0 : second)} disabled={seconddis}/>
        <MyBreadThird setCurr={setCurr} val={val} txt="Επισυναπτόμενα" curr={(curr===3 ? 0 : third)} disabled={thirddis}/>
    </div>
	);
};

export default UserAppBreadcrumbs;
