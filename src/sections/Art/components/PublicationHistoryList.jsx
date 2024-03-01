
import React from 'react'

function PublicationHistoryList({pub}) {
  return (<>
    <h4>Publication History:</h4>
    <ul>
    {pub.map((item, i) => (
       <li key={i}> 
        {item}
       </li>
      ))}
    </ul>
    </>
  )
}

export default PublicationHistoryList