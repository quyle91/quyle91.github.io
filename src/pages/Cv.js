import { useState, useEffect } from "react"
import NavIcon from "../components/nav-icon"
import WrapperCv from "../components/cv/wrapper-cv"
import CvAuth from "../components/cv/cv-auth"

const Cv = () => {
    const [isAuthorized, setIsAuthorized] = useState(false)

    useEffect(() => {
        sessionStorage.removeItem("cv_authorized")
        localStorage.removeItem("cv_authorized")
    }, [])

    useEffect(() => {
        if (!isAuthorized) {
            document.body.classList.remove("cv")
        }
    }, [isAuthorized])

    if (!isAuthorized) {
        return <CvAuth onUnlock={() => setIsAuthorized(true)} />
    }

    return (
        <>
            <NavIcon />
            <WrapperCv />
        </>
    )
}

export default Cv