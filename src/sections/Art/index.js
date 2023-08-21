import { useEffect, useState } from "react"

function ArtsSection() {
  
  // const [artList, setartList] = useState("");
  const [data, setData] = useState('');


  // Write code here.
    async function getData() {
        const response = await fetch("https://api.artic.edu/api/v1/artworks?fields=image_id,title,id,artist_title,subject_titles")
        const json = await response.json()
        setData(json)
    }

    useEffect(() => {
          getData()
    }, [data])

  return (
     
    <section>
      <div className="scroll-container">
      
      <ul className="art-list">
        <li>
          <div className="frame">
            {/* <img
              src="https://www.artic.edu/iiif/2/4e074d70-4424-331b-ec89-0776a45d6825/full/843,/0/default.jpg"
            /> */}
          </div>
          <h3>{data.title[0]}Beggar with Oysters (Philosopher)</h3>
           {/* couldn't pass data from the api  */}
          <p >{data.artist_title}Artist: Édouard Manet</p>
          <h4>Artistic Subjects:</h4>
          <ul>
            <li >Century of Progress</li>
            <li >waga</li>
            <li >something</li>
           <li>world's fairs</li>
            <li>Chicago World's Fairs</li>
         </ul>
       </li>
      </ul>
      
      </div>
      
    </section>
  )
}

export default ArtsSection
