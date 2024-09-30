import React from 'react'
import ArtListItem from './ArtListItem'

const ArtList = ({ data }) => {
  return (
    <div>
        <ul>
            {data.map((art) => (
                <>
                    <ArtListItem artData={art}/>
                </>
            ))}
        </ul>
    </div>
  )
}

export default ArtList
