function FavouriteSlips(props)
{
    return(
        <ul>
          {props.favAdvice.map(advice => <li>
            {advice}
          </li>)}
        </ul>
    )
}

export default FavouriteSlips