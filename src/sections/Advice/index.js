// import { useEffect, useState } from "react";
// import AdviceSlip from "./components/AdviceSlip";
// import FavoriteSlipList from "./components/FavouriteSlipsList";

function AdviceSection() {
  //   const [advice, setAdvice] = useState("");
  //   const [favouriteAdvice, setFavourtitAdvice] = useState([]);
  return (
    <section>
      <h2>Advice Section</h2>
      <section class="adivce-slip">
        <h3>Some Advice</h3>
        <p>Always the burrito.</p>
        <button>Get More Advice</button>
        <button>Save to Favourties</button>
      </section>
      <section class="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          <li>Measure twice, cut once.</li>
          <li>Don't let the bastards grind you down.</li>
          <li>Always the burrito.</li>
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection;
