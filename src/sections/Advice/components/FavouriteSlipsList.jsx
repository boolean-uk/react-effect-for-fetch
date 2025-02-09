export default function FavouriteSlipsList(props) {

    const favouritesData = props.favouritesData;



    return (
        <>
        <h3>Favourite Advice Slips</h3>
        <ul>
            {favouritesData?.map((advice, index) => (
            <li key = {index}>
                <p>{advice.adviceData.slip.advice}</p>
            </li>))}
        </ul>
        </>
      
    )
    
}

//