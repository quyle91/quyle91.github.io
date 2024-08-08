import { useTranslation } from "react-i18next";
import Fetching from "../templates/fetching";
const PersonalityCv = ({ dataSite }) => {
    const tinhcach = dataSite?.tinhcach || [];      
    const { t } = useTranslation();
    return ( 
        <>
            <div id="personality-cv">
                <h2 className="w3-padding-16">{t("Đôi chút về tính cách")}</h2>
                {
                    tinhcach?
                    tinhcach.map((item,key)=>(
                        <p key={key}>
                            {item.text}
                        </p>
                    ))
                    :<Fetching/>
                }
            </div>
        </>
    )
}
export default PersonalityCv