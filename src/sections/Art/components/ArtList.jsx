import ArtListItem from "./ArtListItem";

export default function ArtList({ artList }){

  return (

    <ul className="art-list">
      {artList.map((art, index) =>(
        <ArtListItem art={ art } index={ index } />
      ))}
    </ul>

  )

}
