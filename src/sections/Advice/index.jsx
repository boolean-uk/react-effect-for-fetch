import AdviceSlip from "./components/AdviceSlip";
import FavoriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection({ data, filteredData, getNew, saveToFavorites }) {
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <AdviceSlip data={data} />
        <button onClick={() => getNew()}>Get More Advice</button>
        <button onClick={() => saveToFavorites(data)}>
          Save to Favourties
        </button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>

        <FavoriteSlipsList data={filteredData} />
      </section>
    </section>
  );
}

export default AdviceSection;
