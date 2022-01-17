import './MyNewAppBreadcrumbs.css';

import MyBreadFirst from './MyBreadFirst';
import MyBreadSecond from './MyBreadSecond';
import MyBreadThird from './MyBreadThird';

const MyNewAppBreadcrumbs = ({setCurr, curr, first, second, third}) => 
{

    return (
    <div className="external-nab">
        <MyBreadFirst setCurr={setCurr} txt="Το Πανεπιστήμιο μου" curr={(curr===1 ? 0 : first)}/>
        <MyBreadSecond setCurr={setCurr} txt="Το Πανεπιστήμιο μου" curr={(curr===2 ? 0 : second)}/>
        <MyBreadThird setCurr={setCurr} txt="Το Πανεπιστήμιο μου" curr={(curr===3 ? 0 : third)}/>
    </div>
	);
};

export default MyNewAppBreadcrumbs;
