import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"

function ArtsSection() {
  const[data, setData] = useState(null);
  //console.log(data);

  //API calling:
  const url = `https://boolean-api-server.fly.dev/art`
  useEffect(() => {
    
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data))
  }, [url]);

  return (
    <section>
      <h2>Arts Section</h2>
      {data && <ArtList data={data}/>}
    </section>
  )
}

export default ArtsSection























// useEffect(() => {
//   const fetchArts = async () => {
//     const response = await fetch("https://boolean-api-server.fly.dev/art");
//     const json = await response.json();
//     setArts(json);
//   };
//   fetchArts();
// }, []);