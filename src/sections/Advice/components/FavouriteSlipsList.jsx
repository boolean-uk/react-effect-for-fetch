function FavourtieSlipsList({ advice }) {
    return (
        <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
        <ul>
          {advice.map((item, index) => (
            <li key={index}>{item.advice}</li>
          ))}
        </ul>
      </section>
    )
}

export default FavourtieSlipsList
