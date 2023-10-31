import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import {data_blog} from "../../data/datas"
// import BlogItem from "../templates/blog-item"
import PostItem from "../templates/post-item"
import SingleLoading from '../duan/single-loading'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom"

const ContentPost = ()=>{
	const { t } = useTranslation();
	const [loading, setLoading] = useState(true);
	const { postName } = useParams();

	// 1. Cho lần chạy đầu tiên.
	const [data, setData] = useState([]);

	const fetchDataFromJSON = async (param) => {
		try {
			let fetchUrl = data_blog.test_url+'/wp-json/wp/v2/posts?per_page='+param;
			if(postName){
				fetchUrl += "&slug="+postName;
			}
			const response = await fetch(fetchUrl);
			const jsonData = await response.json();
			setData(jsonData);
			setLoading(false);
			console.log("Fetched data from json:", fetchUrl, jsonData);
		} catch (error) {
	  		console.log('Error fetching data:', error);
		}
	};
	
	useEffect(() => {
		fetchDataFromJSON(1);
	}, []);
	

	return(
		<>
			<div className="w3-content content">
				<div className="posts col-container">
					{
						loading ? (

							<SingleLoading />
							
						) : (
							data.map((post, index) => (
								<PostItem key={index} post={post} />
							))
						)
					}

						
				</div>
				<div className="more w3-center w3-margin-top">
					<Link className="w3-button w3-border" to="/blog">
						{t("Quay lại Blog")}
					</Link>
				</div>
			</div>
		</>
	)
}
export default ContentPost