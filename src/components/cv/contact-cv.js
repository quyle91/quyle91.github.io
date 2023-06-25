const ContactCv = ({data}) => {
    return ( 
        <>
        <ul id="contact-cv" className="w3-ul" style={{width: "220px"}}>
            {
                (data)?
                data.map((item,key)=>(
                    <li key={key}>{item.text}</li>
                )):
                ""
            }
        </ul>  
        </>
    )
}
export default ContactCv