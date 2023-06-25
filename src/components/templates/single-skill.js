import * as React from 'react'

const SingleSkill = ({item}) => {
	return ( 
        <>
        	<div className="w3-margin-bottom single-skill">
                <h4>{item.name}</h4>
                <div className="w3-light-grey">
                    <div className=" w3-container w3-green" style={{width: item.percent+"%"}} >{item.percent}</div>
                </div>
                <div>
                    <p>
                        {
                            item.items?
                            item.items.map((item,key)=>(
                                <React.Fragment key={key}>
                                    <button className="w3-padding-small w3-small w3-button w3-border w3-round" style={{margin: "0 5px 5px 0px"}}>
                                        {item.text}
                                    </button>
                                </React.Fragment>
                            ))
                            :""
                        }
                    </p>
                </div>
            </div>
        </>
    )
}
export default SingleSkill