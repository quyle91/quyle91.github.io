import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

const Nav = () => {
    const { t } = useTranslation();
    const closeNav = () => {
        document.getElementById("nav").style.display = "none"
    }
    const openNav = () => {
        document.getElementById("nav").style.width = "70%"
        document.getElementById("nav").style.display = "block"
    }
    return (
        <>
        <nav id="nav" className = "w3-sidebar w3-animate-right w3-xxlarge"
        style = {
            {
                display: "none",
                paddingTop: "150px",
                right: "0px",
                zIndex: 2,
                width: "70%",
            }
        }
        >
            <span
                className = "w3-button w3-xxxlarge w3-display-topright"
                style = { { padding: "0 12px" } }
                >
                <i className="fa fa-remove" onClick={closeNav} ></i>
            </span>
            <div id="spData1" className="w3-bar-block w3-center">
                <Link onClick={closeNav} className="w3-bar-item w3-button w3-large" to="/">{t("Trang chính")}</Link>
                <Link onClick={closeNav} className="w3-bar-item w3-button w3-large" to="/duan">{t("Dự án")}</Link>
                <Link onClick={closeNav} className="w3-bar-item w3-button w3-large" to="/cv">CV</Link>
                <Link onClick={closeNav} className="w3-bar-item w3-button w3-large" to="/blog">{t("Blog")}</Link>
                <Link onClick={closeNav} className="w3-bar-item w3-button w3-large" to="/reactjstest">Reactjs Test</Link>
            </div>
        </nav>
        <span id="nav--bar"
            className = "w3-button w3-top w3-white w3-xxlarge w3-hover-text-black"
            style = { { width: "auto", right: 0 } }
            onClick = { openNav }
            >
                <i className="fa fa-bars"></i>
        </span> 
        </>
    )

}
export default Nav