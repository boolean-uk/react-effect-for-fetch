import { useEffect, useState } from 'react'

function AdviceSlip({ onAddToFavourites }) {

    const url = "https://api.adviceslip.com/advice";
    const [data, setData] = useState([]);

    // had to move it outside the useEffect to use it in button for get more advice
    const fetchData = async () => {

        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData.slip);
    };
    
    useEffect(() => {

        fetchData();
    }, [])

    return (
        <>
        <div className='advice-slip'>
            <h3>
                Some advice!
            </h3>
            <p>
                {data.advice}
            </p>
            <button onClick={fetchData}>
                Get more advice
            </button>
            <button onClick={() => onAddToFavourites(data)}>
                Save to favourites
            </button>
        </div>
        </>
    )
}

export default AdviceSlip;