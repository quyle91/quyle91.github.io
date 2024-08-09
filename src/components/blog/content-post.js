import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import PostItem from "../templates/post-item";
import SingleLoading from '../duan/single-loading';
import { useParams, Link } from 'react-router-dom';

const ContentPost = ({ dataSite }) => {
	const { t } = useTranslation();
	const { postName } = useParams();
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	const fetchDataFromJSON = useCallback(async (param) => {
		if (!dataSite?.json_url) {
			console.log('No JSON URL provided.');
			return;
		}

		try {
			let fetchUrl = `${dataSite.json_url}/wp-json/wp/v2/posts?per_page=${param}`;
			if (postName) {
				fetchUrl += `&slug=${postName}`;
			}
			const response = await fetch(fetchUrl);
			const jsonData = await response.json();
			setData(jsonData);
		} catch (error) {
			console.log('Error fetching data:', error);
		} finally {
			setLoading(false);
		}
	}, [dataSite?.json_url, postName]);

	useEffect(() => {
		fetchDataFromJSON(1);
	}, [fetchDataFromJSON]);

	return (
		<div className="w3-content content">
			<div className="posts col-container">
				{loading ? (
					<SingleLoading />
				) : (
					data.length > 0 ? (
						data.map(post => (
							<PostItem key={post.id} post={post} />
						))
					) : (
						<p>{t("No posts available.")}</p>
					)
				)}
			</div>
			<div className="more w3-center w3-margin-top">
				<Link className="w3-button w3-border" to="/blog">
					{t("Quay lại Blog")}
				</Link>
			</div>
		</div>
	);
};

export default ContentPost;
