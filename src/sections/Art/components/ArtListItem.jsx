import PublicationHistoryList from "./PublicationHistoryList"
import './Art.css'

function ArtListItem({ image, title, name, publications }) {

    return (
        <>
        <li className="art_item">
            <img 
                src={image}
                alt="Could not render image"
                className="art_image"
            />
            <h2 className="title">{title}</h2>
            <h4 className="artist">Artist: {name}</h4>
            <PublicationHistoryList history={publications}/>
        </li>
        </>
    )
}

export default ArtListItem
