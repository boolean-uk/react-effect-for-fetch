function ArtListItem({ artPiece }) {
  return (
    <>
      <div className="frame">
        <img src={`https://boolean-api-server.fly.dev${artPiece.imageURL}`} />
      </div>
      <h3>{artPiece.title}</h3>
      <p>{"Artist: " + artPiece.artist}</p>
    </>
  );
}
export default ArtListItem;
