import ArtListItem from "./ArtListItem";

function ArtList({ useState, useEffect }) {
  const [art, setArt] = useState([]);

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

  return <ArtListItem art={art} />;
}
export default ArtList;
