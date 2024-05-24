import PropTypes from 'prop-types'

function AdviceSlip({advice, generateAdvice, addToList}) {
    
    return (
    <section className="adivce-slip">
    <h3>Some Advice</h3>
    <p>{advice.advice}</p>
    <button onClick={generateAdvice} >Get More Advice</button>
    <button onClick={addToList}>Save to Favourties</button>
  </section>
    )
}

AdviceSlip.propType ={
    advice: PropTypes.object,
    generateAdvice: PropTypes.func,
    addToList: PropTypes.func
}

export default AdviceSlip