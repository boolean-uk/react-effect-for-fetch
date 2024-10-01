export default function FavouriteSlipsList( {favouriteAdviceSlips} ) {
    return (
        <>
            <ul>
                {favouriteAdviceSlips.map((fav, index) => (
                    <li key={index}>{fav}</li>
                ))}
            </ul>
        </>
    )
}