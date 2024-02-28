import { ArtListItem } from "./ArtListItem";

export const ArtList = ({artworks}) => {
  return (
    <section>
      <ul className="art-list">
        {artworks.map((artwork, index) => (
            <ArtListItem key={index} artwork={artwork}/>
        ))}
      </ul>
    </section>
  );
}