import * as React from 'react'
import { useTranslation } from "react-i18next";
import Fetching from "../templates/fetching";

const ExperienceCv = ({data}) => {
    const { t } = useTranslation();

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
                                            <span className="w3-uppercase">{item.congty}</span>
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