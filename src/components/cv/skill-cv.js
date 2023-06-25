import * as React from 'react'
import { useTranslation } from "react-i18next";
import SingleSkill from "../templates/single-skill"
import Fetching from "../templates/fetching";




const SkillCv = ({data}) => {
    const { t } = useTranslation();
    return ( 
        <>
        <div id="skill-cv">
            <h2 className="w3-padding-16">{t("Kỹ năng")}</h2>
            <hr/>
            <div id="kynang">
                {
                    data?
                    data.map((item,key)=>(
                        <React.Fragment key={key}>
                            <SingleSkill item={item}/>
                        </React.Fragment>
                    ))
                    :<Fetching/>
                }
            </div>
        </div>
        </>
    )
}
export default SkillCv