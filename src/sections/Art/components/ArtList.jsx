import ArtListItem from "./ArtListItem";

function ArtList({art}) {
  return (
    <>
      <ul>
          {art.map((art) => {
              return <ArtListItem 
                title={art.title}
                artist={art.artist}
                imageURL={art.imageURL}
                publicationHistory={art.publicationHistory}
                id={art.id}
                key={art.id}
                />
          })};
      </ul>
    </>
  );
}
  
  export default ArtList;
  