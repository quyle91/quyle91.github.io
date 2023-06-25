import { data_me } from '../../data/datas'


const ContactCv = () => {
    return ( 
        <>
        <ul id="contact-cv" className="w3-ul" style={{width: "220px"}}>
            <li>{data_me.phone}</li>
            <li>{data_me.birth}</li>
            <li>{data_me.mail}</li>
            <li>{data_me.country}</li>
            <li>{data_me.website}</li>
        </ul>  
        </>
    )
}
export default ContactCv