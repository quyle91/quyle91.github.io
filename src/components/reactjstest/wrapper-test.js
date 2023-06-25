import Blog from "./blog"
import Gmap from "./gmap"
import LanguagesSwitcher from "../languages-switcher"

const WrapperjsTest = () => {
	document.body.classList.remove(...document.body.classList)
	document.body.classList.add("reactjs-test")
	
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
				<Blog/>
				<Gmap/>
				<footer id="footer" className="w3-xlarge">
            		<div className="w3-content">
						<LanguagesSwitcher/>
					</div>
				</footer>
			</div>
		</>
	)
}
export default WrapperjsTest