import FavouriteSlips from "./FavouriteSlipsList";



function AdviceSlip(props) {


    const {advice, getAdvice, handleFavourite, faveAdvice} = props ?? {};

  return (

    <section>
    <h2>Advice Section</h2>
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{advice.slip.advice}</p>
      <button onClick={getAdvice}>Get More Advice</button>
      <button onClick={handleFavourite}>Save to Favourties</button>
    </section>
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <FavouriteSlips faveAdvice={faveAdvice}/>
    </section>
  </section>
    
  )
}

export default AdviceSlip
