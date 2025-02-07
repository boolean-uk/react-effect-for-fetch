import React from "react";

function PublicationHistoryList({publicationHistory}) {
    return (
        <ul>
            {publicationHistory.map((publication, index) => (
                <li key={publication + index}>
                    {publication}
                </li>
            ))}
        </ul>
    );
}

export default PublicationHistoryList;