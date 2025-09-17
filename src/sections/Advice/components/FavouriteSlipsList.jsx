
function FavouriteSlipsList({favorites}) {

return(
    <>
    <ul>
        {favorites.map(advice => (
            <p key={advice.id}>{advice.advice}</p>
        ))}
    </ul>
    </>
)

}
export default FavouriteSlipsList;


