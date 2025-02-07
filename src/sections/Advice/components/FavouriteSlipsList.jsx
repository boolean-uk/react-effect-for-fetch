function favouriteSlips(props) {
    const favourites = props.favourites

    return(
        <ul>
            {favourites.map((favourites, index) => {
                return (
                    <li key={index}>{favourites.advice}</li>
                )
            })}
        </ul>
    )
}

export default favouriteSlips