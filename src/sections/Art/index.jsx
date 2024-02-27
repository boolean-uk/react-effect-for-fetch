import { useState } from "react"
import { useEffect } from "react"

const URL = "https://boolean-api-server.fly.dev"

function ArtsSection() {  
  const [data, setData] = useState([])

  useEffect(() => {console.log("Fetch art from...", `${URL}/art`)
    fetch(`${URL}/art`, {}).then(
      (response) => {
        return response.json();
      }).then((jsonData) =>{
        console.log(jsonData)
        setData(jsonData)
      })
      }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className = "art-list">
        {data.map((item, index) => {
          return (
            <li key = {index}>
            <div className="frame">
              <img src={`${URL}${item.imageURL}`}/>
            </div>
            <h3>{item.title}</h3>
            <p>Artist: {item.artist}</p>
            <h4>Publication History:</h4>
            <ul>
              {    
                item.publicationHistory.map((history, index) => {
                  return (
                    <li key = {index}>{history}</li>
                  )
                })              
              }
            </ul>
          </li>
          )

        })}
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
