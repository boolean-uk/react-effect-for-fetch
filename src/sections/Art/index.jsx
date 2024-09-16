import { useState, props, useEffect } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [data, setData] = useState([]);

  // useEffect(()=> {
  //   console.log('USEEFFECT', data)
  // }, [data])

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/art')
    .then(res => res.json())
    .then(setData)
    // .then(res => {setData(res)})
    }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList data={data}/>
      </div>
    </section>
  )
}

export default ArtsSection
