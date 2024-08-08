import { useEffect, useState, useCallback } from "react"
import { useTranslation } from "react-i18next"
import {dataSite} from "../../data/datasite"
import BlogItem from "./blog-item"
import SingleLoading from '../duan/single-loading'
import { useParams } from 'react-router-dom';

const ContentBlog = ()=>{
	const { t } = useTranslation();
	const { categoryParam } = useParams();
	const [loaded, setLoaded] = useState(false);
	const [disableLoadMore, setDisableLoadMore] = useState(false);
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [categories, setCategories] = useState([]);
  	const [categoriesLoaded, setCategoriesLoaded] = useState(false);

	const fetchDataPosts = useCallback(async (param) => {
		try {
			let fetchUrl = dataSite.source+'/wp-json/wp/v2/posts?';
			for (const key in param) {
			  if (param.hasOwnProperty(key)) {
			    fetchUrl += key + '=' + param[key] + '&';
			  }
			}

			if (fetchUrl.endsWith('&')) {
			  fetchUrl = fetchUrl.slice(0, -1);
			}

			
			const response = await fetch(fetchUrl);
			const jsonData = await response.json();

			if (Array.isArray(jsonData)) {
		      	setData((prevData) => [...prevData, ...jsonData]);
		    } else {
				setDisableLoadMore(true);            
		      	console.log(jsonData.message);
		    }
		    setLoaded(true);
			console.log("Fetched data from json:", fetchUrl, jsonData);
		} catch (error) {
			console.log('Error fetching data:', error);
		}
	}, []);

	const fetchDataCategories = useCallback(async (param) => {
		try {
			let fetchUrl = dataSite.source+'/wp-json/wp/v2/categories?';
			for (const key in param) {
			  if (param.hasOwnProperty(key)) {
			    fetchUrl += key + '=' + param[key] + '&';
			  }
			}

			if (fetchUrl.endsWith('&')) {
			  fetchUrl = fetchUrl.slice(0, -1);
			}

			const response = await fetch(fetchUrl);
			const jsonData = await response.json();
			setCategories(jsonData);
		    setLoaded(true);
		    setCategoriesLoaded(true); // Categories are loaded
			console.log("Fetched data Cat from json:", fetchUrl, jsonData);
		} catch (error) {
			console.log('Error fetching data:', error);
		}
	}, []);


	
	useEffect(() => {
		fetchDataPosts({"per_page": 6, "page": 1});
	}, [fetchDataPosts]);

	useEffect(() => {
		fetchDataCategories({});
	}, [fetchDataCategories]);

	useEffect(() => {
		if (categoriesLoaded) {
			if (categoryParam) {
			setFilterCat(parseInt(categoryParam));
		}
		}
	}, [categoryParam, categoriesLoaded]);


	const loadMore = () => {
		setLoaded(false);
		setCurrentPage(currentPage + 1);
		fetchDataPosts({ "per_page": 6, "page": currentPage + 1 });
	};


	/*CAT*/
	

	const [filterCat, setFilterCat] = useState("");
	const handleChangeCat = (e)=>{
        setFilterCat( parseInt(e.target.value));
    }

    
	
	const get_cat_text = (post, categories) => {
		const postCategories = post.categories.map((categoryId) => {
		const category = categories.find((cat) => cat.id === categoryId);
		return category ? category.name : '';
		});
		const catText = postCategories.join(', ');

		return catText;
	};


	return(
		<>
			<div className="w3-content content">
				<div className="filters">
					<div className="col-container row-fix-margin">
						<div className="w3-col l3 s6 w3-padding setLoaiduan">
							<select className="w3-select w3-white w3-border" onChange={handleChangeCat}>
		                        <option value="">- {t("Tất cả")}</option>
		                        {
                                    categories.map((item,key)=>(
                                        <option 
                                        	data-slug={item.slug}
                                        	value={item.id} 
                                        	key={key}>
                                    		{item.name}
                                		</option>
                                    ))
                                }
		                    </select>
	                    </div>
                    </div> 
				</div> 
				<div className="posts col-container row-fix-margin">
					{
					    data.filter((post) => {
				        	return post.categories.includes(filterCat) || !filterCat;
				      	}).map((filteredPost, index) => {
				      		let _cat = get_cat_text(filteredPost, categories);
				      		return (
				        		<BlogItem key={index} post={filteredPost} cat={_cat} />
			        		);
				      	})
				  	}
						
				</div>
				<div className="w3-col">
				{
					!loaded? (
						<SingleLoading />
					): ""
				}
				</div>
				<div className="more w3-center w3-margin-top">
					<button
			            className="w3-button w3-border"
			            onClick={loadMore}
						disabled={disableLoadMore}
			          >
			            {t("Xem thêm")}
			          </button>
				</div>
			</div>
		</>
	)
}
export default ContentBlog