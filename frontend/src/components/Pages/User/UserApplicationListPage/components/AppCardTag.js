import './AppCardTag.css';

const AppCardTag = ({txt, txt_clr, clr, approved}) => 
{
    return (
      <div className="external-info">
          <div className={"internal-info "+ (approved ? "approved" : "")} style={{ backgroundColor: clr }}>
              <span onClick={()=>{if(approved){window.open("https://ibb.co/zR5mTWG", "_blank")}}} style={{ color: txt_clr }} >{txt}</span>
          </div>
      </div>
	);
};

export default AppCardTag;
