import './MyMyApplicationPage.css';

import MyBreadcrumb from '../../generalComponents/MyBreadcrumb/MyBreadcrumb';
import Application from './components/Application';

const MyMyApplicationPage = () => 
{
    const myBread = [{first: "/", second: "Αρχική"}, {second: "Οι αιτήσεις μου"}]
    return (
      <div>
        <MyBreadcrumb array={myBread}/>
        <div class="external">
          <div class="internal">
            <div class="top">
              <span id="underlined">Οι αιτήσεις μου</span>
            </div>
            <div class="middle">
              <Application id="44495" name="Βασικό Πτυχίο" isFinalized={false}/>
              <Application id="44496" name="Μεταπτυχιακό" isFinalized={true} status={1}/>
              <Application id="44497" name="Το δεύτερό μου μεταπτυχιακό" isFinalized={true} status={2}/>
              <Application id="44498" name="Το τρίτου μου μεταπτυχιακό" isFinalized={true} status={0}/>
            </div>
          </div>
        </div>
      </div>
	);
};

export default MyMyApplicationPage;
