import { useState, useEffect } from "react";
import ArtList from "./components/ArtList";

function ArtsSection({ imageURLs, ART_ENDPOINT }) {
  return (
    <section>
      <h2>Arts Section</h2>
      <ArtList ART_ENDPOINT={ART_ENDPOINT} />
    </section>
  );
}

export default ArtsSection;
