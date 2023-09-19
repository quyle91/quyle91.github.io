import Footer from "./footer"
import Heading from "./heading";
import Content from "./content";


const WrapperBlog = () => {
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
				
				<Heading/>
				<hr/>
				<Content/>
				<Footer/>
			</div>
		</>
	)
}
export default WrapperBlog