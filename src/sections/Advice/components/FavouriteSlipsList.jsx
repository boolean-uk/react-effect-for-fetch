function FavoriteSlipsList({ data }) {
  return (
    <ul>
      {data.map((d, ind) => {
        return <li key={ind}>{d.slip.advice}</li>;
      })}
    </ul>
  );
}

export default FavoriteSlipsList;
