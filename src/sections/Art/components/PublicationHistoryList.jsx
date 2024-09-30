
import React from 'react'

const PublicationHistoryList = ({data}) => {
  return (
    <ul>
        {data.map((data, index) => (
            <li key={index}>
                <p>{data}</p>
            </li>
        ))}
    </ul>
  )
}

export default PublicationHistoryList
