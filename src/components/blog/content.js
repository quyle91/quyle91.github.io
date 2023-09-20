import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import {data_blog} from "../../data/datas"
import BlogItem from "../templates/blog-item"
import PostItem from "../templates/post-item"
import SingleLoading from '../duan/single-loading'
import { useParams } from 'react-router-dom';

const Content = ()=>{
	const { t } = useTranslation();
	const [loading, setLoading] = useState(true);
	const { postName } = useParams();

	// 1. Cho lần chạy đầu tiên.
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchDataFromJSON(30);
	}, []);

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




	// 2. Cho sự kiên button click
	const [fetchDataParam, setFetchDataParam] = useState('');

	// Khi biến fetchDataParam thay đổi, ta sẽ gọi hàm fetchDataFromJSON để tải dữ liệu
	useEffect(() => {
		if (fetchDataParam) {
		  	fetchDataFromJSON(fetchDataParam);
		  	setFetchDataParam('');
		}
	}, [fetchDataParam]);

	const handleButtonClick = (param) => {
		console.log('Button clicked with parameter:', param);
		setFetchDataParam(param);
	};

	

	return(
		<>
			<div className="w3-content content">
				<div className="posts col-container row-fix-margin">
					{
						loading ? (

							<SingleLoading />
							
						) : data.length > 1 ? (

							data.map((post, index) => (
								<BlogItem key={index} post={post} />
							))
							
						) : (

							data.map((post, index) => (
								<PostItem key={index} post={post} />
							))

						)
					}

						
				</div>
				<div className="more w3-center w3-margin-top">
					<a 
						target="_blank"
						rel="noreferrer"
						href={data_blog.url}
						className="w3-button w3-border">
						{t("Xem thêm")}
					</a>
				</div>
			</div>
		</>
	)
}
export default Content