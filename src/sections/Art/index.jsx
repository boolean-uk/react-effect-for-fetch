import ArtList from "./components/ArtList";

function ArtsSection(props) {
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artworks={props.artworks} />
      </div>
    </section>
  );
}

export default ArtsSection;
