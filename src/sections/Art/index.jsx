
import ArtListItem from "./components/ArtListItem"
//import ArtListItem from "./components/ArtListItem"

function ArtsSection() {
  return (
    <section>
     <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          <ArtListItem/>
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
