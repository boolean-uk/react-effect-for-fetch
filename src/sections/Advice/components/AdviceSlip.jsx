function AdviceSlip(props){
    const {fetchAdvice, saveToFavorites, currentAdvice} = props
    return(
        <section className="advice-slip">
            <h3>Some advice</h3>
            <p>{currentAdvice}</p>
           <button onClick={fetchAdvice}>Get More Advice</button>
           <button onClick={saveToFavorites}>Save to Favourites</button>
        </section>
    )        
}
export default AdviceSlip