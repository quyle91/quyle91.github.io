import { useTranslation } from "react-i18next";
import Fetching from "../templates/fetching";
const AvatarCv = ({dataSite}) => {
    const { t } = useTranslation();
    const avatar = dataSite?.information?.avatar || '';
    return ( 
        <>
        <div id="avatar-cv" className="w3-margin-bottom">
            <h2 className="w3-padding-16">{t("Info")}</h2>
            {
                (dataSite)?
                <img src={avatar} className="w3-round w3-image w3-border" alt="z" style={{padding: '8px', width:"220px"}}/>
                :<Fetching/>
            }            
        </div>
        </>
    )
}
export default AvatarCv