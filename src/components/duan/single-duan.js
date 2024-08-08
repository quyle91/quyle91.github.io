import React from 'react';
// import { useState, useEffect } from 'react';
// import {dataSite} from "../../data/datas"
const SingleDuan = ({post,congty}) => {
    // const [zthumbnail, setZThumbnail] = useState(null);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             let fetchUrl = dataSite.source + '/wp-json/wp/v2/media/';
    //             fetchUrl += post.featured_media;
    //             const response = await fetch(fetchUrl);

    //             if (response.ok) {
    //                 const jsonData = await response.json();
    //                 setZThumbnail(jsonData.media_details.sizes.thumbnail.source_url);
    //                 console.log('Fetched data from:', fetchUrl);
    //             } else {
    //                 console.error('Fetch không thành công:', response.status, response.statusText);
    //             }
    //         } catch (error) {
    //             console.error('Lỗi trong quá trình fetch:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    
    return (
        <>
        <div className="item w3-col s6 web w3-container w3-margin-top">
            <div className="w3-row w3-card  w3-padding-16">
                <div className="w3-quarter">
                    <div className="w3-container w3-padding-small">
                        {
                            (typeof post.custom.thumbnail_url !== 'undefined') ?
                                <img src={post.custom.thumbnail_url} alt="z" className="w3-image zthumbnail" />
                            :
                            (typeof post.yoast_head_json.og_image !== 'undefined') ?
                                <img src={post.yoast_head_json.og_image[0].url} alt="z" className="w3-image zthumbnail" />
                            :
                            (typeof post.yoast_head_json.twitter_image) ?
                                <img src={post.yoast_head_json.twitter_image} alt="z" className="w3-image zthumbnail" />
                            :
                            false
                        }
                        {/*{zthumbnail && (
                            <img src={zthumbnail} alt="Thumbnail" />
                        )}*/}
                    </div>
                </div>
                <div className="w3-threequarter">
                    <div className="w3-container w3-padding-small">
                        <h4 className="project-title">{post.title.rendered}</h4>
                        <a target="_blank" rel="noreferrer" href={post.acf.link} className="project-link link">
                            {post.acf.link}
                        </a>
                        <div className="project-company htecom w3-margin-top">
                            
                            {
                                post.congty.map((idcongty,key)=>(
                                    congty.map((congty_item, congty_key) => (
                                    (congty_item.id === idcongty && congty_item.acf.thumbnail) ? (
                                        <React.Fragment key={congty_key}>
                                            <small>Working on</small>
                                            <img
                                                className={congty_item.slug}
                                                alt="z"
                                                style={{}}
                                                height="15px"
                                                src={congty_item.acf.thumbnail}
                                            />
                                        </React.Fragment>
                                        ) : null
                                    ))
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default SingleDuan