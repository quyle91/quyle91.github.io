import { useTranslation } from "react-i18next";

const NoData = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="item w3-col s6 web w3-container w3-margin-top">{t("Không có dữ liệu")}.</div>
        </>
    )
}
export default NoData