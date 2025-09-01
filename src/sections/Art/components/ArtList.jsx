import ArtListItem from "./ArtListItem"

function ArtList({artList}){

    return <>
    <ul>
    {artList?.map((artListItem, i) => (
        <ArtListItem artListItem={artListItem} key={i} />
      ))}
    </ul>
 </>   

}

export default ArtList;