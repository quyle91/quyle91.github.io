// Main page
import Nav from "../components/nav"
import BannerLeft from "../components/banner-left"
import BannerMobile from "../components/banner-mobile"

// Home page
import WrapperMain from "../components/wrapper-main"


const Home = () => {
    return (
        <>
            <Nav/>
            <BannerLeft/>
            <BannerMobile/>
            <WrapperMain/>
        </>
    )
}

export default Home