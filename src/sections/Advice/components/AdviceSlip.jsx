import PropTypes from 'prop-types';

function AdviceSlip(props) {

    const{advice, newAdvice, saveAdvice} = props

    return (
        <section>
            <h2>Advice Section</h2>
            <section className="advice-slip">
                <h3>Some Advice</h3>
                <p>{advice}</p>
                <button onClick={newAdvice}>Get More Advice</button>
                <button onClick={saveAdvice}>Save to Favourties</button>
            </section>
        </section>
    )
}

AdviceSlip.propTypes = {
    advice: PropTypes.string,
    newAdvice: PropTypes.func,
    saveAdvice: PropTypes.func
}

export default AdviceSlip
