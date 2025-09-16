import React from 'react';

function AdviceSlip(props) {
    return (
        <section className="advice-slip">
            <h3>Some Advice</h3>
            <p>{props.slip.advice}</p>
            <button onClick={props.getSlip}>Get More Advice</button>
            <button onClick={() => props.saveSlip(props.slip)}>Save to Favourites</button>
        </section>
    );
}

export default AdviceSlip;