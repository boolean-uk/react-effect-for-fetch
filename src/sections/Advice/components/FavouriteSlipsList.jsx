const FavoriteSlipsList = ({ data }) => {
    return (
        <>
            <h3>Favourite Advice Slips</h3>
            <ul>
                {data.map((advice, i) => (
                    <li key={i}>{advice}</li>
                ))}
            </ul>
        </>
    );
};

export default FavoriteSlipsList;
