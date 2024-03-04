import ArtListItem from "./ArtListItem";
import PublicationHistoryList from "./PublicationHistoryList";

export default function ArtList({ artworks }) {
  return (
    <ul className="art-list">
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <ArtListItem artwork={artwork} />

          <h4>Publication History:</h4>
          <ul>
            {artwork.publicationHistory.map((History, index) => (
              <PublicationHistoryList
                key={index}
                index={index}
                History={History}
              />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
