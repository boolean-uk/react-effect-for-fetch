
export default function AdviceSlip(props) {
    const{data, setData, setFavAdvice, favAdvice, fetching} = props;

    function handClick(event) {
        event.preventDefault();
        const {name} = event.target;
        
        if(name === 'fav'){
            setFavAdvice([...favAdvice, data.slip])
        }
        else {
            console.log("ho");
            fetching()
        }

        console.log(favAdvice);
    }

  return (
    <div>
        <h3>Some Advice</h3>
        <p className='random-advice'>{data.slip.advice}</p>
        <button className='button-advice' name='advice' type='button' onClick={handClick}>Get More Advice</button>
        <button className='button-advice' name='fav' type='button' onClick={handClick}>Save to Favourties</button>
    </div>
  )
}


