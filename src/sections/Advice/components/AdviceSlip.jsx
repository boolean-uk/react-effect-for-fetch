function AdviceSlip(props) {
    const advice = props.advice;
 
    return (
      <p>{advice.slip.advice}</p>
    );
  }
  
  export default AdviceSlip;