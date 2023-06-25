import * as React from 'react'
import { useTranslation } from "react-i18next";
import Fetching from "../templates/fetching";
const InterestsCv = ({data}) => {
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
                        data?
                        data.map((item,key)=>(
                            <React.Fragment key={key}>
                                <button className="w3-padding-small w3-small w3-button w3-border w3-round" style={{margin: "0 5px 5px 0px"}}>
                                    {item.text}
                                </button>
                            </React.Fragment>
                        ))
                        :<Fetching/>
                    }
                </p>
            </div>
        </div>
        </>
    )
}
export default InterestsCv