import Footer from "./footer"
import Heading from "./heading";
import ContentPost from "./content-post";


const WrapperPost = () => {
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
				<ContentPost/>
				<Footer/>
			</div>
		</>
	)
}
export default WrapperPost