import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import {data_blog} from "../../data/datas"

const BlogItem = ({post,cat}) => {
    const [zthumbnail, setZThumbnail] = useState(null);
    const { t } = useTranslation();

    const limitText = (text, limit) =>{
        const strippedText = text.replace(/(<([^>]+)>)/gi, '');
        if (strippedText.length <= limit) {
            return strippedText;
        } else {
            return strippedText.substring(0, limit) + '...';
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let fetchUrl = data_blog.test_url + '/wp-json/wp/v2/media/';
                fetchUrl += post.featured_media;
                const response = await fetch(fetchUrl);

                if (response.ok) {
                    const jsonData = await response.json();
                    setZThumbnail(jsonData.media_details.sizes.thumbnail.source_url);
                    console.log('Fetched data from:', fetchUrl);
                } else {
                    console.error('Fetch không thành công:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Lỗi trong quá trình fetch:', error);
            }
        };

        fetchData();
    }, []);




    return (
        <>
        <div id={"post-"+post.id} className="item w3-col s6 web w3-container w3-margin-top">
            <div className="w3-row w3-card  w3-padding-16">
                <div className="w3-quarter">
                    <div className="w3-container w3-padding-small" >
                        {/*{
                            (typeof post.yoast_head_json.og_image !== 'undefined') ?
                                <img src={post.yoast_head_json.og_image[0].url} alt="z" className="w3-image" />
                            : ""
                        }*/}
                        {zthumbnail && (
                            <img src={zthumbnail} alt="Thumbnail" />
                        )}
                    	
                    </div>
                </div>
                <div className="w3-threequarter ">
                    <div className="w3-container w3-padding-small">
                    	<h4>{post.title.rendered}</h4>
                        <span className="w3-tag w3-small w3-white w3-border">
                            {
                                cat
                            }
                        </span>
                        <div>
                            <small>{limitText(post.excerpt.rendered, 80)}</small>
                        </div>
                        <Link className="link w3-button w3-border w3-small w3-margin-top" to={"/post/" + post.slug}>{t("Xem thêm")}</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default BlogItem