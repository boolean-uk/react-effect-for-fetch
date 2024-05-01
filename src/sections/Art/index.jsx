import ArtListItem from "./components/ArtListItem"

export default function ArtsSection() {
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          <ArtListItem />
        </ul>
      </div>
    </section>
  )
}


