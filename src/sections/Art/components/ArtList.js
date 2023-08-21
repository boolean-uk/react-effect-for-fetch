import ArtListItem from './ArtListItem'

function ArtList({ artData }) {
    return (
        <ul className="art-list">
        {artData.data.map((art) => (
            <ArtListItem key={art.id} art={art}/>
        ))}
      </ul>
    );
  }
  
  export default ArtList;
  