import PropTypes from "prop-types";
import ArtList from "./components/ArtList";
function ArtsSection(props) {
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
   
        <ArtList art={props.art} />
      </div>
    </section>
  );
}
ArtsSection.propTypes = {
  art: PropTypes.array.isRequired,
};
export default ArtsSection;
