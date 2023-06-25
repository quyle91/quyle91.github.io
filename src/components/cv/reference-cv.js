import { useTranslation } from "react-i18next";
import Fetching from "../templates/fetching";

const PersonalityCv = ({data}) => {
    const { t } = useTranslation();
    return ( 
        <>
            <div id="reference-cv">
                <h2 className="w3-padding-16 ">{t("Người tham chiếu")}</h2>
                <div className="w3-row">
                    {
                        data?
                        data.map((item,key)=>(
                            <div key={key} className="w3-half ">
                                {item.text}
                            </div>
                        ))
                        :<Fetching/>
                    }                    
                </div>
            </div>
        </>
    )
}
export default PersonalityCv