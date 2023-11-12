import Footer from "./footer"
import Heading from "./heading";
import Quote from "./quote";
import ContentAdminz from "./content-adminz";
// import Contact from "../contact"
// import Donate from "./donate"

const Wrapper = () => {
	document.body.classList.remove(...document.body.classList)
	document.body.classList.add("administrator-z")
	
	return (
		<>
			<div 
			id="wrapper-administratorz"
			className="w3-main w3-padding-large"
			style={{
				marginRight: "15%",
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "right top",
				backgroundAttachment: "fixed",
				paddingBottom: "0px !important"
			}}
			>
				<div className="content w3-content">
					<Heading/>
					<Quote/>
					
				</div>
				<ContentAdminz />
				{/* <Contact/> */}
				{/* <Donate/> */}
				<Footer/>
			</div>
		</>
	)
}
export default Wrapper