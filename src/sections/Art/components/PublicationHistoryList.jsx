import "../../../App.css";

const PublicationHistoryList = ({publicationData}) => {
    return (
        <>
            <ul>
                <h4>Publication History:</h4>
                {publicationData.map((publication, index) => <li key={index}> {publication} </li>)}
            </ul>
        </>
    )
}

export default PublicationHistoryList
