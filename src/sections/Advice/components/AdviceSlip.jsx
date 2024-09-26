const AdviceSlip = ({ data, getData, addFavorite }) => {
    const saveFavorite = () => {
        addFavorite(data.slip.advice);
        getData();
    };

    return (
        <>
            <h3>Some Advice</h3>
            <p>{data.slip !== undefined ? data.slip.advice : "loading..."}</p>
            <button onClick={getData}>Get More Advice</button>
            <button onClick={saveFavorite}>Save to Favourties</button>
        </>
    );
};

export default AdviceSlip;
