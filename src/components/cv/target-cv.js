import * as React from 'react'
import Fetching from "../templates/fetching";
const TargetCv = ({data}) => {        
    return ( 
        <>
        <div id="target-cv">
            <blockquote>
                {
                    data?
                    data.map((item,key)=>(
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