// Main page
import Nav from "../components/nav"
import BannerMobile from "../components/banner-mobile"
import BannerLeft from "../components/banner-left"

// // Home page
import WrapperMain from "../components/wrapper-main"


const Home = () => {
    return (
        <>
            <Nav/>
            <BannerMobile/>
            <BannerLeft/>
            <WrapperMain/>
        </>
    )
}

export default Home