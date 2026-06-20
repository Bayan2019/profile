import { BsHandThumbsUp, BsLightning } from "react-icons/bs";
import { FaExclamation } from "react-icons/fa";
import { PiShareNetworkLight } from "react-icons/pi";

const WhirlTasks = () => {
    return (
        <section
            style={{width:'1230px', height:'408px', margin:'32px auto', left:'105px', padding:'auto'}}
        >
            <div
                style={{width:'1130px', height:'408px', left:'50px', top:'0.36px', 
                    textAlign:'left', padding:'auto', margin:'auto'}}
            >
                <div
                    style={{width:'650px', height:'122px', textAlign:'left'}}
                >
                    <p
                        style={{fontSize:'42px', fontFamily:'Fraunces', lineHeight:'50.4px', letterSpacing:"0.2px"}}
                    >
                        Your tasks, automated.
                    </p>
                    <div
                        style={{width:'650px', height:'54px',
                            fontSize:'18px', lineHeight:'27px', letterSpacing:'0.2px'}}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                <div
                    style={{width:'1130px', height:'218px', marginTop:'32px',
                        display:'inline-flex', justifyContent:'space-between'
                    }}
                >
                    <div
                        style={{width:'234.5px', height:'218px', textAlign:'left'}}
                    >
                        <PiShareNetworkLight style={{fontSize:'55px', color:'#006B99'}} />
                        <p
                            style={{fontFamily:'Fraunces', fontSize:'25px', lineHeight:'31.25px', letterSpacing:'0.2px'}}
                        >
                            Learn your options.
                        </p>
                        <p
                            style={{fontSize:'16px', lineHeight:'24px', letterSpacing:'0.2px'}}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                    </div>
                    <div
                        style={{width:'234.5px', height:'218px', textAlign:'left'}}
                    >
                        <BsLightning style={{fontSize:'55px', color:'#006B99'}} />
                        <p
                            style={{fontFamily:'Fraunces', fontSize:'25px', lineHeight:'31.25px', letterSpacing:'0.2px'}}
                        >
                            Stay informed.
                        </p>
                        <p
                            style={{fontSize:'16px', lineHeight:'24px', letterSpacing:'0.2px'}}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloretro.
                        </p>
                    </div>
                    <div
                        style={{width:'234.5px', height:'218px', textAlign:'left'}}
                    >
                        <BsHandThumbsUp style={{fontSize:'55px', color:'#006B99'}} />
                        <p
                            style={{fontFamily:'Fraunces', fontSize:'25px', lineHeight:'31.25px', letterSpacing:'0.2px'}}
                        >
                            Automate it all.
                        </p>
                        <p
                            style={{fontSize:'16px', lineHeight:'24px', letterSpacing:'0.2px'}}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum.
                        </p>
                    </div>
                    <div
                        style={{width:'234.5px', height:'218px', textAlign:'left'}}
                    >
                        <FaExclamation style={{fontSize:'55px', color:'#006B99'}} />
                        <p
                            style={{fontFamily:'Fraunces', fontSize:'25px', lineHeight:'31.25px', letterSpacing:'0.2px'}}
                        >
                            Stay informed.
                        </p>
                        <p
                            style={{fontSize:'16px', lineHeight:'24px', letterSpacing:'0.2px'}}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et consectetur.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhirlTasks;