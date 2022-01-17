import './Application.css';

import './InfoCard'
import InfoCard from './InfoCard';

import {Link} from "react-router-dom"

const Application = ({id, name, isFinalized, status}) => 
{
    const fin = [];
    if(isFinalized){
        fin.push(
            <InfoCard key={id} txt="Οριστικά υποβεβλημένο" txt_clr="white" clr="#DD9F00"/>
        );
    }else{
        fin.push(
            <InfoCard key={id} txt="Προσωρινά αποθηκευμένο" txt_clr="white" clr="#1FAEFF"/>
        );
    }
    
    const stat = [];
    if(status === 'P'){
        stat.push(
            <InfoCard key={{id} + 'e'} txt="Σε επεξεργασία..." txt_clr="black" clr="#BFBFBF"/>
        );
    }else if(status === 'A'){
        stat.push(
            <InfoCard key={{id} + 'a'} txt="Εγγεγκριμένο" txt_clr="white" clr="#07BE2F"/>
        );
    }else if(status === 'D'){
        stat.push(
            <InfoCard key={{id} + 'b'} txt="Μη εγγεγκριμένο" txt_clr="white" clr="#D41818"/>
        );
        stat.push(
            <span key={{id} + 'bb'} className="helpSpan" type="submit">
                <i className="material-icons help-item"> help_outline </i>
            </span>
        );
    }
    return (
      <div className="external-app">
          <div className="internal-app">
              <div className="other">
                  <div className="id">
                      <span>{id}</span>
                  </div>
                  <div className="data">
                    <span>{name}</span>
                    <div className="info">
                        {fin}
                        {stat}
                    </div>
                  </div>
              </div>
              <div className="edit-icon">
                <Link className="tuneButton" type="submit" to={"/myNewAppF/" + id}>
                    <i className="material-icons tune-item"> tune </i>
                </Link>
              </div>
          </div>
      </div>
	);
};

export default Application;
