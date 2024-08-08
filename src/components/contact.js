import { useState, useEffect } from 'react';
import { fetchDataSite } from '../data/datasite';
import { useTranslation } from "react-i18next";

const Contact = () => {
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
    const phone = dataSite?.information?.phone || '';
    const mail = dataSite?.information?.mail || '';

    return (
        <div id="contact" className="w3-padding-16 w3-content" style={{ marginBottom: "64px" }}>
            <h2>{t("Thông tin liên hệ")}</h2>
            <hr />

            <div className="w3-section">
                <p>
                    <i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i>
                    Phone:
                    <span className="my-phone">
                        <a href={`tel:${phone}`}>{phone}</a>
                    </span>
                </p>
                <p>
                    <i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"></i>
                    Email:
                    <span className="my-email">
                        <a href={`mailto:${mail}`}>{mail}</a>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Contact;
