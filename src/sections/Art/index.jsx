function ArtsSection({ artData }) {
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artData && artData.length > 0 ? (
            artData.map((artPiece) => (
              <li key={artPiece.id}>
                <div className="frame">
                  <img
                    src={`https://boolean-api-server.fly.dev${artPiece.imageURL}`}
                  />
                </div>
                <h3>{artPiece.title}</h3>
                <p>{"Artist: " + artPiece.artist}</p>
                <h4>Publication History:</h4>
                <ul>
                  {artPiece.publicationHistory.map((publication, index) => (
                    <li key={index}>{publication}</li>
                  ))}
                </ul>
              </li>
            ))
          ) : (
            <li>No art data available</li>
          )}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;
