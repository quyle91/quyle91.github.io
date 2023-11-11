import Footer from "./footer"
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
				
				<div className="content w3-content">
					<header className="w3-container w3-content" style={{ padding: "32px 0" }} id="home">
						<div>
							<h1 className="zblogtitle strong"><b></b></h1>
							<p className="zblogexcerpt"></p>
						</div>
					</header>
				</div>
				<ContentPost/>
				<Footer/>
			</div>
		</>
	)
}
export default WrapperPost