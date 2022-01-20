import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import './MyBreadcrumb.css'
const MyBreadcrumb = ({ array }) => 
{
    const fin = []
    array.forEach((e, i, array) => {
        if(i+1 === array.length){
            fin.push(
            <Breadcrumb.Item key={i} className={"bread"} active>
                <span>{e.second}</span>
            </Breadcrumb.Item>
            );    
        }else{
            fin.push(
            <Breadcrumb.Item key={i} className={"bread"} linkAs={Link} linkProps={{to: e.first}}>
                <span>{e.second}</span>
            </Breadcrumb.Item>
            );            
        }
    });
    return (
		<Breadcrumb>
            {fin}
        </Breadcrumb>
	);
};

export default MyBreadcrumb;
