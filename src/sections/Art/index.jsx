import { useState, useEffect } from "react";
import ArtList from "./components/ArtList";

function App() {
  const root = 'https://api.artic.edu/api/v1/artworks';
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch(root)
      .then(res => res.json())
      .then(data => {
        if (data && data.data && data.data.length > 0) {
          setArtworks(data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  return (
    <div className="app">
      <ArtList artworks={artworks} />
    </div>
  );
}

export default App;
