import React from "react";
import ArtList from "./components/ArtList";

const ArtsSection = () => {
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          <ArtList />
        </ul>
      </div>
    </section>
  );
};

export default ArtsSection;
