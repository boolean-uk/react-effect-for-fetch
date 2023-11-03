import { useState, useEffect } from "react";

import ArtList from "./components/ArtList";

function ArtsSection() {
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          <ArtList useState={useState} useEffect={useEffect} />
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;
