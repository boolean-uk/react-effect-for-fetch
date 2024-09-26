import ArtListItem from "./ArtListItem";

export default function ArtList(props) {
    const {data} = props;
    //console.log(data);
    if (!data) {
        return <div> Loading...</div>
    }

  return (
    <div className="scroll-container">
      <ul className='art-list'>
        {data.map((art) => (
            <ArtListItem key={art.id} data={art}/>
        ))}

      </ul>
    </div>
  )
}

