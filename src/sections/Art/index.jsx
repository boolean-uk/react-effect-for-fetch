import ArtList from "./components/ArtList";

function ArtsSection(props) {
  const { data } = props;

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList data={data} />
      </div>
    </section>
  );
}

export default ArtsSection;
