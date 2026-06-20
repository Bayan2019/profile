import { HiMiniPresentationChartLine } from "react-icons/hi2";
import { TbZoom } from "react-icons/tb";

const WhirlAbout = () => {
    return (
        <section
            style={{width:'1130px', height:'218px', left:'155px', padding:'0px',
                margin:'28px auto', display:'inline-flex', justifyContent:'space-between'
            }}
        >
            <div
                style={{width:'300px', height:'218px',
                    textAlign:'left', fontFamily:'Fraunces', fontSize:'41px'
                }}
            >
                <p style={{top:'-1.39px', marginBottom:'0px', paddingBottom:'0px'}}>
                    What's Whirl
                </p>
                <p style={{top:'48.61px', marginTop:'0px', paddingTop:'0px'}}>
                    all about?
                </p>
            </div>
            <div
                style={{width:'732px', height:'218px', left:'398px',
                    display:'inline-flex', justifyContent:'space-between', padding:'0px'
                }}
            >
                <div
                    style={{textAlign:'left', width:'222.65625px', height:'218'}}
                >
                    <TbZoom style={{color:'#ffffff', fontSize:'35px'}}/>
                    <p 
                        style={{fontFamily:'Fraunces', fontSize:'25px'}}
                    >
                        All on one place.
                    </p>
                    <p style={{fontSize:'16px'}}>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div
                    style={{textAlign:'left', width:'222.65625px', height:'218', left:'254.66px'}}
                >
                    <TbZoom style={{color:'#006B99', fontSize:'35px'}}/>
                    <p 
                        style={{fontFamily:'Fraunces', fontSize:'25px'}}
                    >
                        Get daily alerts.
                    </p>
                    <p style={{fontSize:'16px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                </div>
                <div
                    style={{textAlign:'left', width:'222.65625px', height:'218', left:'509.31px'}}
                >
                    <HiMiniPresentationChartLine style={{color:'#006B99', fontSize:'35px'}}/>
                    <p 
                        style={{fontFamily:'Fraunces', fontSize:'25px'}}
                    >
                        Safe and secure.
                    </p>
                    <p style={{fontSize:'16px'}}>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WhirlAbout;