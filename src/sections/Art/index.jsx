import ArtList from "./components/ArtList"

function ArtsSection(props) {
const art = props.art

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList art={art}/>
      </div>
    </section>
  )
}

export default ArtsSection
