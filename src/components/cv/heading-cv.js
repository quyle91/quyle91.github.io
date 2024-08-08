import Fetching from "../templates/fetching";
const HeadingCv = ({dataSite}) => {
    const fullname = dataSite?.information?.fullname || '';
    const role = dataSite?.information?.role || '';

    return ( 
    <>
        <header id="heading-cv" className="w3-padding-large">
            <div className="">
                <h1 className="w3-xxxlarge">
                    <b>{fullname ? fullname : <Fetching />}</b>
                </h1>
                <h3>
                    <em>{role ? role : <Fetching />}</em>
                </h3>
                <hr/>
            </div>
        </header>
    </>
    )
}
export default HeadingCv