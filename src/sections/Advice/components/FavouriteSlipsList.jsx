function FavouriteSlipsList( properties ){
    return(
        <><h3>Favourite Advice Slips</h3>
        <ul>
            {properties.favourits.map((favourit, index) => (
                <li key={index}>{favourit}</li>
            ))}
        </ul></>
    )
}
export default FavouriteSlipsList