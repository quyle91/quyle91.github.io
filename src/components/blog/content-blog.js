import { useEffect, useState, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import BlogItem from "./blog-item";
import SingleLoading from '../duan/single-loading';
import NoData from '../templates/nodata';
import { useParams } from 'react-router-dom';

const ContentBlog = ({ dataSite }) => {
	const { t } = useTranslation();
	const { categoryParam } = useParams();
	const [loaded, setLoaded] = useState(false);
	const [disableLoadMore, setDisableLoadMore] = useState(false);
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [categories, setCategories] = useState([]);
	const [filterCat, setFilterCat] = useState("");

	const fetchData = useCallback(async (url, setter) => {
		if (!dataSite?.json_url) {
			console.log('No JSON URL provided.');
			return;
		}
		try {
			const response = await fetch(`${dataSite.json_url}${url}`);
			const jsonData = await response.json();
			setter(jsonData);
		} catch (error) {
			console.log('Error fetching data:', error);
		} finally {
			setLoaded(true);
		}
	}, [dataSite?.json_url]);

	const fetchDataPosts = useCallback(async (params) => {
		const queryParams = new URLSearchParams(params).toString();
		const url = `/wp-json/wp/v2/posts?${queryParams}`;
		setLoaded(false);
		try {
			const response = await fetch(`${dataSite.json_url}${url}`);
			const jsonData = await response.json();
			if (Array.isArray(jsonData)) {
				setData(prevData => [...prevData, ...jsonData]);
			} else {
				setDisableLoadMore(true);
				console.log(jsonData.message);
			}
		} catch (error) {
			console.log('Error fetching data:', error);
		} finally {
            setLoaded(true);  // Đặt loaded là true sau khi dữ liệu đã được tải
        }
	}, [dataSite?.json_url]);

	useEffect(() => {
		fetchData('/wp-json/wp/v2/categories', setCategories);
	}, [fetchData]);

	useEffect(() => {
		fetchDataPosts({ "per_page": 4, "page": 1 });
	}, [fetchDataPosts]);

	useEffect(() => {
		if (categoryParam) {
			setFilterCat(parseInt(categoryParam) || "");
		}
	}, [categoryParam]);

	const loadMore = () => {
		setCurrentPage(prevPage => {
			const nextPage = prevPage + 1;
			fetchDataPosts({ "per_page": 4, "page": nextPage });
			return nextPage;
		});
	};

	const handleChangeCat = (e) => {
		setFilterCat(parseInt(e.target.value) || "");
	};

	const filteredData = useMemo(() => {
		return data.filter(post =>
			post.categories.includes(filterCat) || !filterCat
		);
	}, [data, filterCat]);

	const getCatText = (post) => {
		const postCategories = post.categories.map(categoryId => {
			const category = categories.find(cat => cat.id === categoryId);
			return category ? category.name : '';
		});
		return postCategories.join(', ');
	};

	return (
		<>
			<div className="w3-content content">
				<div className="filters">
					<div className="col-container row-fix-margin">
						<div className="w3-col l3 s6 w3-padding setLoaiduan">
							<select className="w3-select w3-white w3-border" onChange={handleChangeCat}>
								<option value="">- {t("Tất cả")}</option>
								{categories.map(item => (
									<option
										data-slug={item.slug}
										value={item.id}
										key={item.id}
									>
										{item.name}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<div className="posts col-container row-fix-margin">
					{filteredData.length === 0 ? <NoData /> :
						filteredData.map(post => (
							<BlogItem key={post.id} post={post} cat={getCatText(post)} />
						))
					}
				</div>
				{!loaded && <SingleLoading />}
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
	);
};

export default ContentBlog;
