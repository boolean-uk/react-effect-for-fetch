function FavouriteSlipsList({ slips }) {
  return (
    <ul>
      {slips.map((slip, index) => (
        <li key={index}>{slip.advice}</li>
      ))}
    </ul>
  );
}

export default FavouriteSlipsList;
