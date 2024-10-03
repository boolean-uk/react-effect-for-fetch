import React from 'react';

export default function PublicationHistoryList({ history }) {
    return (
        <ul>
            {history.map((item, id) => (
                <li key={id}>{item}</li>
            ))}
        </ul>
    );
}
