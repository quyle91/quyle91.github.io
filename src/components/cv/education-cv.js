import { useTranslation } from "react-i18next";
const EducationCv = () => {
    const { t } = useTranslation();
    return ( 
        <>
        <div id="education-cv">
            <h2 className="w3-padding-16">{t("Học vấn")}</h2>
            <div className="">
                
                <div className="w3-row">
                  <div className="w3-twothird">
                    <p><b>FPT POLYTECHNIC</b></p>
                    <em>{t("Chuyên ngành: Thiết kế website - Loại khá")} <a className="link" target="_blank" rel="noreferrer" href="https://caodang.fpt.edu.vn/tin-tuc-poly/guong-mat-poly/th-nhung-guong-mat-sinh-vien-tieu-bieu-cua-fpt-polytechnic-thanh-hoa.html">{t("Xem thêm")}</a></em>
                  </div>
                  <div className="w3-third">
                    <p>10/2012 - 05/2014</p>
                  </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default EducationCv