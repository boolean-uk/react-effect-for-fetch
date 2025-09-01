
import './Art.css'

function PublicationHistoryList({ history }) {

    return (
        <>
        <h3>Publication History</h3>
        <ul className="history_list">
            {history.map((it, index) => (
                <li className="history_list_item" key={index}>♦ {it}</li>
            ))}
        </ul>
        </>
    )
}

export default PublicationHistoryList
