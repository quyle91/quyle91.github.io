import { useTranslation } from "react-i18next";
import  {data_lngs} from "../../data/i18n"
import * as React from 'react'

const LanguagesSwitcher = () => {
    const { t, i18n } = useTranslation();
	const handleTrans = (code) => {
        i18n.changeLanguage(code);
    };

    return (
    	<>
            <div id="language_switcher" className="w3-small">
                <hr />
                {t("")}
                {data_lngs.map((lng, key) => (
                    <React.Fragment key={key}>
                        <img
                            className="w3-white w3-small w3-button w3-hover-border-grey w3-round w3-border w3-hover-white"
                            style={{margin: "5px", padding: "5px"}}
                            onClick={() => handleTrans(lng.code)}
                            alt="z" 
                            height="30px" 
                            src={lng.flag}
                        />
                    </React.Fragment>
                ))}
                <span className="">W3school.com, GPT Chat Open AI</span>
            </div>
    	</>	
	)
}

export default LanguagesSwitcher