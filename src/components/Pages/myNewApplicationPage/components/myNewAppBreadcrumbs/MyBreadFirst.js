const MyBreadFirst = ({txt, curr}) => 
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
        <div>
            <svg width="230" height="60" viewBox="0 0 230 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <mask id="path-1-inside-1_216_519" fill="white">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 2.79086 3.79086 1 6 1H209.679C211.114 1 212.44 1.76914 213.152 3.01544L226.866 27.0154C227.569 28.2452 227.569 29.7548 226.866 30.9846L213.152 54.9846C212.44 56.2309 211.114 57 209.679 57H6C3.79086 57 2 55.2091 2 53V5Z"/>
                    </mask>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 2.79086 3.79086 1 6 1H209.679C211.114 1 212.44 1.76914 213.152 3.01544L226.866 27.0154C227.569 28.2452 227.569 29.7548 226.866 30.9846L213.152 54.9846C212.44 56.2309 211.114 57 209.679 57H6C3.79086 57 2 55.2091 2 53V5Z" fill={clr}/>
                    <path d="M226.866 27.0154L227.734 26.5193L227.734 26.5193L226.866 27.0154ZM226.866 30.9846L227.734 31.4807L227.734 31.4807L226.866 30.9846ZM213.152 54.9846L214.02 55.4807L213.152 54.9846ZM213.152 3.01544L214.02 2.51931L213.152 3.01544ZM209.679 0H6V2H209.679V0ZM212.283 3.51158L225.998 27.5116L227.734 26.5193L214.02 2.51931L212.283 3.51158ZM225.998 27.5116C226.525 28.4339 226.525 29.5661 225.998 30.4884L227.734 31.4807C228.613 29.9435 228.613 28.0565 227.734 26.5193L225.998 27.5116ZM225.998 30.4884L212.283 54.4884L214.02 55.4807L227.734 31.4807L225.998 30.4884ZM6 58H209.679V56H6V58ZM1 5V53H3V5H1ZM212.283 54.4884C211.749 55.4231 210.755 56 209.679 56V58C211.473 58 213.13 57.0386 214.02 55.4807L212.283 54.4884ZM6 0C3.23858 0 1 2.23858 1 5H3C3 3.34315 4.34315 2 6 2V0ZM6 56C4.34315 56 3 54.6569 3 53H1C1 55.7614 3.23858 58 6 58V56ZM209.679 2C210.755 2 211.749 2.57686 212.283 3.51158L214.02 2.51931C213.13 0.96143 211.473 0 209.679 0V2Z" fill={out_clr} mask="url(#path-1-inside-1_216_519)"/>

                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Verdana" font-size="35" fill={txt_clr} font-family="Inter" font-size="14" font-weight="500" letter-spacing="0px" >{txt}</text>
                </g>
                <defs>
                    <filter id="filter0_d_216_519" x="0" y="0" width="229.393" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.254902 0 0 0 0 0.317647 0 0 0 0.08 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_216_519"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_216_519" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default MyBreadFirst;
