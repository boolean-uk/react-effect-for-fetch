import { useEffect, useState } from "react"

function ArtsSection() {
  const [art, setArt] = useState([])

  useEffect(() => {
    // if (!art) return;
    // console.log("sending fetch request", art)
    fetch(`https://api.artic.edu/api/v1/artworks`)
      .then((res) => res.json())
      .then((data) => {
        setArt(data.data)
        // console.log("data art", data)
      })
  }, [])

  // console.log("art list", { art })
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {
            art.map((artWork, index) => (
              <li key={index}>
                <div className="frame">
                  {/* <img src={`https://api.artic.edu/api/v1/artworks/27992?fields=id,${artWork.title},${artWork.image_id}`} alt="dsfwf"/> */}

                  <img src={`https://www.artic.edu/iiif/2/${artWork.image_id}/full/840,/0/default.jpg`} alt="[image not available]" />
                </div>
                <h3>{artWork.title} </h3>
                {/* if it's empty, then say uinknown #extension */}
                <p>Artist: {artWork.artist_title}</p>
                <h4>Artistic Subjects:</h4>
                <ul>
                  {
                    // kinda working
                  art.map((subject, index)=>(
                    <li key={index}>
                    {subject.subject_titles[index]}
                    </li>)) 
                    }
                </ul>
              </li>

            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
