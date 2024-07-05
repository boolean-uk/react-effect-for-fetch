import PublicationHistoryList from './PublicationHistoryList'

export default function ArtListItem({ artwork }) {
    return (
        <li>
            <div className='frame'>
                <img
                    src={
                        'https://boolean-api-server.fly.dev' + artwork.imageURL
                    }
                />
            </div>
            <h3>{artwork.title}</h3>
            <p>{artwork.artist}</p>
            <h4>Publication History:</h4>
            <PublicationHistoryList
                publicationHistory={artwork.publicationHistory}
            />
        </li>
    )
}
