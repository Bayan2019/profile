import FooterWhirl from "../components/layouts/FooterWhirl";
import HeaderWhirl from "../components/layouts/HeaderWhirl"
import WhirlAbout from "../components/whirl/WhirlAbout";
import WhirlBlogs from "../components/whirl/WhirlBlogs";
import WhirlCall4Action1 from "../components/whirl/WhirlCall4Action1";
import WhirlCall4Action2 from "../components/whirl/WhirlCall4Action2";
import WhirlCover from "../components/whirl/WhirlCover";
import WhirlPartners from "../components/whirl/WhirlPartners";
import WhirlPros from "../components/whirl/WhirlPros";
import WhirlServices from "../components/whirl/WhirlServices";
import WhirlTasks from "../components/whirl/WhirlTasks";

const ProjectWhirl = () => {
    return (
        // <>
        <div style={{width:'1440px', padding:'auto'}}>
            <HeaderWhirl />
            <main style={{width:'1440px', alignContent:'center', alignItems:'center', padding:'0px auto'}}>
                <WhirlCover />
                <WhirlPartners />
                <WhirlPros />
                <WhirlServices />
                <WhirlAbout />
                <WhirlCall4Action1 />
                <WhirlTasks />
                <WhirlBlogs />
                <WhirlCall4Action2 />
            </main>
            <FooterWhirl />
        </div>
        // </>
    )
}

export default ProjectWhirl;