export default function PublicationHistoryListComponent(props) {
    const { history } = props

    return (
        <ul>
            {
                history.map((publication, index) => (
                    <li>
                        {publication}
                    </li>
                ))
            }
        </ul>
    )
}