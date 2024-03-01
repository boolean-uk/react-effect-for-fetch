function FavoriteSlipsList(props) {
  return (
    <section className="favourite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {props.favorites.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default FavoriteSlipsList;
