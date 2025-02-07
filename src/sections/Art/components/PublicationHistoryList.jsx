import React from 'react'

function PublicationHistoryList({historyList}) {
  return (
    <ul>
        {historyList.map((historyEntry, index)=> (
            <li key={index}>{historyEntry}</li>
        ))}
    </ul>
  )
}

export default PublicationHistoryList