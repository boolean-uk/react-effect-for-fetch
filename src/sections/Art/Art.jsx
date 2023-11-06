import { useState, useEffect } from 'react';

function ArtsSection() {
  const [artSection, setArtSection] = useState([]);
  const [imageUrls, setImageUrls] = useState([
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000&t=st=1698949391~exp=1698949991~hmac=8bcba8d5c2ecd37cbefb22556f81a5e3aa95114b9b312f650b100c67d51b2546',
    'https://img.freepik.com/premium-photo/christmas-winter-landscape-with-snow-drifts-3d-illustration_710973-1169.jpg?w=1800'
  ]);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    fetch('https://api.artic.edu/api/v1/artworks?limit=100')
      .then((response) => response.json())
      .then((data) => {
        setArtSection(data.data);
        console.log(data.data);
      });
  }, []);

  useEffect(() => {
    const index = Math.floor(Math.random() * imageUrls.length);
    setRandomIndex(index);
  }, [imageUrls]);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artSection.map((art) => {
            if (art.subject_titles && art.subject_titles.length > 0) {
              return (
                <li key={art.id}>
                  <div className="frame">
                    <img src={imageUrls[randomIndex]} alt="Random Image" />
                  </div>
                  <h3>{art.title}</h3>
                  <p>{`Artist: ${art.artist}`}</p>
                  <h4>Artistic Subjects</h4>
                  <ul>
                    {art.subject_titles.map((subjectTitle, index) => {
                      return (
                        <li key={index}>{subjectTitle}</li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;
