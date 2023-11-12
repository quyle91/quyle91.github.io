import { useEffect, useState, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { data_blog } from "../../data/datas"
import BlogItem from "./blog-item"
import SingleLoading from '../duan/single-loading'

const ContentAdminz = () => {
    const { t } = useTranslation();

    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [disableLoadMore, setDisableLoadMore] = useState(false);
    const [adminzCount, setAdminzCount] = useState('0');
    

    const fetchDataPosts = useCallback(async (param) => {
        try {
            let fetchUrl = data_blog.test_url + '/wp-json/wp/v2/posts?';
            fetchUrl += 'categories=' + data_blog.adminz_term_id +'&';
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

    useEffect(() => {
        fetchDataPosts({ "per_page": 12, "page": 1 });
    }, [fetchDataPosts]);


    const getAdminzCount = useCallback(async (param) => {
        try {
            let fetchUrl = data_blog.test_url + '/wp-json/wp/v2/categories/';
            fetchUrl += data_blog.adminz_term_id + '&';
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
            setAdminzCount(jsonData.count);
            console.log("Fetched data Cat from json:", fetchUrl, jsonData);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }, []);

    useEffect(() => {
        getAdminzCount({});
    }, [getAdminzCount]);


    const loadMore = (e) => {        
        setLoaded(false);
        setCurrentPage(currentPage + 1);
        fetchDataPosts({ "per_page": 12, "page": currentPage + 1 });
    };

    return(
        <>
            <div className="w3-content content">
                <div className="wp-padding-16">
                    Có tất cả {adminzCount} bài
                </div>
                <div className="posts col-container row-fix-margin w3-padding-16">
                    {
                        data.map((filteredPost, index) => {
                            return (
                                <BlogItem key={index} post={filteredPost} cat={'Document'} />
                            );
                        })
                    }
                </div>
                <div className="w3-col w3-padding-16">
                    {
                        !loaded ? (
                            <SingleLoading />
                        ) : ""
                    }
                </div>
                <div className="more w3-center w3-margin-top w3-padding-32">
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
export default ContentAdminz