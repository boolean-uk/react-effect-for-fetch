export default function FavouriteSlipsList({ firstFavourite, secondFavourite, thirdFavourite, newAdvice, saveRandom }) {
    return (
        <ul>
            <li>{firstFavourite.slip.advice}</li>
            <li>{secondFavourite.slip.advice}</li>
            <li>{thirdFavourite.slip.advice}</li>
            {newAdvice && <li>{newAdvice}</li>}
            {saveRandom && <li>{saveRandom}</li>}
        </ul>
    )
}