import Contact from "../contact"
import Donate from "./donate"
import Footer from "./footer"

/*Content*/
import Heading from "./heading";
import Quote from "./quote";


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
				backgroundAttachment: "fixed"
			}}
			>
				<div className="content w3-content">
					<Heading/>
					<Quote/>
					<h1>Đang cập nhật.</h1>
				</div>
				<Contact/>
				<Donate/>
				<Footer/>
			</div>
		</>
	)
}
export default Wrapper