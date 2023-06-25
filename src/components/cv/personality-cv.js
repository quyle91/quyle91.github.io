import { useTranslation } from "react-i18next";
import Fetching from "../templates/fetching";
const PersonalityCv = ({data}) => {
    const { t } = useTranslation();
    return ( 
        <>
            <div id="personality-cv">
                <h2 className="w3-padding-16">{t("Đôi chút về tính cách")}</h2>
                {
                    data?
                    data.map((item,key)=>(
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