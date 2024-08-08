import { useTranslation } from "react-i18next";


const CvLink = () => {
    const { t } = useTranslation();

    return ( 
        <>
        <div id="cvlink">
            <hr />
            <div className="w3-small">
                {t("Xem phiên bản online tại")}: <a className="link" target="_blank" rel="noreferrer" href="https://quyle91.github.io/#/cv">quyle91.github.io/#/cv</a>
            </div>
        </div>
        </>
    )
}
export default CvLink