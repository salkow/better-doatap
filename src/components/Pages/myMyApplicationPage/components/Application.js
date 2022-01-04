import './Application.css';

import './InfoCard'
import InfoCard from './InfoCard';

const Application = ({id, name, isFinalized, status}) => 
{
    const fin = [];
    if(isFinalized){
        fin.push(
            <InfoCard txt="Οριστικά υποβεβλημένο" txt_clr="white" clr="#DD9F00"/>
        );
    }else{
        fin.push(
            <InfoCard txt="Προσωρινά αποθηκευμένο" txt_clr="white" clr="#1FAEFF"/>
        );
    }
    
    const stat = [];
    if(status === 0){
        stat.push(
            <InfoCard txt="Σε επεξεργασία..." txt_clr="black" clr="#BFBFBF"/>
        );
    }else if(status === 1){
        stat.push(
            <InfoCard txt="Εγγεγκριμένο" txt_clr="white" clr="#07BE2F"/>
        );
    }else if(status === 2){
        stat.push(
            <InfoCard txt="Μη εγγεγκριμένο" txt_clr="white" clr="#D41818"/>
        );
        stat.push(
            <span class="helpSpan" type="submit">
                <i class="material-icons help-item"> help_outline </i>
            </span>
        );
    }
    return (
      <div class="external-app">
          <div class="internal-app">
              <div class="other">
                  <div class="id">
                      <span>{id}</span>
                  </div>
                  <div class="data">
                    <span>{name}</span>
                    <div class="info">
                        {fin}
                        {stat}
                    </div>
                  </div>
              </div>
              <div class="edit-icon">
                <button class="tuneButton" type="submit">
                    <i class="material-icons tune-item"> tune </i>
                </button>
              </div>
          </div>
      </div>
	);
};

export default Application;
