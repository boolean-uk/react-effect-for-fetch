const ArtsList = ({ artList }) => {



    return (
        <section>
        <h2>Arts Section</h2>
        <div className="scroll-container">
            <ul className="art-list">
                { artList.map((item) => (
                    <li key={item.id}>
                        <div className="frame">
                        <img
                            src={`https://boolean-uk-api-server.fly.dev${item.imageURL}`}
                        />
                        </div>
                        <h3>{item.title}</h3>
                        <p>Artist: {item.artist}</p>
                        <h4>Publication History:</h4>
                        <ul>
                            {item.publicationHistory.map((history) => (
                                <li key={history}>
                                    {history}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            
            </ul>
        </div>
        </section>
    )
}

export default ArtsList