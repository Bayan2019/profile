import { MdOutlineArrowForwardIos } from "react-icons/md";

const WhirlCover = () => {
    return (
        <section
            style={{width:'1440px', height:'479px', margin:'0px auto', paddingBottom:'0px'}}
        >
            <div
                style={{width:'1130px', height:'433.578125px', top:'145px', left:'155px', 
                    display:'inline-flex', paddingBottom:'0px', marginBottom:'0px'}}
            >
                <div
                    style={{width:'525px', height:'321px', top:'56.28px', textAlign:'left', 
                        paddingBottom:'0px', marginBottom:'0px'}}
                >
                    <h2 style={{fontFamily:'Fraunces', fontSize:'42px'}}>
                        Your everyday tasks, automated.
                    </h2>
                    <p
                        style={{width:'481px', height:'54', top:'3px', fontSize:'18px'}}
                    >Whirl lets you design and streamline your everyday tasks and workflows in just a few clicks.
                    </p>
                    <div 
                        style={{display:'inline-flex'}}
                    >
                        <div
                            style={{width:'174px', height:'43px', top:'158.02px', backgroundColor:'#0070A0', paddingTop:'8px', color:'#FFFFFF', textAlign:'center', verticalAlign:'middle'}}
                        >Book a demo</div>
                        <div
                            style={{width:'110px', height:'43px', top:'158.02px', padding:'8px 0px', textAlign:'center', verticalAlign:'middle', display:'inline-flex', color:'#0070A0', marginLeft:'5px'}}
                        >Learn more <MdOutlineArrowForwardIos style={{marginTop:'5px'}} /></div>
                    </div>
                </div>
                <img src="/images/IMAGE-2.png" 
                    style={{width:'452px', height:'422px', left:'678px', borderRadius:'0', border:'none',
                        paddingBottom:'0px', marginBottom:'0px'}}/>
            </div>
        </section>
    )
}

export default WhirlCover;