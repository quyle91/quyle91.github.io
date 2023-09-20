import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import {data_blog} from "../../data/datas"
import Fetching from "../templates/fetching";

const ProjectsCv = () => {

    const [loading, setLoading] = useState(true);
    // 1. Cho lần chạy đầu tiên.
    const [duan, setDuan] = useState([]);
    const [duannoibat,setDuannoibat] = useState([]);

    useEffect(() => {
        fetchDataFromJSON(5); // lần load đầu tiên là 9
    }, []); // Mảng rỗng sẽ đảm bảo hàm useEffect chỉ được gọi một lần khi component được tải lần đầu

    const fetchDataFromJSON = async (param) => {
        // console.log("Fetching data from json param:", param);
        try {

            // du an
            const response_duan = await fetch(data_blog.test_url+'/wp-json/wp/v2/featured_item?per_page='+param);
            const jsonData_duan = await response_duan.json();
            // console.log(jsonData_duan);
            setDuan(jsonData_duan);


            // du an noi bat
            const response_duannoibat = await fetch(data_blog.test_url+'/wp-json/options/duannoibat');
            const jsonData_duannoibat = await response_duannoibat.json();
            // console.log(jsonData_duannoibat);
            setDuannoibat(jsonData_duannoibat);

            setLoading(false);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };    


    
    const { t } = useTranslation();
    return ( 
        <>
        <div id="projects">
            <h2 className="w3-padding-16">{t("Dự án gần đây")}</h2>
            <div className="">
                <ol className="w3-ol">
                    {/*<li><a className="link" target="_blank" rel="noreferrer" href="https://wordpress.org/plugins/administrator-z/">{t("Plugin wordpress Administrator Z")}</a></li>
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://wordpress.org/plugins/auto-product-after-upload-image/">{t("Plugin wordpress tự tạo sản phẩm khi tải hình ảnh")}</a></li>*/}
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