import './ApplicationCard.css';

import './AppCardTag'
import AppCardTag from './AppCardTag';

import {Link} from "react-router-dom"
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
const ApplicationCard = ({id, name, isFinalized, status, tool_txt}) => 
{
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {tool_txt}
        </Tooltip>
      );
    const fin = [];
    if(isFinalized){
        fin.push(
            <AppCardTag key={id} txt="Οριστικά υποβεβλημένο" txt_clr="white" clr="#DD9F00"/>
        );
    }else{
        fin.push(
            <AppCardTag key={id} txt="Προσωρινά αποθηκευμένο" txt_clr="white" clr="#1FAEFF"/>
        );
    }
    
    const stat = [];
    if(status === 'P'){
        stat.push(
            <AppCardTag key={{id} + 'e'} txt="Σε επεξεργασία..." txt_clr="black" clr="#BFBFBF"/>
        );
    }else if(status === 'A'){
        stat.push(
            <AppCardTag key={{id} + 'a'} txt="Εγγεγκριμένο" txt_clr="white" clr="#07BE2F"/>
        );
    }else if(status === 'D'){
        stat.push(
            <AppCardTag key={{id} + 'b'} txt="Μη εγγεγκριμένο" txt_clr="white" clr="#D41818"/>
        );
        stat.push(
            <OverlayTrigger
                placement="right"
                delay={{ show: 50, hide: 400 }}
                overlay={renderTooltip}>

                <span key={{id} + 'bb'} className="helpSpan" type="submit">
                    <i className="material-icons help-item"> help_outline </i>
                </span>            
            </OverlayTrigger>,
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

export default ApplicationCard;
