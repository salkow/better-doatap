import './MyTextArea.css';

const MyTextArea = ({txt, filled, setFilled}) => 
{
    return (
		<div className="txt-area-external">
            <div className='txt-area-internal'>
                <div className="txt-area-top">
                    <span><span id="star">*</span>{txt}</span>
                </div>
                <textarea onChange={(e)=>{setFilled(e.target.value)}} defaultValue={filled}></textarea>
            </div>
        </div>
	);
};

export default MyTextArea;