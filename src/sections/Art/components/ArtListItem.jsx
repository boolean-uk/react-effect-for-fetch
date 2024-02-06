import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({ title, artist, imageURL, publicationHistory }) {
    return (
      <>
        <li>
            <h3>{title}</h3>
            <p>{artist}</p>
            <img src={`https://boolean-api-server.fly.dev${imageURL}`}/>
            <PublicationHistoryList publicationHistory={publicationHistory}/>
        </li>
      </>
    );
  };
  
  export default ArtListItem;
  