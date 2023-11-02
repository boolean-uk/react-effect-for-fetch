import { useState, useEffect } from "react";

function ArtsSection() {
  const [art, setArt] = useState([]);

  // const root = 'https://api.artic.edu/docs/v1/artworks'
  const fetchArts = () => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((response) => response.json())
      .then((data) => {
        const artData = data.data.filter((newdata) => newdata.image_id);
        setArt(artData);
        console.log(artData);
      });
  };
  useEffect(fetchArts, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {art.map((artData, index) => {
            return (
              <li key={index}>
                <div className="frame">
                  <img
                    src={`https://www.artic.edu/iiif/2/${artData.image_id}/full/843,/0/default.jpg`}
                  />
                </div>
                <h3>{`${artData.title}`}</h3>
                <p>{`Artist : ${artData.artist_display}`}</p>
                <h4>Artistic Subjects:</h4>
                <ul>
                  {artData.term_titles.map((term, index) => {
                    return <li key={index}>{term}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;
