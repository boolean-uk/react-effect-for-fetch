
function FavouriteSlips({arr, handleClick}){
let array = arr?arr:['No favorites yet']
    return(
<>
        <ul>
           {array.map((string, index)=>(
            <li key={index} onClick={(e)=>handleClick(e)}>{string}</li>
           ))}
      </ul></>
    )
}

export default FavouriteSlips