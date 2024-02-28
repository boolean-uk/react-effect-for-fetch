import PublicationHistory from "./PublicationHistoryList";
import ArtListItem from "./ArtListItem";

function ArtList({ artData, URL }) {
  console.log("Inside ArtList: ", artData);
  return (
    <ul className="art-list">
      {artData.map((artResData) => (
        <li key={artResData.id}>
          <ArtListItem artResData={artResData} URL={URL} />

          <h4>Publication History:</h4>
          <ul>
            {artResData.publicationHistory.map((publication, index) => (
              <PublicationHistory
                key={index}
                index={index}
                publication={publication}
              />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default ArtList;