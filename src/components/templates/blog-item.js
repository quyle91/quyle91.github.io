const BlogItem = ({post}) => {
    return (
        <>
        <div id={"post-"+post.id} className="item col web w3-container w3-half w3-margin-top">
            <div className="w3-row w3-card  w3-padding-16">
                <div className="w3-quarter">
                    <div className="w3-container" >
                        {
                            (typeof post.yoast_head_json.og_image !== 'undefined') ?
                                <img src={post.yoast_head_json.og_image[0].url} alt="z" className="w3-image" />
                            : ""
                        }
                    	
                    </div>
                </div>
                <div className="w3-threequarter ">
                    <div className="w3-container">
                        {/*<ProjectItemTitle item={prop.item} />*/}
                    	<h6>{post.title.rendered}</h6>
                        <a target="_blank" rel="noreferrer" href={post.link} className="link">
                        	{post.link}
                    	</a>
                        {/*<ProjectItemCompany item={prop.item} />*/}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default BlogItem