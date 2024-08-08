import { useEffect, useState } from "react"
import HeadingCv from "./heading-cv"
import AvatarCv from "./avatar-cv"
import ContactCv from "./contact-cv"
import SkillCv from "./skill-cv"
import InterestsCv from "./interests-cv"
import TargetCv from "./target-cv"
import ProjectsCv from "./projects-cv"
import ExperienceCv from "./experience-cv"
import EducationCv from "./education-cv"
import PersonalityCv from "./personality-cv"
import ReferenceCv from "./reference-cv"
import FooterCv from "./footer-cv"

import {dataSite} from "../../data/datasite"


const WrapperCv = () => {
	document.body.classList.remove(...document.body.classList)
	document.body.classList.add("cv")
	
	const css = {
		maxWidth: "1200px",
		margin: "auto"
	}

	const [data,setData] = useState([]);
	useEffect(() => {
        fetchDataFromJSON();
    }, []);

    const fetchDataFromJSON = async () => {        
        try {
        	const response = await fetch(dataSite.source+'/wp-json/options/cv?field=avatar,info,information,kynang,sothich,muctieu,kinhnghiemlamviec,hocvan,tinhcach,nguoithamchieu');
        	const data = await response.json();
        	setData(data);


    	} catch (error) {
        console.log('Error fetching data:', error);
        }
    };


	return (
		<>
			<div id="wrapper-cv" className="w3-main w3-white w3-text-dark-gray" style={css}>
				<HeadingCv/>
				<div id="cvcontent" className="w3-row">
					<div className="w3-third w3-padding-large w3-blue-gray">
						<AvatarCv data={data.avatar}/>
						<ContactCv data={data.info}/>
						<SkillCv data={data.kynang}/>
						<InterestsCv data={data.sothich}/>
						
					</div>
					<div className="w3-twothird w3-padding-large">
						<TargetCv data={data.muctieu}/>
						<ProjectsCv/>
		          		<ExperienceCv data={data.kinhnghiemlamviec}/>
			          	<EducationCv data={data.hocvan}/>
			          	<PersonalityCv data={data.tinhcach}/>
			          	<ReferenceCv data={data.nguoithamchieu}/>
					</div>
				</div>
				<FooterCv/>
			</div>
		</>
	)
}
export default WrapperCv