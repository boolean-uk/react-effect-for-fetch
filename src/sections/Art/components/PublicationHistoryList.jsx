

function PublicationHistory({publicationHistory}) {

    return (
        <ul>
            {publicationHistory.map((pubHisItem, index) => (
                <li key={index}>{pubHisItem}</li>
            ))
            }
        </ul>
    )
}

export default PublicationHistory