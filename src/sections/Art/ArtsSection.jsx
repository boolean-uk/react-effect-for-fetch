import ArtList from "./components/ArtList";

export default function ArtsSection() {
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList />
      </div>
    </section>
  );
}
