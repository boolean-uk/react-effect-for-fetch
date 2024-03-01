import { useEffect, useState } from "react";
import ArtList from "./components/ArtList"

function ArtsSection() {



  const [arts, setArts] = useState([]);



  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art")
    .then(response => response.json())
    .then(setArts)

  }, []);


  return (
    <ArtList arts={arts}/>
  )
}

export default ArtsSection
