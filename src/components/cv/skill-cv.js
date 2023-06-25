import * as React from 'react'
import { useTranslation } from "react-i18next";
import { data_skill } from '../../data/datas'
import SingleSkill from "../templates/single-skill"





const SkillCv = () => {

    const { t } = useTranslation();
    return ( 
        <>
        <div id="skill-cv">
            <h2 className="w3-padding-16">{t("Kỹ năng")}</h2>
            <hr/>
            <div id="kynang">
                {
                    data_skill.map((item,key)=> (
                        <React.Fragment key={key}>
                            <SingleSkill item={item}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
        </>
    )
}
export default SkillCv