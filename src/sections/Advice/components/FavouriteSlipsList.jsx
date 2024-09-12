function FavouriteSlipsList(props){
    const {favorites} = props;
    return(
        <>
        <section className="favourite-slips-list">
            <h3>Favourtie Advice Slips</h3>
            <ul>
                {favorites.map((favorite, index) => (
                    <li key={index}>{favorite}</li>
                ))}            
            </ul>
        </section>
        </>
    )        
}


export default FavouriteSlipsList