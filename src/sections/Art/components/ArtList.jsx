import ArtListItem from "./ArtListItem"

function ArtList({artData}){
    return (
        <section className="art">
        <h2>Arts Section</h2>
        <div className="scroll-container">
        <ul className="art-list">
        {artData.map((art, index) => (
            <ArtListItem art={art} index={index} />
        ))}
        </ul>
        </div>
      </section>
    )
}

export default ArtList