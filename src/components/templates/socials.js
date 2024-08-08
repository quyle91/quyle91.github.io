import { useTranslation } from "react-i18next";
import { dataSite } from '../../data/datasite'
const Socials = () => {
    const { t } = useTranslation();
    return (
        <>
            <div id="socials">
                <hr />
                <a className="w3-margin-right" href={dataSite.facebook}><i className="fa fa-facebook-official w3-hover-opacity"></i></a>
                <a className="w3-margin-right" href={dataSite.linkedin}><i className="fa fa-linkedin w3-hover-opacity"></i></a>
                <a className="w3-margin-right" href={dataSite.wordpress}><i className="fa fa-wordpress w3-hover-opacity"></i></a>
                <a className="w3-margin-right" href={dataSite.github}><i className="fa fa-github w3-hover-opacity"></i></a>
                <span className="w3-margin-right w3-medium">{t("Mạng xã hội")}</span> 
            </div>
        </>
    )
}
export default Socials