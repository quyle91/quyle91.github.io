import Contact from "../contact"
import Donate from "./donate"
import FooterAdministratorz from "./footer-administratorz"

/*Content*/
import AdminzHeading from "./heading";
import AdminzQuote from "./quote";


const WrapperAdministratorz = () => {
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
					<AdminzHeading/>
					<AdminzQuote/>
					<h1>Đang cập nhật.</h1>
				</div>
				<Contact/>
				<Donate/>
				<FooterAdministratorz/>
			</div>
		</>
	)
}
export default WrapperAdministratorz