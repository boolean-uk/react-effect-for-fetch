import { baseUrl } from "../../utils/misc";
import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({
  item: { imageURL, title, artist, publicationHistory },
}) {
  return (
    <li>
      <div className="frame">
        <img src={new URL(imageURL, baseUrl).href} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>Artist: {artist}</p>
      <PublicationHistoryList history={publicationHistory} />
    </li>
  );
}

export default ArtListItem;
