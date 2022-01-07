import './MyNewAppBreadcrumbs.css';

import MyBreadFirst from './MyBreadFirst';
import MyBreadSecond from './MyBreadSecond';
import MyBreadThird from './MyBreadThird';

const MyNewAppBreadcrumbs = () => 
{
    return (
    <div class="external-nab">
        <MyBreadFirst txt="Το Πανεπιστήμιο μου" curr={1}/>
        <MyBreadSecond txt="Το Πανεπιστήμιο μου" curr={2}/>
        <MyBreadThird txt="Το Πανεπιστήμιο μου" curr={0}/>
    </div>
	);
};

export default MyNewAppBreadcrumbs;
