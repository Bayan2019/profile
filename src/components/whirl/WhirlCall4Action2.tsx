import { FaCheck } from "react-icons/fa";

const WhirlCall4Action2 = () => {
    return (
        <section
            style={{width:'1230px', height:'370px', left:'105px', padding:'0px auto',
                alignContent:'center', alignItems:'center', textAlign:'center', margin:'0px auto'}}
        >
            <div
                style={{backgroundColor:'#E6F7FF', width:'1130px', height:'370px', margin:'0px auto'}}
            >
                <div
                    style={{width:'502.90625px', height:'258px', top:'63.98px', left:'64px', textAlign:'left', 
                        paddingLeft:'6px'}}
                >
                    <h2 style={{fontFamily:'Fraunces', fontSize:'42px'}}>Get started with Whirl</h2>
                    <p
                        style={{width:'481px', height:'54', top:'3px', fontSize:'18px'}}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                    <div
                        style={{width:'174px', height:'43px', top:'158.02px', backgroundColor:'#0070A0', 
                            paddingTop:'8px', color:'#FFFFFF', textAlign:'center', verticalAlign:'middle'}}
                    >Book a demo
                    </div>
                    <div
                        style={{width:'502.90625px', height:'37px', top:'213px', display:'inline-flex'}}
                    >
                        <p
                            style={{width:'128px', height:'21px', top:'8.02px', color:'#626A72', 
                                display:'inline-flex', fontSize:'13px'}}
                        >
                            <FaCheck size={12} /> <span>Free 30-day trial</span>
                        </p>
                        <p
                            style={{width:'174px', height:'21px', top:'8.02px', left:'160px', color:'#626A72', display:'inline-flex', fontSize:'13px'}}
                        >
                            <FaCheck size={12} /> <span>No credit-card required</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhirlCall4Action2;