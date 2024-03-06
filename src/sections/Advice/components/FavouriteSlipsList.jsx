function FavouriteSlipsList(props) {
    const {favAdvices} = props
    console.log(favAdvices);

    return (
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
            {favAdvices.map((slip, index) => (
                <li key={index}>
                    {slip.advice}
                </li>
            ))}
        </ul>
      </section>
    );
}

export default FavouriteSlipsList