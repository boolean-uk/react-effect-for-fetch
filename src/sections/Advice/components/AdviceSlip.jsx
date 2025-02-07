import "../../../App.css";


const AdviceSlip = ({propsList}) => {

    return(
        <>
            <h3>Some Advice</h3>
            <p>{propsList.data?.slip?.advice || "Loading..."}</p>
            <button onClick={propsList.fetchData}>Get More Advice</button>
            <button onClick={propsList.saveToFavourites}>Save to Favourties</button>
        </>
    )
}

export default AdviceSlip
