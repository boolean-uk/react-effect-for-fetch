import ArtListItem from './ArtListItem';

function ArtList({ artworks }) {
  return (
    <ul className="art-list">
      {artworks.length > 0 ? (
        artworks.map(art => <ArtListItem key={art.id} art={art} />)
      ) : (
        <p>No artworks available</p>
      )}
    </ul>
  );
}

export default ArtList;

