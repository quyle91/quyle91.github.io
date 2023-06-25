import { useTranslation } from "react-i18next";
import { data_me } from '../../data/datas'
import  LanguagesSwitcher from "../../components/languages-switcher"
import CvLink from "./cvlink"

const FooterCv = () => {
    const { t } = useTranslation();
    return (
    <>
        <footer id="footer-cv" className="w3-xlarge">
            <div className="w3-padding-large">
                <a className="w3-margin-right" href={data_me.facebook}><i className="fa fa-facebook-official w3-hover-opacity"></i></a>
                <a className="w3-margin-right" href={data_me.linkedin}><i className="fa fa-linkedin w3-hover-opacity"></i></a>
                <a className="w3-margin-right" href={data_me.wordpress}><i className="fa fa-wordpress w3-hover-opacity"></i></a>
                <a className="w3-margin-right" href={data_me.github}><i className="fa fa-github w3-hover-opacity"></i></a>
                <span className="w3-margin-right w3-medium">{t("Tìm tôi trên mạng xã hội")}</span> 
                
                <CvLink/>
                <LanguagesSwitcher/>
            </div>    
        </footer>
    </>
    )
}
export default FooterCv