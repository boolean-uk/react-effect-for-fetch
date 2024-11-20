import PropTypes from "prop-types"

function AdviceSlip(props) {
  return (
    <section className="advice-slip">
        <h3>Valuable Advice</h3>
        <p>{props.advice === undefined ? "" : props.advice.slip.advice}</p>
        <button onClick={props.getASlip}>Get More Advice</button>
        <button onClick={props.addToFavourites}>Add to Favourites</button>
    </section>
  )
}

AdviceSlip.propTypes = {
    advice: PropTypes.object.isRequired,
    getASlip: PropTypes.func.isRequired,
    addToFavourites: PropTypes.func.isRequired
}

export default AdviceSlip