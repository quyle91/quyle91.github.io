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
    // Tránh lỗi nếu dataSite chưa được load
    const facebook = dataSite?.information?.facebook || '';
    const linkedin = dataSite?.information?.linkedin || '';
    const wordpress = dataSite?.information?.wordpress || '';
    const github = dataSite?.information?.github || '';

    
    return (
        <>
            <div id="socials">
                <hr />
                <a className="w3-margin-right" href={facebook}><i className="fa fa-facebook-official w3-hover-opacity"></i></a>
                <a className="w3-margin-right" href={linkedin}><i className="fa fa-linkedin w3-hover-opacity"></i></a>
                <a className="w3-margin-right" href={wordpress}><i className="fa fa-wordpress w3-hover-opacity"></i></a>
                <a className="w3-margin-right" href={github}><i className="fa fa-github w3-hover-opacity"></i></a>
                <span className="w3-margin-right w3-medium">{t("Mạng xã hội")}</span> 
            </div>
        </>
    )
}
export default Socials