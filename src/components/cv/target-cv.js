import * as React from 'react'
import Fetching from "../templates/fetching";
const TargetCv = ({dataSite}) => {   
    const muctieu = dataSite?.muctieu || [];      
    return ( 
        <>
        <div id="target-cv">
            <blockquote>
                {
                    muctieu?
                    muctieu.map((item,key)=>(
                        <React.Fragment key={key}>
                            {item.text}
                            <br/>
                        </React.Fragment>
                    ))
                    :<Fetching/>
                }
            </blockquote>
        </div>
        </>
    )
}
export default TargetCv