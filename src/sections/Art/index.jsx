import ArtList from "./components/ArtList"
import ArtListItem from "./components/ArtList"
import SubjectList from "./components/ArtList"

function ArtsSection() {
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList />
      </div>
    </section>
  )
}

export default ArtsSection
