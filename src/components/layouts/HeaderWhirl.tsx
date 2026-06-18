// import { auto } from "@popperjs/core";

const HeaderWhirl = () => {
    return (
        <header style={{paddingTop:'8px', paddingLeft:'16px', width: '1440px', height: '75px', textAlign: 'center', backgroundColor:'transparent'}}>
            <nav style={{width: '1230px', height: '75px', left: '105px', margin:'auto', padding: 'auto', backgroundColor:'transparent', display:'inline-flex'}}>
                <img src="/images/IMAGE.png" style={{width: '106px', height: '37px', left: '50px', top: '19px', borderRadius:0, border: 'none'}} />
                <div style={{width:'1000px', height:'36px', top:'19.5px', left:'180px', display:'inline-flex'}}>
                    <ul style={{paddingTop:'8px', paddingLeft:'16px', margin:'auto', fontSize:'15px', display:'inline-flex'}}>
                        <li 
                            style={{width:'64px', height:'24px', fontFamily:'Regular', top:'6.5px', left:'12px', fontSize:'15px'}}
                        >Features</li>
                        <li 
                            style={{width:'64px', height:'24px', fontFamily:'Regular', top:'6.5px', left:'100px', fontSize:'15px'}}
                        >Pricing</li>
                        <li 
                            style={{width:'89px', height:'24px', fontFamily:'Regular', top:'6.5px', left:'175px', fontSize:'15px'}}
                        >Integration</li>
                        <div
                            style={{width:'72px', height:'26px', fontFamily:'Regular', top:'5.5px', left:'282px', fontSize:'15px'}}
                        >
                            <p style={{left:'8px', width:'42px', height:'26px'}}>Learn</p>
                            <div
                                style={{width:'12px', height:'12px', top:'8px', left:'52px'}}
                            ></div>
                            <div
                                style={{width:'72px', height:'26px', top:'8px', left:'52px', borderRadius:'px'}}
                            ></div>
                        </div>
                    </ul>
                    <div style={{margin:'auto', width:'243.42px', height:'36px', left:'756.58px', display:'inline-flex'}}>
                        <div
                            style={{paddingTop:'8px', paddingLeft:'16px', top:'0.5px', left:'0.42px', width:'89px', height:'36px'}}
                        >
                            <p style={{fontFamily:'Regular', width:'49px', height:'24px', top:'6px', left:'20px', fontSize:'15px', color:'#0070A0'}}>Sign In</p>
                            {/* <div
                                style={{width:'89px', height:'36px'}}
                            ></div> */}
                        </div>
                        <div
                            style={{paddingTop:'8px', paddingLeft:'16px', top:'0.5px', left:'100.42px', width:'139px', height:'36px', backgroundColor:'#0070A0'}}
                        >
                            <p style={{width:'99px', height:'24px', fontFamily:'Regular', top:'6px', left:'20px', fontSize:'15px', color:'#FFFFFF'}}>Book a demo</p>
                            {/* <div
                                style={{width:'139px', height:'36px'}}
                            ></div> */}
                        </div>
                    </div>
                </div>
            </nav>
            <div style={{width:'1440px', height:'75px'}}></div>
        </header>
    )
}

export default HeaderWhirl;