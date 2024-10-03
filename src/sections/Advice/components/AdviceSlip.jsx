function AdviceSlip({advice, adviceClick, favoriteClick}){
    return(
        <section className = "advice-slip">
            <h3>Some advice</h3>
            <p>{advice}</p>
            <button onClick = {adviceClick}> Get More Advice </button>
            <button onClick = {favoriteClick}> Save to Favourites</button>
        </section>    
    )   
}

export default AdviceSlip