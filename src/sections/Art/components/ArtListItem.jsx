function ArtListItem({ artwork }) {
  return (
    <li>
      <div className="frame">
        <img src={artwork.imageUrl} alt={artwork.title} />
      </div>
      <h3>{artwork.title}</h3>
      <p>Artist: {artwork.artist}</p>
      <h4>Publication History:</h4>
      <ul>
        {artwork.publicationHistoryList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </li>
  );
}

export default ArtListItem;
