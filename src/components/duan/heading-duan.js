import { useTranslation } from "react-i18next";
const HeadingDuan = () => {
    const { t } = useTranslation();
    return ( 
    <>
        <header id="heading-projects" className="w3-content">
            <div className="w3-padding-32 ">
                <h1 className="w3-xxxlarge">
                    <b>{t("Các dự án đã hoàn thành")}</b>
                </h1>
            </div>
        </header>
    </>
    )
}
export default HeadingDuan