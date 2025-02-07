import "../../../App.css";

const FavouriteSlipList = ({favourites}) => {
    return(
        <>
            <h3>Favourite Advice Slips</h3>
            <ul>
                {favourites.map((fav, index) => (<li key={index}> {fav.slip.advice} </li>) )}
            </ul>
        </>
    )
}

export default FavouriteSlipList