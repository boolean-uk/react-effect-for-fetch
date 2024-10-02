

export default function FavouriteSlipsList({ favourites }) {
    console.log(favourites)
    return (
        <>

        <h3>Favoruite Advice Slips</h3>

        <ul>
            {favourites.map((favourite, i) => (
                <li key={i}>{favourite}</li>
            ))}
        </ul>
        
        
        
        
        
        </>
    )

}















  