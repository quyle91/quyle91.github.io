import { useTranslation } from "react-i18next";
import Fetching from "../templates/fetching";
const AvatarCv = ({data}) => {
    const { t } = useTranslation();
    return ( 
        <>
        <div id="avatar-cv" className="w3-margin-bottom">
            <h2 className="w3-padding-16">{t("Info")}</h2>
            {
                (data)?
                <img src={data} className="w3-round w3-image w3-border" alt="z" style={{padding: '8px', width:"220px"}}/>
                :<Fetching/>
            }            
        </div>
        </>
    )
}
export default AvatarCv