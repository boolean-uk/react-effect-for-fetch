import { PublicationHistoryList } from "./PublicationHistoryList"

export function ArtListItem({ art, address }) {
    return (
        art.map((a, i) => {
            return (
                <li key={i}>
                    <div className="frame">
                        <img
                            src={address + a.imageURL}
                        />
                    </div>
                    <h3>{a.title}</h3>
                    <p>{a.artist}</p>
                    <h4>Publication History:</h4>
                    <PublicationHistoryList
                        a={a}
                    />
                </li>
            )
        })

    )
}