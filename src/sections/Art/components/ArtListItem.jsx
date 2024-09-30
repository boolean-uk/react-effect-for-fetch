import React from 'react'
import PublicationHistoryList from './PublicationHistoryList'

const ArtListItem = ({artData}) => {
  return (
    <li key={artData.id} style={{borderBottom: '5px solid lightgrey', marginBottom: '10px', marginTop: '10px'}}>
        <img style={{width: 550, height: 350}} src={`https://boolean-uk-api-server.fly.dev${artData.imageURL}`}/>
        <h3><b>{artData.title}</b></h3>
        <p>Artist: {artData.artist}</p>
        
        <h3><b>Artistic Subjects</b></h3>
        {artData.publicationHistory && <>
            <PublicationHistoryList data={artData.publicationHistory}/>
        </>}
    </li>
  )
}

export default ArtListItem
