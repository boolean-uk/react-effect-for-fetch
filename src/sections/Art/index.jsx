import { useEffect, useState } from "react";

function ArtsSection() {
  const [art, setArt] = useState([]);

  const fetchArt = () => {
    fetch("https://api.artic.edu/api/v1/artworks?fields=id,image_id,title,artist_title,subject_titles")
      .then((Response) => Response.json())
      .then((data) => setArt(data.data));
  };
  useEffect(fetchArt, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
      <ul className="art-list">
        {art.map(art => (
          <li key={art.id}>
            <div className="frame">
              <img
                src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
                alt={art.title}
              />
            </div>
            <h3>{art.title}</h3>
            <p>Artist: {art.artist_title}</p>
            <h4>Artistic Subjects: </h4>
            <ul>
              {art.subject_titles.map(subject =>(
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      </div>
    </section>
  )}

export default ArtsSection;
