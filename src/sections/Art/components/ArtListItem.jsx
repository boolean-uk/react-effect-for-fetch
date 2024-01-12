import PublicationHistoryList from './PublicationHistoryList'

const ArtListItem = ({ artist, image_url, title, publicationHistory }) => {
  return (
    <div className="frame">
      <h1>Artist: {artist}</h1>
      <img src={image_url} alt="Artwork" />
      <h2>{title}</h2>
      <ul>
      <PublicationHistoryList publicationHistory={publicationHistory} />
      </ul>
    </div>
  );
};

export default ArtListItem;
