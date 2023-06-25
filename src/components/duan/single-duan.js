import React from 'react';
const SingleDuan = ({post,congty}) => {
    // console.log(post)
    // console.log(congty);
    // console.log(post.congty)
    return (
        <>
        <div className="item col web w3-container w3-half w3-margin-top">
            <div className="w3-row w3-card  w3-padding-16">
                <div className="w3-quarter">
                    <div className="w3-container" >
                        {
                            (typeof post.yoast_head_json.og_image !== 'undefined') ?
                                <img src={post.yoast_head_json.og_image[0].url} alt="z" className="w3-image" />
                            :
                            (typeof post.yoast_head_json.twitter_image) ?
                                <img src={post.yoast_head_json.twitter_image} alt="z" className="w3-image" />
                            :
                            false
                        }
                    </div>
                </div>
                <div className="w3-threequarter ">
                    <div className="w3-container">
                        <h4>{post.title.rendered}</h4>
                        <a target="_blank" rel="noreferrer" href={post.acf.link} className="link">
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
                                                style={{ marginLeft: "10px" }}
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