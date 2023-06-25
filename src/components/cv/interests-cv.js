import * as React from 'react'
import { data_interest } from '../../data/datas'
import { useTranslation } from "react-i18next";
const InterestsCv = () => {
    const { t } = useTranslation();
    return ( 
        <>
        <div id="interests-cv">
            <h2 className="w3-padding-16">
                {t("Sở thích")}
            </h2>   
            <hr/>
            <div className="w3-small">
                <p>
                    {
                        data_interest.map((item,key) => (
                            <React.Fragment key={key}>
                                <button className="w3-white w3-hover-green w3-padding-small w3-small w3-button w3-border w3-round" style={{margin: "0 5px 5px 0px"}}>{item}</button>
                            </React.Fragment>
                        ))
                    }
                </p>
            </div>
        </div>
        </>
    )
}
export default InterestsCv