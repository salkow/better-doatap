import { Breadcrumb } from "react-bootstrap";

import './MyBreadcrumb.css'

const MyBreadcrumb = ({ array }) => 
{
    const fin = []
    array.forEach((e, i, array) => {
        if(i+1 === array.length){
            fin.push(
            <Breadcrumb.Item className={"bread"} active>
                <span>{e.second}</span>
            </Breadcrumb.Item>
            );    
        }else{
            fin.push(
            <Breadcrumb.Item className={"bread"} href={e.first}>
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
