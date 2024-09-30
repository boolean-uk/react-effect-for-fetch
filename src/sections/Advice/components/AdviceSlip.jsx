export default function AdviceSlip({ advice, fetchAdvice, addToFavourites }) {
    return (
      <div>
        {advice ? (
          <>
            <p>{advice.advice}</p>
            <button onClick={fetchAdvice}>Get New Advice</button>
            <button onClick={addToFavourites}>Add to Favourites</button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  