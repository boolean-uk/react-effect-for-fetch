export default function FavouriteSlipsList({slips}) {
  return (
    <ul>
      {slips.map((slip, i) => (
        <li key={i}>{slip.advice}</li>
      ))}
    </ul>
  );
}
