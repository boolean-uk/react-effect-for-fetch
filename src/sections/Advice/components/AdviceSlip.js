function AdviceSlip(props) {
    const { data, favouritesState, getData, setFavouritesState } = props;
    
    if (!data) {
        return <p>Loading...</p>;
    }
    const handleGetMoreAdvice = () => {
        getData();
    };
    const addNewFavourite = () => {
        if (data) {
            setFavouritesState(new Set(favouritesState).add(data));
        }
        // setFavouritesState([...favouritesState, data]);
    };

    return (
        <section class="adivce-slip">
            <h3>Some Advice</h3>
            <p>{data.advice}</p>
            <button onClick={handleGetMoreAdvice}>Get More Advice</button>
            <button onClick={addNewFavourite}>Save to Favourties</button>
        </section>
    );
}

export default AdviceSlip;
