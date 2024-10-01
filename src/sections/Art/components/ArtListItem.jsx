import PublicationHistoryList from "./PublicationHistoryList"



export default function ArtListItem({
    artListItem: {id, title, artist, imageURL, publicationHistory }
}) {
    return (
        <section>
            <h2>Arts Section</h2>
            <div className="scroll-container">
                <ul className="art-list">
                    <li>
                        <div className="frame">
                            <img
                                src={`https://boolean-uk-api-server.fly.dev/${imageURL}`}
                            />
                        </div>
                        <h3>{title}</h3>
                        <p>Artist: {artist}</p>
                        <h4>Publication History:</h4>
                        <PublicationHistoryList list={publicationHistory}/>
                    </li>
                </ul>
            </div>
        </section>
    );
};