import LanguagesSwitcher from "../templates/languages-switcher";
import Socials from "../templates/socials";


const Footer = () => {
    return (
        <>
            <footer id="footer" className="w3-xlarge">
                <div className="w3-content">
                    <Socials />
                    <LanguagesSwitcher />
                </div>
            </footer>

        </>
    )
}
export default Footer