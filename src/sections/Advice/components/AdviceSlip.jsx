import PropTypes from 'prop-types';



export default function AdviceSlip(props) {
    
    const {advice, newAdvice, saveAdvice} = props


    return (
        <>
       <section className="advice-slip">
    <h3>Some Advice</h3>
    <p>{advice}</p>
    <button onClick={newAdvice}>Get More Advice</button>
    <button onClick={saveAdvice}>Save to Favourties</button>
  </section>
    </>
    )
}

AdviceSlip.propTypes = {
    advice: PropTypes.string,
    newAdvice: PropTypes.func,
    saveAdvice: PropTypes.func
}