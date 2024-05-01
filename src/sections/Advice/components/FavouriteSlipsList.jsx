function FavouriteSlipsList(props) {
    return (
      <ul>
        {props.favouriteAdvices.map((advice, index) => {
          return <li key={index}>{advice.advice}</li>;
        })}
      </ul>
    );
}

export default FavouriteSlipsList