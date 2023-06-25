import HeadingDuan from "./heading-duan"
import ContentDuan from "./content-duan"
import Footer from "../footer"

const WrapperDuan = () => {
	document.body.classList.remove(...document.body.classList)
	document.body.classList.add("projects")
	
	const style = {
        marginLeft: "30%",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        backgroundAttachment: "fixed",
	}
	return (
		<>
		<div 
		id="wrapper-projects"
		className="w3-main w3-padding-large"
		style={style}
		>
			<HeadingDuan/>
			<ContentDuan/>
			<Footer/>
		</div>
		</>
	)
}
export default WrapperDuan