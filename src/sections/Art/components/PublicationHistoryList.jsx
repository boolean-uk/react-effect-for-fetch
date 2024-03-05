export default function PublicationHistoryList(props) {
    const { pubList } = props

    return (       
        <ul>
            {pubList.map((pub, index) => (
                <li key={index}>{pub}</li>
            ))}
        </ul>
    )
}
