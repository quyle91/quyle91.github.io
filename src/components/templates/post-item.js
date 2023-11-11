import { useTranslation } from "react-i18next"

const PostItem = ({post}) => {
    const { t } = useTranslation();

    // khai báo function lấy post html
    const postHtml = () => ({ __html: post.content.rendered });

    document.title = post.title.rendered;

    // title
    const zblogtitle = document.querySelector('.zblogtitle').querySelector('b');
    if (zblogtitle) {
        zblogtitle.innerHTML = post.title.rendered;
    }

    // excerpt
    const zblogexcerpt = document.querySelector('.zblogexcerpt');
    zblogexcerpt.innerHTML = "";
    // if (zblogexcerpt) {
    //     zblogexcerpt.innerHTML = post.excerpt.rendered;
    // }

    // Cách khai báo biến với hàm ko tên
    const zdate = (() => {

        var date = new Date(post.date);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var formattedDate = day + '/' + month + '/' + year;
        return formattedDate;
    })();


    return (
        <>
        <div id={"post-"+post.id} className="post-content w3-margin-top w3-col">
            <div className="w3-col">
                <div dangerouslySetInnerHTML={postHtml()} />
                <div className="w3-padding-16 w3-right-left">
                    <span>
                        {t("Ngày đăng: ")}
                         {zdate}
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}
export default PostItem