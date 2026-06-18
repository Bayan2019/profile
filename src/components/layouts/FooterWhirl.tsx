import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const FooterWhirl = () => {
    return (
        <footer style={{width:'1230px', height:'352px', left:'105px'}}>
            <div
                style={{width:'1130px', height:'216px', left:'50px', display:'inline-flex'}}
            >
                <div
                    style={{width:'432.8px', height:'216px'}}
                >
                    <img src="/images/IMAGE.png" style={{width:'135px', height:'47px', border:'none', borderRadius:'0'}} />
                    <div
                        style={{width:'143px', height:'38px', top:'67.02px', fontSize:'14px', textAlign:'left'}}
                    >
                        <p style={{height:'20px', margin:'1px'}}>Built by <span style={{color:'#0070A0', fontSize:'13px'}}>Nikolai Bain</span></p>
                        <p style={{height:'20px', margin:'1px'}}>Powered by <span style={{color:'#0070A0', fontSize:'13px'}}>Webflow</span></p>
                    </div>
                    <div
                        style={{width:'48px', height:'48px', top:'121.02px'}}
                    >
                    </div>
                </div>
                <div
                    style={{width:'216.39px', height:'216px', left:'448.8px', textAlign:'left'}}
                >
                    <p style={{fontSize:'15px', top:'0.02px', left:'0.2px', color:'#1F1F1F'}}>Info</p>
                    <p style={{height:'20px', fontSize:'14px', top:'40.02px', left:'0.2px', color:'#626A72', margin:'5px 0px'}}>Features</p>
                    <p style={{height:'20px', fontSize:'14px', top:'70.02px', left:'0.2px', color:'#626A72', margin:'5px 0px'}}>Pricing</p>
                    <p style={{height:'20px', fontSize:'14px', top:'100.02px', left:'0.2px', color:'#626A72', margin:'5px 0px'}}>Blog</p>
                    <p style={{height:'20px', fontSize:'14px', top:'130.02px', left:'0.2px', color:'#626A72', margin:'5px 0px'}}>Support</p>
                    <p style={{height:'20px', fontSize:'14px', top:'160.02px', left:'0.2px', color:'#626A72', margin:'5px 0px'}}>Terms & Conditions</p>
                    <p style={{height:'20px', fontSize:'14px', top:'190.02px', left:'0.2px', color:'#626A72', margin:'5px 0px'}}>Privacy Policy</p>
                </div>
                <div
                    style={{width:'216.39px', height:'216px', left:'681.19px', textAlign:'left'}}
                >
                    <p style={{fontSize:'15px', top:'0.02px', left:'0.2px', color:'#1F1F1F'}}>Admin</p>
                    <p style={{height:'20px', fontSize:'14px', top:'40.02px', left:'-0.19px', color:'#626A72', margin:'5px 0px'}}>Style Guide</p>
                    <p style={{height:'20px', fontSize:'14px', top:'70.02px', left:'-0.19px', color:'#626A72', margin:'5px 0px'}}>Licences</p>
                    <p style={{height:'20px', fontSize:'14px', top:'100.02px', left:'-0.19px', color:'#626A72', margin:'5px 0px'}}>Instructions</p>
                    <p style={{height:'20px', fontSize:'14px', top:'130.02px', left:'-0.19px', color:'#626A72', margin:'5px 0px'}}>Changelog</p>
                    <p style={{height:'20px', fontSize:'14px', top:'160.02px', left:'-0.19px', color:'#626A72', margin:'5px 0px'}}>Password</p>
                    <p style={{height:'20px', fontSize:'14px', top:'190.02px', left:'-0.19px', color:'#626A72', margin:'5px 0px'}}>404</p>
                </div>
                <div
                    style={{width:'216.39px', height:'216px', left:'913.58px', textAlign:'left'}}
                >
                    <p style={{fontSize:'15px', top:'0.02px', left:'0.2px', color:'#1F1F1F'}}>Newsletter</p>
                    <p 
                        style={{width:'200px', height:'72px', fontSize:'16px', top:'2px', color:'#1F1F1F'}}
                    >
                        Sign up for the latest news, company insights, and Whirl updates.
                    </p>
                    <div
                        style={{display:'inline-flex', width:'216.39px', height:'54px', top:'124px'}}
                    >
                        <input placeholder="Your email" style={{margin:'2px', fontSize:'13px', padding:'1px', border:'1px solid #DBDBDB'}}/>
                        <MdOutlineArrowForwardIos style={{marginTop:'17px'}}/>
                    </div>
                </div>
            </div>
            <div
                style={{width:'1130px', height:'1px', left:'50px', top:'280.02', backgroundColor:'#DEE5EB'}}
            >
            </div>
            <div
                style={{marginTop: '8px', width:'1130px', height:'35px', left:'50px', top:'317px', display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}
            >
                <div
                    style={{width:'390px', height:'19px', top:'0.02px', fontSize:'13px'}}
                >
                    © 2022 Whirl. All Rights Reserved. Illustrations by <span style={{color:'#0070A0'}}>Streamline</span>
                </div>
                <div
                    style={{width:'106px', height:'22.64px', left:'1024px', top:'7.17px', display: 'inline-flex', justifyContent:'space-between'}}
                >
                    <FaTwitter />
                    <FaLinkedin />
                    <FaFacebook />
                </div>
            </div>
        </footer>
    )
}

export default FooterWhirl;