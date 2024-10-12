import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { fetchDataSite } from '../../data/datasite';

const Socials = () => {
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

    // Use the socials array from the data
    const socials = dataSite?.socials || [];
    
    return (
        <div id="socials">
            <hr />
            {socials.map((social, index) => (
                <a key={index} className="w3-margin-right" href={social.link}>
                    <i className={`fa ${social.fontawesome} w3-hover-opacity`}></i>
                </a>
            ))}
            <span className="w3-margin-right w3-medium">{t("Mạng xã hội")}</span>
        </div>
    );
}
export default Socials