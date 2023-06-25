import { useTranslation } from "react-i18next";
const TargetCv = () => {
    const { t } = useTranslation();
    return ( 
        <>
        <div id="target-cv">
            <blockquote>
                {t("Có nhiều năm kinh nghiệm với Wordpress như: phát triển theme/ plugin/ custom")}
                <br/>
                {t("Mục tiêu dài hạn: Full stack developer.")}
                <br/>
                {t("Mong muốn: Được làm việc trong môi trường chuyên nghiệp.")}
                <br/>
                {t("Mức lương mong muốn: 15tr - 20tr/ tháng.")}
            </blockquote>
        </div>
        </>
    )
}
export default TargetCv