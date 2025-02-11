import PropTypes from "prop-types"
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection(props) {
  const advice = props.advice;
  const handleNewAdviceOnClick = props.handleNewAdviceOnClick;
  const favourites = props.favourites;
  const HandleSetFavouriteOnClick = props.HandleSetFavouriteOnClick;


  return (
    <section>
      <h2>Advice Section</h2>
      <section>
        <h3>Some Advice</h3>
        <AdviceSlip advice={advice}/>
        <button onClick={handleNewAdviceOnClick}>New Advice</button>
        <button onClick={HandleSetFavouriteOnClick}>Save to favourites</button>
      </section>
      <section>
        <h3>Favourite Advice Slips</h3>
        <FavouriteSlipsList favourites={favourites}/>
      </section>
    </section>
  );
}

export default AdviceSection;
