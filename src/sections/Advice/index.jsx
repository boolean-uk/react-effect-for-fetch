import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipList from "./components/FavouriteSlipsList"

function AdviceSection() {
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip/>
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipList/>
      </section>
    </section>
  )
}

export default AdviceSection
