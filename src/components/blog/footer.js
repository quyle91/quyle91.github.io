import Socials from "../templates/socials"
import LanguagesSwitcher from "../templates/languages-switcher"
import CvLink from "../templates/cvlink"

const Footer = () => {
    return (
    <>
        <footer id="footer-administratorz" className="w3-container w3-padding-64 w3-light-gray w3-xlarge" style={{margin: "24px -24px -24px -24px"}}>   
            <div className="w3-content">
                <Socials />     
                <CvLink />
                <LanguagesSwitcher />  
            </div>    
        </footer>
    </>
    )
}
export default Footer