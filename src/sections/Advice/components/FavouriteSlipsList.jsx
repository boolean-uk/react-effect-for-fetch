export default function FavouriteSlipsList({ savedAdviceData }) {
    return (
      <section className="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {savedAdviceData.map((advice, index) => (
            <li key={`saved-advice${index}`}>{advice.advice}</li>
          ))}
        </ul>
      </section>
    );
  }