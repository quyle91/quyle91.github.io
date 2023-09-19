import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import {data_blog} from "../../data/datas"
import BlogItem from "../templates/blog-item"

const Content = ()=>{
	const { t } = useTranslation();



	// 1. Cho lần chạy đầu tiên.
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchDataFromJSON(30); // lần load đầu tiên là 4
	}, []); // Mảng rỗng sẽ đảm bảo hàm useEffect chỉ được gọi một lần khi component được tải lần đầu

	const fetchDataFromJSON = async (param) => {
		console.log("Fetching data from json param:", param);
		try {
			const response = await fetch(data_blog.test_url+'/wp-json/wp/v2/posts?per_page='+param);
			const jsonData = await response.json();
			setData(jsonData);
			console.log("Fetched data from json:", jsonData);
		} catch (error) {
	  		console.log('Error fetching data:', error);
		}
	};
	// const handleButtonClick = (param) => {
	// 	console.log('Button clicked with parameter:', param);
	// };




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
			<div className="w3-content w3-padding-32 content">
				{/*<EffectDemo/>*/}
				{/*<hr/>*/}
				{/*<div className="filter">
					<button 
						onClick={() => handleButtonClick(4)} 
						className="w3-button w3-border w3-small mrr8">
							4 {t("bài viết")}
                    </button>
                    <button 
						onClick={() => handleButtonClick(6)} 
						className="w3-button w3-border w3-small mrr8">
							6 {t("bài viết")}
                    </button>
                    <button 
						onClick={() => handleButtonClick(8)} 
						className="w3-button w3-border w3-small mrr8">
							8 {t("bài viết")}
                    </button>
				</div>*/}
				<div className="posts col-container row-fix-margin">
					{data.map((post, index) => (
						<BlogItem key={index} post={post} />
			     	))}
						
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