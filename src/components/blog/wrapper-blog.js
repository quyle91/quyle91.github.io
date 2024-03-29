import Footer from "./footer"
import Heading from "./heading";
import ContentBlog from "./content-blog";


const WrapperBlog = () => {
	document.body.classList.remove(...document.body.classList)
	document.body.classList.add("blog")
	
	return (
		<>
			<div 
			id="wrapper-blog"
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
				<ContentBlog/>
				<Footer/>
			</div>
		</>
	)
}
export default WrapperBlog