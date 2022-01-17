import './MyNewAppBreadcrumbs.css'
const MyBreadThird = ({txt, curr, setCurr, val}) => 
{
    var txt_clr ="";
    var clr ="";
    var out_clr ="";
    if(curr=== 0){
        txt_clr= "#3C4257";
        clr= "#F5FBFF";
        out_clr= "#8DB5F8";
    }else if(curr===1){
        txt_clr= "#FFFFFF";
        clr= "#E37171";
        out_clr= "#FF4141";
    }else if(curr===2){
        txt_clr= "#FFFFFF";
        clr= "#9AD64F";
        out_clr= "#6DB416";
    }
    return (
        <div className="hovers" onClick={()=>{setCurr(3);val()}}>
            <svg width="230" height="60" viewBox="0 0 230 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <mask id="path-1-inside-1_221_507" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.41972 6.98456C1.89593 4.31793 3.8214 1 6.89269 1H205C207.209 1 209 2.79086 209 5V53C209 55.2091 207.209 57 205 57H6.89269C3.82139 57 1.89593 53.6821 3.41972 51.0154L14.8659 30.9846C15.5686 29.7548 15.5686 28.2452 14.8659 27.0154L3.41972 6.98456Z"/>
                    </mask>
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.41972 6.98456C1.89593 4.31793 3.8214 1 6.89269 1H205C207.209 1 209 2.79086 209 5V53C209 55.2091 207.209 57 205 57H6.89269C3.82139 57 1.89593 53.6821 3.41972 51.0154L14.8659 30.9846C15.5686 29.7548 15.5686 28.2452 14.8659 27.0154L3.41972 6.98456Z" fill={clr}/>
                    <path d="M14.8659 30.9846L13.9977 30.4884L13.9977 30.4884L14.8659 30.9846ZM14.8659 27.0154L13.9977 27.5116L13.9977 27.5116L14.8659 27.0154ZM3.41972 51.0154L2.55148 50.5193L3.41972 51.0154ZM6.89269 2H205V0H6.89269V2ZM208 5V53H210V5H208ZM205 56H6.89269V58H205V56ZM4.28796 51.5116L15.7342 31.4807L13.9977 30.4884L2.55148 50.5193L4.28796 51.5116ZM15.7342 31.4807C16.6126 29.9435 16.6126 28.0565 15.7342 26.5193L13.9977 27.5116C14.5247 28.4339 14.5247 29.5661 13.9977 30.4884L15.7342 31.4807ZM15.7342 26.5193L4.28796 6.48842L2.55148 7.4807L13.9977 27.5116L15.7342 26.5193ZM6.89269 56C4.58922 56 3.14512 53.5116 4.28796 51.5116L2.55148 50.5193C0.646743 53.8526 3.05357 58 6.89269 58V56ZM208 53C208 54.6569 206.657 56 205 56V58C207.761 58 210 55.7614 210 53H208ZM205 2C206.657 2 208 3.34315 208 5H210C210 2.23858 207.761 0 205 0V2ZM6.89269 0C3.05358 0 0.646742 4.14741 2.55148 7.4807L4.28796 6.48842C3.14512 4.48845 4.58922 2 6.89269 2V0Z" fill={out_clr} mask="url(#path-1-inside-1_221_507)"/>
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill={txt_clr} fontFamily="Inter" fontSize="14" fontWeight="500" letterSpacing="0px" >{txt}</text>
                </g>
                <defs>
                <filter id="filter0_d_221_507" x="0.88678" y="0" width="210.113" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.254902 0 0 0 0 0.317647 0 0 0 0.08 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_221_507"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_221_507" result="shape"/>
                </filter>
                </defs>
            </svg>
        </div>
    );
};

export default MyBreadThird;
