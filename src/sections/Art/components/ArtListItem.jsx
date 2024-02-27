function ArtListItem({ artResData, URL }) {
  return (
    <>
      <div className="frame">
        <img src={URL + artResData.imageURL} alt={artResData.title}></img>
      </div>
      <h3>{artResData.title}</h3>
      <p>Artist: {artResData.artist}</p>
    </>
  );
}

export default ArtListItem;
