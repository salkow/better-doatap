import "./MyButton.css";

const MyButton = ({btn_color, txt_color, curr_msg, disable, funcc}) => 
{
    return (
		<div className="btn">
			<button onClick={funcc}  style={{ "backgroundColor": btn_color, "color": txt_color }} disabled={disable}>
				{curr_msg}
			</button>
		</div>
	);
};

export default MyButton;
