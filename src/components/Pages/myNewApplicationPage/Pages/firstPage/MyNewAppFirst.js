import './MyNewAppFirst.css';

import MyBreadcrumb from '../../../../generalComponents/MyBreadcrumb/MyBreadcrumb';
import MyNewAppBreadcrumbs from '../../components/myNewAppBreadcrumbs/MyNewAppBreadcrumbs';

const MyNewAppFirst = () => 
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
            </div>
          </div>
        </div>
      </div>
	);
};

export default MyNewAppFirst;
