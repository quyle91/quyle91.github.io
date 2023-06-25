import { Link } from "react-router-dom"

const NoPage = () => {
  document.body.classList.remove(...document.body.classList)
  document.body.classList.add("page-404")
  return (
    <>
    <div>
      <h1 className="w3-jumbo"><strong>404</strong></h1>
      <h2>Page Not Found</h2>
      <Link className="w3-button w3-green w3-padding-large" to="/">
        <i className="fa fa-home w3-margin-right"></i>
        Home
      </Link>
    </div>
    </>
    )
}

export default NoPage