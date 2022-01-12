import "./MyButton.css";

const MyButton = ({btn_color, txt_color, curr_msg, disable}) => 
{
    return (
		<div class="btn">
			<button type="submit" style={{ "backgroundColor": btn_color, "color": txt_color }} disabled={disable}>
				{curr_msg}
			</button>
		</div>
	);
};

export default MyButton;
