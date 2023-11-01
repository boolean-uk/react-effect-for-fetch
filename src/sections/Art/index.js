import { useEffect, useState } from "react"
import ArtList from './components/ArtList'

function ArtsSection() {
///Data for Art Section:
//place to put the data: 
  const [artList, setArt] = useState([
    { id: 1, title: 'Faust and Mephistopheles', artist_title: "Eugene Delacroix" , artwork_type_title: "Lithograph in black on ivory wove paper",
    department_title: "Dichotomoy of Good and Evil", date_display: "1828",
    credit_line: "John H. Wrenn Memorial Collection", subject_titles: ["Mephistopheles", "Folklore", "Demon"],
    image_id: "7255aaf1-4163-9aa4-d8dd-d5c753f3ea3a"},
  ])


///image url: 
  const [imgURL, setURL] = useState("")

//function for fetching data: 
  async function getArtData() {
  const response = await fetch("https://api.artic.edu/api/v1/artworks")
  console.log("getData is running for Art", response)
  const json = await response.json()
  setArt(json.data)
  setURL(json.config.iiif_url)
}

//useEffect to fetch data for Art:
  useEffect( () => {
    console.log("useEffect running for Art")
    //getData().then((json) => {setArt(json);});
    getArtData()
  }, [])

  console.log("current artList:",artList)

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artList={artList} imgURL={imgURL}/>
      </div>
    </section>
  )
}

export default ArtsSection