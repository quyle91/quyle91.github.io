import { useEffect, useState } from "react"
import { fetchDataSite } from '../../data/datasite';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import Fetching from "../templates/fetching";

const ProjectsCv = () => {
    const { t } = useTranslation();
    const [json_url, setJsonUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [duan, setDuan] = useState([]);
    const [duannoibat,setDuannoibat] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchDataSite();
            if (data && data.json_url) {
                setJsonUrl(data.json_url);
                fetchDataFromJSON(5, data.json_url);
            } else {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const fetchDataFromJSON = async (param, json_url) => {
        try {
            const response_duan = await fetch(json_url +'/wp-json/wp/v2/featured_item?per_page='+param);
            const jsonData_duan = await response_duan.json();
            setDuan(jsonData_duan);
            const response_duannoibat = await fetch(json_url+'/wp-json/options/duannoibat');
            const jsonData_duannoibat = await response_duannoibat.json();
            setDuannoibat(jsonData_duannoibat);
            setLoading(false);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };    
    
    return ( 
        <>
        <div id="projects">
            <h2 className="w3-padding-16">{t("Dự án gần đây")}</h2>
            <div className="">
                <ol className="w3-ol">
                    {
                        loading?
                        <li><Fetching/></li>:
                        duannoibat.map((item,key)=>(
                            <li key={key}>
                                <a className="link" target="_blank" rel="noreferrer" href={item.acf.link}>{item.post_title}</a>
                            </li>
                        ))
                    }
                    { 
                        loading?

                        <li><Fetching/></li>:
                        duan.map((item,key)=>(
                            <li key={key}>
                                <a className="link" target="_blank" rel="noreferrer" href={item.acf.link}>{item.title.rendered}</a>
                            </li>
                        ))
                    }
                    <li><Link className="link" to="/duan">{t("Xem thêm")}...</Link></li>
                </ol>
            </div>
        </div>
        </>
    )
}
export default ProjectsCv