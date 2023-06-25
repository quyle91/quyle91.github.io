import * as React from 'react'
import { useTranslation } from "react-i18next";
import Fetching from "../templates/fetching";

const EducationCv = ({data}) => {
    const { t } = useTranslation();
    return ( 
        <>
        <div id="education-cv">
            <h2 className="w3-padding-16">{t("Học vấn")}</h2>
            <div className="">
                {
                    data?
                    data.map((item,key)=>(
                        <div key={key} className="w3-row">
                            <div className="w3-twothird">
                                <p><b>{item.truong}</b></p>
                                <em>
                                    {item.text}
                                </em>
                            </div>
                            <div className="w3-third">
                                <p>{item.thoigian}</p>
                            </div>
                        </div>
                    ))
                    :<Fetching/>
                }
                
            </div>
        </div>
        </>
    )
}
export default EducationCv