import { Link } from "react-router-dom"

const Navicon = () => {
    const css = {
        width: "auto",
        right: 0
    }
    return (
        <Link 
        id="nav-icon"
        to="/"
        className="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black" 
        style={css}>
            <i className="fa fa-home"></i>
        </Link>
    )

}
export default Navicon