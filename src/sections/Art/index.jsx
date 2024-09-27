import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [art, setArt] = useState([
    {
      id: null,
      title: "",
      artist: "",
      imageURL: "",
      publicationHistory: ["", "", ""],
    },
  ]);
  useEffect(() => {
    console.log("useEffect of art section");
    fetch(`https://boolean-api-server.fly.dev/art`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setArt(jsonData);
        console.log(jsonData);
      });
  }, []);
  return (
    <section>
      <ArtList artList={art} />
    </section>
  );
}

export default ArtsSection;
