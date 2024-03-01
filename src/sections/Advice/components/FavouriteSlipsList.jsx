


function FavouriteSlips(props) {


    const {faveAdvice} = props ?? {};

  return (

    <ul>
    {faveAdvice.map((advice, index) => (
      <li key={index}>{advice.slip.advice}</li>
    ))}
  </ul>
    
  )
}

export default FavouriteSlips
