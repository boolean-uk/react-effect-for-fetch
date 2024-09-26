import React from 'react'

function PublicationHistoryList({artItem}) {
  return (
    <>
        <ul>
            {artItem.publicationHistory.map((text, index) => {
            return <li key={index}>{text}</li>
            })}
        </ul>
    </>
  )
}

export default PublicationHistoryList
