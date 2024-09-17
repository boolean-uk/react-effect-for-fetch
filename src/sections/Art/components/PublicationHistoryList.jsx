
import React from 'react'

function PublicationHistoryList({list}) {
  return (
      <>
      <h4>Publication History:</h4>
        <ul>
            {list.map((art, index) => (
            <li key={index}>{art}</li>
            ))}
        </ul>
      </>
  )
}

export default PublicationHistoryList