import React from "react";

function AdviceSlip({ adviceData, onGetMore, onSaveToFavourites }) {
    return(
        <section className="advice-slip">
            <h3>Some Advice</h3>
            <p>{adviceData?.slip?.advice}</p>
            <button onClick={onGetMore}>Get More Advice</button>
            <button onClick={onSaveToFavourites}>Save to Favourites</button>
        </section>
    )
}

export default AdviceSlip;