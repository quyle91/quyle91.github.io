import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import Fetching from "../templates/fetching";
import { fetchDataSite } from "../../data/datasite"


const ExperienceCv = ({data}) => {
    return;
    const { t } = useTranslation();


    const [dataCongty,setDataCongty] = useState([]);

    useEffect(() => {
        fetchDataCongty(); // lần load đầu tiên là 9
    }, []);
    
    const fetchDataCongty = async ()=>{
        try {
            const request = await fetch(dataSite.json_url+'/wp-json/wp/v2/congty');
            const response = await request.json();
            setDataCongty(response);

        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

    const getCongtyName = (value)=>{
        const result = dataCongty.map((item,key)=>
            item.id === value ? item.name : ""
        )
        return result;
    }

    return (
        <>
            <div id="experience-cv">
                <h2 className="w3-padding-16">{t("Kinh nghiệm làm việc")}</h2>
                {
                    data?
                    data.map((item,key)=>(
                        <React.Fragment key={key}>
                            <div className="w3-row">
                                <div className="w3-twothird">
                                    <h6>
                                        <strong style={{textTransform:"uppercase"}}>
                                            <span className="w3-uppercase">{getCongtyName(item.congty)}</span>
                                        </strong>
                                    </h6>
                                    <i>{item.vitri}</i>
                                </div>
                                <div className="w3-third">
                                    <p>{item.thoigian}</p>
                                </div>
                            </div>
                            <ol className="w3-ol">
                                {
                                    item.congviec.map((item, key) => (                                        
                                        <li key={key}>
                                            {item.item}
                                        </li>
                                    ))
                                }
                            </ol>
                        </React.Fragment>
                    ))
                    :<Fetching/>
                }
            </div>
        </>
    )
}
export default ExperienceCv