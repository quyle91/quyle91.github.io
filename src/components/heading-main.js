import { useTranslation } from "react-i18next";
const HeadingMain = () => {
    const { t } = useTranslation();
    return ( 
    <>
        <header id="heading-main" className="w3-container w3-content w3-center" style={{padding: "64px 0px" }}>        
            <div>
                <h1 className="w3-jumbo">
                    <b>{t("Quý Lê")}</b>
                </h1>
                <span className="w3-tag w3-small w3-white w3-border">
                    Website Developer
                </span>             
            </div>      
            <div className="call-me">
                <a target="_blank" rel="noreferrer" href="tel:0972054206" className="mrr8 w3-button w3-green w3-padding-large w3-margin-top">
                    <i className="fa fa-phone-square"></i> {t("Gọi cho tôi")}
                </a> 
                <a target="_blank" rel="noreferrer" href="https://m.me/timquen2014" className="mrr8 w3-button w3-green w3-padding-large w3-margin-top">
                    <i className="fa fa-facebook-square"></i> Messenger
                </a>
                <a target="_blank" rel="noreferrer" href="http://zalo.me/0972054206" className="mrr8 w3-button w3-green w3-padding-large w3-margin-top ">
                    <img alt="z" style={{backgroundColor: "white" }} src="./img/icon/zalo.svg" width="16px"/> Zalo
                </a>
            </div>
        </header>
    </>
    )
}
export default HeadingMain