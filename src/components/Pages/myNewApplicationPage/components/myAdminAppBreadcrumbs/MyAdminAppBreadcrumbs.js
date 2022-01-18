import './MyAdminAppBreadcrumbs.css';

import MyBreadFirst from './MyBreadFirst';
import MyBreadSecond from './MyBreadSecond';
import MyBreadThird from './MyBreadThird';
import MyBreadFourth from './MyBreadFourth';

const MyAdminAppBreadcrumbs = ({setCurr, curr}) => 
{

    return (
    <div className="external-nab">
        <MyBreadFirst setCurr={setCurr} txt="Το Πανεπιστήμιο μου" curr={(curr===1 ? 0 : 3)}/>
        <MyBreadSecond setCurr={setCurr} txt="Το αλλο Πανεπιστήμιο" curr={(curr===2 ? 0 : 3)}/>
        <MyBreadThird setCurr={setCurr} txt="Επισυναπτόμενα" curr={(curr===3 ? 0 : 3)}/>
        <MyBreadFourth setCurr={setCurr} txt="Αντιστοίχιση Μαθηματων" curr={(curr===4 ? 0 : 3)}/>
    </div>
	);
};

export default MyAdminAppBreadcrumbs;
