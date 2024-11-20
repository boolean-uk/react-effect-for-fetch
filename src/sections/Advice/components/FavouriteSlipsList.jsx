function FavouriteSipsList(props) {
  return (
    <ul>
      {props.savedAdviceSlips.map((adviceSlip, index) => {
        return <li key={index}>{adviceSlip.slip.advice}</li>;
      })}
    </ul>
  );
}
export default FavouriteSipsList;
