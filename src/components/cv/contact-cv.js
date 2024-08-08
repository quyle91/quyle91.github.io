import Fetching from "../templates/fetching";
const ContactCv = ({dataSite}) => {
    const {
        fullname = '',
        birth = '',
        country = '',
        mail = '',
        phone = ''
    } = dataSite?.information || {};

    return ( 
        <>
        <ul id="contact-cv" className="w3-ul" style={{width: "220px"}}>
            {fullname ? <li key={fullname}>{fullname}</li> : <Fetching />}
            {birth ? <li key={birth}>{birth}</li> : <Fetching />}
            {country ? <li key={country}>{country}</li> : <Fetching />}
            {mail ? <li key={mail}>{mail}</li> : <Fetching />}
            {phone ? <li key={phone}>{phone}</li> : <Fetching />}
        </ul>  
        </>
    )
}
export default ContactCv