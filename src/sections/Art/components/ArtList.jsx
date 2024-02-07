import ArtListItem from "./ArtListItem";

function ArtList({art}) {
  return (
    <>
    <div className="scroll-container">
      <ul className="art-list">
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
    </div>
    </>
  );
}
  
  export default ArtList;
  