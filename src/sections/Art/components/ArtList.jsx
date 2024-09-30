import ArtListItem from "./ArtListItem";

export default function ArtList({ artList }) {
    return (
      <ul>
        {artList.map((artListItem, i) => (
          <ArtListItem artItem={artListItem} key={i} />
        ))}
      </ul>
    );
  }