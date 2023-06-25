import { useTranslation } from "react-i18next";
const PersonalityCv = () => {
    const { t } = useTranslation();
    return ( 
        <>
            <div id="personality-cv">
                <h2 className="w3-padding-16">{t("Đôi chút về tính cách")}</h2>
                <p>{t("Là người hướng nội")}</p>
                <p>{t("Tiếp thu chậm. Thích tìm hiểu rõ ràng nếu có thể.")}</p>
                <p>{t("Thích xem phim Mỹ và văn hoá thực dụng của người Mỹ, thích nói đến kết quả đi kèm với phương pháp để đạt được kết quả đó. Nghe ko lọt tai những lời khen, chê vô nghĩa.")}</p>
            </div>
        </>
    )
}
export default PersonalityCv