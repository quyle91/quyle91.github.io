import { useTranslation } from "react-i18next"

const PostItem = ({post}) => {
    const { t } = useTranslation();
    const postHtml = () => ({ __html: post.content.rendered });

    document.title = post.title.rendered;
    const zblogtitle = document.querySelector('.zblogtitle');
    if (zblogtitle) {
        zblogtitle.innerHTML = post.title.rendered;
    }
    const zblogexcerpt = document.querySelector('.zblogexcerpt');
    if (zblogexcerpt) {
        zblogexcerpt.innerHTML = post.excerpt.rendered;
    }


    return (
        <>
        <div id={"post-"+post.id} className="w3-margin-top w3-col">
            <div className="w3-col">
                {
                    (typeof post.yoast_head_json.og_image !== 'undefined') ?
                        <img height="auto" src={post.yoast_head_json.og_image[0].url} alt="z" className="w3-image" />
                    : ""
                }
            </div>
            <div className="w3-col">
                <div dangerouslySetInnerHTML={postHtml()} />
                <div className="w3-padding-16">
                    <a target="_blank" rel="noreferrer" href={post.link} className="link">
                       {t("Xem bài viết gốc")}
                   </a>
                </div>
            </div>
        </div>
        </>
    )
}
export default PostItem