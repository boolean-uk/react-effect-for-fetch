export default function FavouriteSlipList({ favourites }) {
    return (
        <>
        <h3>Favourite Advice Slips</h3>
        <ul>
            {favourites.map( (favourite, idx) => <li key={idx}>{favourite}</li> )}
        </ul>
        </>
    )
}