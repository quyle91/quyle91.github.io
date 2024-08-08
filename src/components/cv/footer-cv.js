import { useTranslation } from "react-i18next";
import  LanguagesSwitcher from "../templates/languages-switcher"
import CvLink from "../templates/cvlink"
import Socials from "../templates/socials"

const FooterCv = () => {
    const { t } = useTranslation();
    return (
    <>
        <footer id="footer-cv" className="w3-xlarge">
            <div className="w3-padding-large">
                <CvLink/>
                <Socials />
                <LanguagesSwitcher/>
            </div>    
        </footer>
    </>
    )
}
export default FooterCv