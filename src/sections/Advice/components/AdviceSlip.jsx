import {useState} from 'react'

function AdviceSlip({data, handleClick, saveAdvice}){
let advice = 'loading..'
if((data !== undefined) || (data !== false)){
    advice = data;
}else{
    advice = 'loading';
}
    return(<>
    <h3>Some Advice</h3>
    <p>{advice}</p>
    <button onClick={handleClick}>Get More Advice</button>
    <button onClick={saveAdvice}>Save to Favourties</button>
    </>
    )
}

export default AdviceSlip


