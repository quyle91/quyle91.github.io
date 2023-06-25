import { useTranslation } from "react-i18next";
import  LanguagesSwitcher from "./languages-switcher"


const Footer = () => {
    const { t } = useTranslation();
    return (
    <>
        <footer id="footer" className="w3-xlarge">
            <div className="w3-content">
                <a className="w3-margin-right" href="https://facebook.com/timquen2014"><i className="fa fa-facebook-official w3-hover-opacity"></i></a>
                <a className="w3-margin-right" href="https://www.linkedin.com/in/quyle91/"><i className="fa fa-linkedin w3-hover-opacity"></i></a>
                <a className="w3-margin-right" href="https://profiles.wordpress.org/quyle91/"><i className="fa fa-wordpress w3-hover-opacity"></i></a>
                <a className="w3-margin-right" href="https://github.com/quyle91"><i className="fa fa-github w3-hover-opacity"></i></a>
                <span className="w3-margin-right w3-medium">{t("Tìm tôi trên mạng xã hội")}</span>        
                <LanguagesSwitcher/>
            </div>    
        </footer>
        
    </>
    )
}
export default Footer