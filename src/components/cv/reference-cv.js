import { useTranslation } from "react-i18next";
const PersonalityCv = () => {
    const { t } = useTranslation();
    return ( 
        <>
            <div id="reference-cv">
                <h2 className="w3-padding-16 ">{t("Người tham chiếu")}</h2>
                <div className="w3-row">
                    <div className="w3-half ">
                        Trịnh Văn Minh - 0911381688 - {t("Giám đốc điều hành")} Minh Khang Agency
                    </div>
                </div>
            </div>
        </>
    )
}
export default PersonalityCv