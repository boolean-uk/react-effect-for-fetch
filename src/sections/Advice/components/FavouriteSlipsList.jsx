
import FavouriteSlip from "./FavouriteSlip";

function FavouriteSlipsList(props) {
  const favourites = props.favourites;

  return (
    <ul>
      
        {favourites?.map((advice, index) => (
          <FavouriteSlip key={index} advice={advice} />
        ))}
      
    </ul>
  );
}

export default FavouriteSlipsList;


