import './MyNewAppBreadcrumbs.css'
const MyBreadSecond = ({txt, curr, setCurr}) => 
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
        <div className="hovers" onClick={()=>{setCurr(2)}}>
            <svg width="230" height="60" viewBox="0 0 230 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <mask id="path-1-inside-1_218_468" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M211.152 3.01544C210.439 1.76914 209.114 1 207.679 1H6.89269C3.8214 1 1.89593 4.31793 3.41972 6.98456L14.8659 27.0154C15.5686 28.2452 15.5686 29.7548 14.8659 30.9846L3.41972 51.0154C1.89593 53.6821 3.82139 57 6.89268 57H207.679C209.114 57 210.439 56.2309 211.152 54.9846L224.866 30.9846C225.569 29.7548 225.569 28.2452 224.866 27.0154L211.152 3.01544Z"/>
                    </mask>
                    <path fillRule="evenodd" clipRule="evenodd" d="M211.152 3.01544C210.439 1.76914 209.114 1 207.679 1H6.89269C3.8214 1 1.89593 4.31793 3.41972 6.98456L14.8659 27.0154C15.5686 28.2452 15.5686 29.7548 14.8659 30.9846L3.41972 51.0154C1.89593 53.6821 3.82139 57 6.89268 57H207.679C209.114 57 210.439 56.2309 211.152 54.9846L224.866 30.9846C225.569 29.7548 225.569 28.2452 224.866 27.0154L211.152 3.01544Z" fill={clr}/>
                    <path d="M14.8659 27.0154L13.9977 27.5116L13.9977 27.5116L14.8659 27.0154ZM14.8659 30.9846L13.9977 30.4884L13.9977 30.4884L14.8659 30.9846ZM224.866 30.9846L225.734 31.4807L225.734 31.4807L224.866 30.9846ZM224.866 27.0154L225.734 26.5193L225.734 26.5193L224.866 27.0154ZM211.152 3.01544L212.02 2.51931L211.152 3.01544ZM211.152 54.9846L212.02 55.4807L211.152 54.9846ZM6.89269 2H207.679V0H6.89269V2ZM15.7342 26.5193L4.28796 6.48842L2.55148 7.4807L13.9977 27.5116L15.7342 26.5193ZM15.7342 31.4807C16.6126 29.9435 16.6126 28.0565 15.7342 26.5193L13.9977 27.5116C14.5247 28.4339 14.5247 29.5661 13.9977 30.4884L15.7342 31.4807ZM4.28796 51.5116L15.7342 31.4807L13.9977 30.4884L2.55148 50.5193L4.28796 51.5116ZM207.679 56H6.89268V58H207.679V56ZM223.998 30.4884L210.283 54.4884L212.02 55.4807L225.734 31.4807L223.998 30.4884ZM223.998 27.5116C224.525 28.4339 224.525 29.5661 223.998 30.4884L225.734 31.4807C226.613 29.9435 226.613 28.0565 225.734 26.5193L223.998 27.5116ZM210.283 3.51158L223.998 27.5116L225.734 26.5193L212.02 2.51931L210.283 3.51158ZM2.55148 50.5193C0.646744 53.8526 3.05357 58 6.89268 58V56C4.58922 56 3.14512 53.5116 4.28796 51.5116L2.55148 50.5193ZM207.679 2C208.755 2 209.749 2.57686 210.283 3.51158L212.02 2.51931C211.13 0.961432 209.473 0 207.679 0V2ZM207.679 58C209.473 58 211.13 57.0386 212.02 55.4807L210.283 54.4884C209.749 55.4231 208.755 56 207.679 56V58ZM6.89269 0C3.05358 0 0.646743 4.14741 2.55148 7.4807L4.28796 6.48842C3.14512 4.48845 4.58922 2 6.89269 2V0Z" fill={out_clr} mask="url(#path-1-inside-1_218_468)"/>
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill={txt_clr} fontFamily="Inter" fontSize="14" fontWeight="500" letterSpacing="0px" >{txt}</text>
                </g>
                <defs>
                <filter id="filter0_d_218_468" x="0.88678" y="0" width="226.506" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.254902 0 0 0 0 0.317647 0 0 0 0.08 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_218_468"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_218_468" result="shape"/>
                </filter>
                </defs>
            </svg>
        </div>
    );
};

export default MyBreadSecond;
