import { useEffect, useState } from "react"
import { fetchDataSite } from '../../data/datasite';
import HeadingCv from "./heading-cv"
import FooterCv from "./footer-cv"
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

const WrapperCv = () => {
	document.body.classList.remove(...document.body.classList)
	document.body.classList.add("cv")
	
	const css = {
		maxWidth: "1200px",
		margin: "auto"
	}

	const [dataSite, setDataSite] = useState(null);
	useEffect(() => {
		const loadData = async () => {
			const data = await fetchDataSite();
			if (data) {
				setDataSite(data);
			}
		};
		loadData();
	}, []);

	return (
		<>
			<div id="wrapper-cv" className="w3-main w3-white w3-text-dark-gray" style={css}>
				<HeadingCv dataSite={dataSite}/>
				<div id="cvcontent" className="w3-row">
					<div className="w3-third w3-padding-large w3-blue-gray">
						<AvatarCv dataSite={dataSite} />
						<ContactCv dataSite={dataSite} />
						<SkillCv dataSite={dataSite} />
						<InterestsCv dataSite={dataSite} />
						
					</div>
					<div className="w3-twothird w3-padding-large">
						<TargetCv dataSite={dataSite} />
						<ProjectsCv/>
						<ExperienceCv dataSite={dataSite}/>
						<EducationCv dataSite={dataSite} />
						<PersonalityCv dataSite={dataSite}/>
						<ReferenceCv dataSite={dataSite} />
					</div>
				</div>
				<FooterCv/>
			</div>
		</>
	)
}
export default WrapperCv