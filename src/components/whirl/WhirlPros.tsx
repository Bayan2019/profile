import { BsLightningCharge } from "react-icons/bs";
import { PiMoneyWavy } from "react-icons/pi";

const WhirlPros = () => {
    return (
        <section
            style={{width:'1130px', height:'250px', left:'155px', margin:'0px auto', display:'inline-flex'}}
        >
            <div
                style={{width:'355px', height:'250px',  backgroundColor:'#FAEA73', textAlign:'left', padding:'25px'}}
            >

                <BsLightningCharge style={{fontSize:'32px'}} />
                <p
                    style={{fontSize:'25px', fontFamily:'Fraunces'}}
                >
                    Fast. Really fast.
                </p>
                <p
                    style={{fontSize:'15px'}}
                >
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div
                style={{width:'355px', height:'250px', backgroundColor:'#CCEFF6', left:'387px', margin:'0px 5px',
                    textAlign:'left', padding:'25px'
                }}
            >
                <PiMoneyWavy style={{fontSize:'32px'}} />
                <p
                    style={{fontSize:'25px', fontFamily:'Fraunces'}}
                >
                    More bang for buck.
                </p>
                <p
                    style={{fontSize:'15px'}}
                >
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div
                style={{width:'355px', height:'250px', backgroundColor:'#F7CEDC', left:'775px', 
                    textAlign:'left', padding:'25px'}}
            >
                {/* <BsLightningCharge style={{fontSize:'32px'}} /> */}
                <p
                    style={{fontSize:'21px', margin:'0px'}}
                >
                    👌🏿
                </p>
                <p
                    style={{fontSize:'25px', fontFamily:'Fraunces'}}
                >
                    Safe and secure.
                </p>
                <p
                    style={{fontSize:'15px'}}
                >
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </section>
    )
}

export default WhirlPros;