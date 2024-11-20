import { useState, useEffect } from "react"
import PublicationHistory from "./components/PublicationHistoryList"

function ArtsSection() {
  const[content, setContent] = useState([])
  useEffect(() =>{
    fetch("https://boolean-api-server.fly.dev/art",{
      method: 'GET'
    })    
    .then(response => response.json())
    .then((data) =>(setContent(data)))
  }, [])
   
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          <PublicationHistory list={content}/>
        </ul>
      </div>
    </section>
  )
}
export default ArtsSection