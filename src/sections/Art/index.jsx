import ArtList from "./components/ArtList"
import { useState,useEffect } from "react";

const URL = "https://boolean-api-server.fly.dev/art"

function ArtsSection() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(setData)
      .then(console.log(data))
  }, [])
  return (
    <section>
      <h2>Arts Section</h2>
      <ArtList data={data} />
    </section>
  )
}

export default ArtsSection
