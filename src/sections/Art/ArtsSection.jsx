import React, { useState, useEffect } from 'react';

function ArtsSection(props) {
  const { artSection } = props;

  const [art, setArt] = useState([]);
  const [imageUrls, setImageUrls] = useState([
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000&t=st=1698949391~exp=1698949991~hmac=8bcba8d5c2ecd37cbefb22556f81a5e3aa95114b9b312f650b100c67d51b2546',
    'https://img.freepik.com/premium-photo/christmas-winter-landscape-with-snow-drifts-3d-illustration_710973-1169.jpg?w=1800',
  ]);
  const randomIndex = Math.floor(Math.random() * imageUrls.length);

  useEffect(() => {
    const getArt = () => {
      fetch('https://api.artic.edu/api/v1/artworks')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const filteredData = data.data.filter((art) => art.image_id);
          setArt(filteredData);
        })
        .catch((error) => {
          console.error('Error fetching art data:', error);
        });
    };

    getArt();
  }, []); 

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {Array.isArray(art) && art.length > 0 ? (
            art.map((artPiece) => {
              if (artPiece.subject_titles && artPiece.subject_titles.length > 0) {
                return (
                  <li key={artPiece.id}>
                    <div className="frame">
                      <img src={imageUrls[randomIndex]} alt="Random Image" />
                    </div>
                    <h3>{`Artist: ${artPiece.title}`}</h3>
                    <h4>Artistic Subjects</h4>
                    <ul>
                      {artPiece.subject_titles.map((subjectTitle, index) => (
                        <li key={index}>{subjectTitle}</li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return null;
            })
          ) : (
            <p>No art data available.</p>
          )}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;
