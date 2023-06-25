import HeadingMain from "./heading-main"
import About from "./about"
import ProjectOverview from "./project-overview"
import Contact from "./contact"
import Footer from "./footer"
/*import Gmap from "./gmap"*/

const WrapperMain = () => {
	document.body.classList.remove(...document.body.classList)
	document.body.classList.add("main")
	
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
		id="wrapper-main"
		className="w3-main w3-padding-large"
		style={style}
		>
			<HeadingMain/>
			<About/>
			<ProjectOverview/>
			<Contact/>
			<Footer/>
		</div>
		</>
	)
}
export default WrapperMain