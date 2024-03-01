import React from 'react'

export default function PublicationHistoryList({publicationHistory}) {
  return (
    <ul>
      {publicationHistory.map((historyItem, index) => (
        <li key={index}>{historyItem}</li>
      ))}
  </ul>
  )
}

