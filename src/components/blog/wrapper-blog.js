import { useEffect, useState } from "react"
import { fetchDataSite } from '../../data/datasite';
import Footer from "./footer"
import Heading from "./heading";
import ContentBlog from "./content-blog";


const WrapperBlog = () => {
	document.body.classList.remove(...document.body.classList)
	document.body.classList.add("blog")
	
	const [dataSite, setDataSite] = useState(null);
	useEffect(() => {
		const loadData = async () => {
			const data = await fetchDataSite();
			if (data) {
				setDataSite(data);
			}
		};
		loadData();
	}, []);

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
				<ContentBlog dataSite={dataSite} />
				<Footer/>
			</div>
		</>
	)
}
export default WrapperBlog