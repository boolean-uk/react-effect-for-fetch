import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"



function ArtsSection() {


  // title = string
  // artist_title = string
  // subject_titles = array 


  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          <ArtList />
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
