export default function PublicationHistoryList(props) {
    const { publicationHistoryList } = props;
    return (
        <ul>
            {publicationHistoryList.map((ph) => <li>{ph}</li>)}
        </ul>
    )
}
