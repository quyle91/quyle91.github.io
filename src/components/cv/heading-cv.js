import { useTranslation } from "react-i18next";
const HeadingCv = () => {
    const { t } = useTranslation();
    return ( 
    <>
        <header id="heading-cv" className="w3-padding-large">
            <div className="">
                <h1 className="w3-xxxlarge">
                    <b>{t("Lê Văn Quý")}</b>
                </h1>
                <h3>
                    <em>Web Developer</em>
                </h3>
                <hr/>
            </div>
        </header>
    </>
    )
}
export default HeadingCv