import React from 'react'
import ArtListItem from './ArtListItem.jsx'
export default function ArtList(props) {
    const {data} = props

    return(
        <>
        <div className="scroll-container">
            <ul className="art-list">
                {data.map((item, index) => (
                    <ArtListItem key={index} item={item} />
                ))}
            </ul>
        </div>
        </>
    )    
    

}

