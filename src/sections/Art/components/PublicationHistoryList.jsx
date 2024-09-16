import React from 'react'

export default function PublicationHistoryList({list}) {
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
