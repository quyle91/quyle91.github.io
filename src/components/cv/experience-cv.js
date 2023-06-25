import * as React from 'react'
import { data_companies, data_jobs } from '../../data/datas'
import { useTranslation } from "react-i18next";
const ExperienceCv = () => {
    

    const getCompanyUrl = (company) =>{
        let link = "#"
        data_companies.forEach((item,key)=>{
            if(item.id === company){
                link = item.url
            }
        })
        return link
    }
    const { t } = useTranslation();


    return (
        <>
            <div id="experience-cv">
                <h2 className="w3-padding-16">{t("Kinh nghiệm làm việc")}</h2>
                {
                    data_jobs.map((item,key)=>(
                        <React.Fragment key={key}>
                            <div className="w3-row">
                              <div className="w3-twothird">
                                <h6>
                                    <strong style={{textTransform:"uppercase"}}>
                                        <a target="_blank" rel="noreferrer" href={getCompanyUrl(item.company)} className="w3-uppercase">{item.company}</a>
                                    </strong>
                                </h6>
                                <i>{item.role}</i>
                              </div>
                              <div className="w3-third">
                                <p>{item.date}</p>
                              </div>
                            </div>
                            <ol className="w3-ol">
                                {
                                    item.details.map((zitem,zkey)=>(
                                        <li key={zkey}>
                                            {zitem}
                                        </li>
                                    ))

                                }
                            </ol>
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}
export default ExperienceCv