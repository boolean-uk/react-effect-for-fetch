import { useEffect, useState } from "react"

function ArtsSection() {
  const [art, setArt] = useState([])
  // const [data, setData] = useState(null);

  useEffect(() => {
    // if (!art) return;
    console.log("sending fetch request", art)
    fetch(`https://api.artic.edu/api/v1/artworks`)
      .then((res) => res.json())
      .then((data) => {
        setArt(data)
        console.log("data art", data)
      })
  }, [])

  // console.table({art})
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {
         art.map((artWork, index) => {
             <li key={index}>test</li> 
  
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
