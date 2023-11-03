import ArtList from "./components/ArtList"

function ArtsSection({artArr}) {
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artArr={artArr}/>
      </div>
    </section>
  )
}

export default ArtsSection
