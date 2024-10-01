import { ArtListItem } from "./ArtListItem";

export function ArtList (props){

  const { artList } = props;

  return (
    <ul className="art-list">
      {artList.map((art, index) => (
            <ArtListItem
              key={index}
              artListItem={art}
            />
          ))}
    </ul>
  );
}