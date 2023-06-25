

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



const WrapperCv = () => {
	document.body.classList.remove(...document.body.classList)
	document.body.classList.add("cv")
	
	const css = {
		maxWidth: "1200px",
		margin: "auto"
	}


	return (
		<>
			<div id="wrapper-cv" className="w3-main w3-white w3-text-dark-gray" style={css}>
				<HeadingCv/>
				<div id="cvcontent" className="w3-row">
					<div className="w3-third w3-padding-large w3-blue-gray">
						<AvatarCv/>

						<ContactCv/>
						<SkillCv/>
						<InterestsCv/>
						
					</div>
					<div className="w3-twothird w3-padding-large">
						<TargetCv/>
						<ProjectsCv/>
		          		<ExperienceCv/>
			          	<EducationCv />
			          	<PersonalityCv/>
			          	<ReferenceCv/>
					</div>
				</div>
				<FooterCv/>
			</div>
		</>
	)
}
export default WrapperCv