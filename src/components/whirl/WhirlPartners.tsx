import { FaHorseHead, FaTelegramPlane } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa6";
import { TbLayersIntersect } from "react-icons/tb";

const WhirlPartners = () => {
    return (
        <section
            style={{width:'1230px', height:'96.8125px', top:'668.58px', left:'105px', 
                textAlign:'center', margin:'0px auto', padding:'0px auto'}}
        >
            <h2 style={{fontSize:'24px', marginTop:'0px', paddingTop:'0px'}}>Trusted by 50,000+ companies</h2>
            <div
                style={{width:'1130px', height:'35.8125px', left:'50px', top:'61px', 
                    display:'inline-flex', fontSize:'16px',  textAlign:'center',
                    color:'#C8C8C8', padding:'0px auto', margin:'0px auto'}}
            >
                <div style={{display:"inline-flex", margin:"0px auto"}}>
                    <div
                        style={{width:'124px', height:'33px', top:'1.42px', left:'370.01px', 
                            padding:'0px auto', display:'inline-flex',
                        }}
                    > <p style={{display:"inline-flex", margin:'0px auto'}}><FaHorseHead /> <span>FocusFox</span></p></div>
                    <div
                        style={{width:'159px', height:'33px', top:'1.42px', left:'555.01px', 
                            padding:'0px auto', display:'inline-flex',
                        }}
                    > <p style={{display:"inline-flex", margin:'0px auto'}}><FaEnvelopeOpen /> <span>NowInTech</span></p></div>
                    <div
                        style={{width:'148px', height:'33px', top:'1.42px', left:'774.01px', 
                            padding:'0px auto', display:'inline-flex',
                        }}
                    > <p style={{display:"inline-flex", margin:'0px auto'}}><FaTelegramPlane /> <span>Optimer</span></p></div>
                    <div
                        style={{width:'117px', height:'33px', top:'1.42px', left:'983.01px', 
                            padding:'0px auto', display:'inline-flex',
                        }}
                    > <p style={{display:"inline-flex", margin:'0px auto'}}><TbLayersIntersect /> <span>Carded</span></p></div>
                </div>
            </div>
        </section>
    )
}

export default WhirlPartners;