import React, { useEffect } from 'react'
import ArtListItem from './ArtListItem'
import { useState } from 'react'

function ArtList() {

const [artData, setArtData] = useState([])

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/art`) 
    .then((response) => response.json())
    .then((data) => setArtData(data))
  },  [])

  // useEffect(() => {

  //   console.log("UseEffect:", artData)
  // },  [artData])
    return (

    <ul className="art-list">
      {artData.map((item, i) => (
       <li key={i}> 
        <ArtListItem item={item}/>
       </li>
      ))}
  </ul>
  )
}

export default ArtList