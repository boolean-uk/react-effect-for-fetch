function FavouriteSlip(props) {
    const advice = props.advice.advice;
  
    return (
      <li><p>{advice.slip.advice}</p></li>
    );
  }
  
  export default FavouriteSlip;