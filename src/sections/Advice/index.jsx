import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"
function AdviceSection(props) {
  const adviceData = props.adviceData;
  const handleNewAdvice = props.handleNewAdvice;
  const handleSetFavAdvice = props.handleSetFavAdvice;
  const favouritesData = props.favouritesData;

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
      <h3>Some Advice</h3>
        <AdviceSlip adviceData = {adviceData}/>

        <button onClick={handleNewAdvice}>
          Get More Advice
          </button>

        <button onClick={handleSetFavAdvice}
        >Save to Favourties
        </button>

      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList favouritesData = {favouritesData}/>
      </section>
    </section>
  )
}

export default AdviceSection
