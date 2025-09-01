const PublicationHistoryList = ({ data }) => {

    return (
        <ul>
        {data.map((item, j) => (
            <li key={j}>{item}</li>
        ))}
        </ul>
    )
}
export default PublicationHistoryList;