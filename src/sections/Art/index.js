import { useEffect, useState } from "react";

function ArtsSection() {
  const [artData, setArtData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("https://api.artic.edu/api/v1/artworks");
    const json = await response.json();
    setArtData(json.data);
    console.log(json.data);
  }

  return (
    <section>
      <h2>Arts Section</h2>
      {artData.map((artwork) => (
        <div>
          <h4> Title : {artwork.title}</h4>
          <h4> Artist : {artwork.artist_title}</h4>
          <p>
            Subjects:
            {artwork.subject_titles.map((title) => (
              <p>{title}</p>
            ))}
          </p>
        </div>
      ))}
      <div className="scroll-container">{artData.map}</div>
    </section>
  );
}

export default ArtsSection;
