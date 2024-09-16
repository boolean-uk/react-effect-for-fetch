import React from 'react'
import PropTypes from 'prop-types'


function ArtListItem({data}) {
    const imageURL = "https://boolean-api-server.fly.dev" + data.imageURL
  return (
            <li>
                <div className="frame">
                    <img
                        src={imageURL}
                    />
                </div>
                <h3>{data.title}</h3>
                <p>Artist: {data.artist}</p>
                <h4>Publication History:</h4>
                <ul>
                    {data.publicationHistory.map((p,i) =>( 
                        <li key = {i}>{p}</li>
                    ))}
                </ul>
            </li>
            
  )
}

export default ArtListItem

ArtListItem.propTypes = {
    data: PropTypes.object
  }