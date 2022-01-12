import './InfoCard.css';

const InfoCard = ({txt, txt_clr, clr}) => 
{
    return (
      <div className="external-info">
          <div className="internal-info" style={{ backgroundColor: clr }}>
              <span style={{ color: txt_clr }} >{txt}</span>
          </div>
      </div>
	);
};

export default InfoCard;
