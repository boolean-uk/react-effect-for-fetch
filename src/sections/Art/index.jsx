import React from "react"
import { useEffect, useState } from "react"
import ArtList from './components/ArtList.jsx'

function ArtsSection() {
const [data, setData] = useState([])

const artURL = "https://boolean-api-server.fly.dev/art"

useEffect(() => {
  fetch(artURL)
    .then((res) => res.json())
    .then((responseData) => {
      setData(responseData);
      console.log(responseData); // Log the updated state
    })
    .catch((error) => console.error("Error fetching data:", error));
}, []);


  return (
    <section>
      <h2>Arts Section</h2>
      <ArtList data={data}/>
    </section>
  )
}

export default ArtsSection
