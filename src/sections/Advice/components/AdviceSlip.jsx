function AdviceSlip({advice, fetchMore, saveToFavs}) {
return <>
    <h3>Some Advice</h3>
    <p>{ advice }</p>
    <button onClick={fetchMore}>Get More Advice</button>
    <button onClick={()=>{saveToFavs(advice)}}>save to Favourites</button>
</>
}

export default AdviceSlip