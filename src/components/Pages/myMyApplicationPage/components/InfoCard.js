import './InfoCard.css';

const InfoCard = ({txt, txt_clr, clr}) => 
{
    return (
      <div class="external-info">
          <div class="internal-info" style={{ backgroundColor: clr }}>
              <span style={{ color: txt_clr }} >{txt}</span>
          </div>
      </div>
	);
};

export default InfoCard;
