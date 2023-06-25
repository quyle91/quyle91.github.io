import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
    return ( 
        <>
        <div id="about" className="w3-content w3-padding-32">
            <h2>{t("Về tôi")} </h2>
            <hr/>
            <div id="vetoi">
                <p><i>{t("Kinh nghiệm làm việc từ 2014 đến nay")}</i></p>
                <p>{t("Là người có trách nhiệm với công việc và hướng đến sự chuyên nghiệp. Tôi mong muốn nhận được sự tin tưởng của đồng nghiệp & khách hàng.")}</p>
                <p>
                <i>
                    <Link to="/cv">{t("Xem Cv của tôi")} </Link>
                </i>
                </p>
            </div>
        </div> 
        </>
    )
}
export default About