function FavouriteSlipsList({list}) {

    return <>
       <h3>Favourite Advice Slips</h3>   
       <ul>
          {list.map((item, index) => <li key={index}>{item}</li>)}
       </ul>  
    </>
}

export default FavouriteSlipsList