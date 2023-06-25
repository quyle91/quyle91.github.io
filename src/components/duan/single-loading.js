import { useTranslation } from "react-i18next";
const SingleLoading = () => {
    const { t } = useTranslation();
    return (
        <>
        <div className="item col web w3-container w3-half w3-margin-top">
            <div className="w3-row w3-padding-16">
                {t("Đang fetch dữ liệu. Chờ tý nha...")}
            </div>
        </div>
        </>
    )
}
export default SingleLoading