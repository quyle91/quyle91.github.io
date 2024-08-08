import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react';
import { fetchDataSite } from '../data/datasite';

const About = () => {
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

    const sub = dataSite?.vetoi?.sub || '';
    const main = dataSite?.vetoi?.main || '';

    return ( 
        <>
        <div id="about" className="w3-content w3-padding-32">
            <h2>{t("Về tôi")} </h2>
            <hr/>
            <div id="vetoi">
                <p><i>{sub}</i></p>
                <p>{main}</p>
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