import ArtList from "./components/ArtList"

/* eslint-disable react/jsx-key */
function ArtsSection(props) {

  const { artSection } = props

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          <ArtList artSection={artSection}/>
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
