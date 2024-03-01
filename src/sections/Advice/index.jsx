import PropTypes from "prop-types";

import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection(props) {

 
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
       { props?.advice?.slip?.advice&&<AdviceSlip
          id={props.advice.slip.id}
          advice={props.advice.slip.advice}
          newAdvice={props.newAdvice}
          onSaveFav={props.onSaveFav}
        />}
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList list={props.favs}/>
      </section>
    </section>
  );
}
AdviceSection.propTypes = {
  advice: PropTypes.object,
  favs: PropTypes.array.isRequired,
  newAdvice: PropTypes.func.isRequired,
  onSaveFav: PropTypes.func.isRequired
};
export default AdviceSection;
