import { useTranslation } from "react-i18next";
import { dataSite } from '../data/datasite'
const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <div id="contact" className="w3-padding-16 w3-content " style={{ marginBottom: "64px" }}>
        <h2>{t("Thông tin liên hệ")}</h2>
        <hr />

        <div className="w3-section">
          <p>
            <i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> 
            Phone: 
            <span className="my-phone">
              <a href={`tel:${dataSite.phone}`}>{dataSite.phone}</a>
            </span>
          </p>
          <p>
            <i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> 
            Email: 
            <span className="my-email">
              <a href={`mailto:${dataSite.mail}`}>{dataSite.mail}</a>
            </span>
          </p>
        </div>


      </div>
    </>
  )
}
export default Contact