import { Breadcrumb } from "react-bootstrap";

import './MyBreadcrumb.css'

const MyBreadcrumb = ({ array }) => 
{
    const fin = []
    array.map((e, i, array) => {
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
            {/* <Breadcrumb.Item className="bread" href="#">
            <span>Home</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread" href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            <span>Library</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item active><span>Data</span></Breadcrumb.Item> */}
            {fin}
        </Breadcrumb>
	);
};

export default MyBreadcrumb;
