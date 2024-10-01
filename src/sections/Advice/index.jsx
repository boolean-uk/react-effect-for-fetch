import AdviceSlip from "./components/AdviceSlip"

function AdviceSection() {
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"></section>
      <section className="favourtite-slips-list">
        <AdviceSlip/>
      </section>
    </section>
  )
}

export default AdviceSection
