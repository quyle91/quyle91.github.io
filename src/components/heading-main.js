import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { fetchDataSite } from '../data/datasite';

const HeadingMain = () => {
    const { t } = useTranslation();
    const [dataSite, setDataSite] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchDataSite();
            if (data) {
                setDataSite(data);
            }
        };

        loadData();
    }, []);

    // Tránh lỗi nếu dataSite chưa được load
    const name = dataSite?.information?.name || '';
    const role = dataSite?.information?.role || '';
    const phone = dataSite?.information?.phone || '';
    const messenger = dataSite?.information?.messenger || '';
    const zalo = dataSite?.information?.zalo || '';



    return (
        <header id="heading-main" className="w3-container w3-content w3-center" style={{ padding: "64px 0px" }}>
            <div>
                <h1 className="w3-jumbo">
                    <b>{name}</b>
                </h1>
                <span className="w3-tag w3-small w3-white w3-border">
                    {role}
                </span>
            </div>
            <div className="call-me">
                <a target="_blank" rel="noreferrer" href={`tel:${phone}`} className="mrr8 w3-button w3-green w3-padding-large w3-margin-top">
                    <i className="fa fa-phone-square"></i>
                    {t("Gọi cho tôi")}
                </a>
                <a target="_blank" rel="noreferrer" href={messenger} className="mrr8 w3-button w3-green w3-padding-large w3-margin-top">
                    <i className="fa fa-facebook-square"></i>
                    Messenger
                </a>
                <a target="_blank" rel="noreferrer" href={zalo} className="mrr8 w3-button w3-green w3-padding-large w3-margin-top">
                    <img alt="z" style={{ backgroundColor: "white" }} src="./img/icon/zalo.svg" width="16px" />
                    Zalo
                </a>
            </div>
        </header>
    );
}

export default HeadingMain;
