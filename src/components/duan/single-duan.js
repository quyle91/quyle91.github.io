import React from 'react';
const SingleDuan = ({post,congty}) => {
    return (
        <>
        <div className="item w3-col s6 web w3-container w3-margin-top">
            <div className="w3-row w3-card  w3-padding-16">
                <div className="w3-quarter">
                    <div className="w3-container w3-padding-small">
                        {
                            (typeof post.custom.thumbnail_url !== 'undefined') ?
                                <img src={post.custom.thumbnail_url || ""} alt="z" className="w3-image zthumbnail" />
                            :
                            null
                        }
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
                                                src={congty_item.acf.thumbnail || ""}
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