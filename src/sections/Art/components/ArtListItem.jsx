

export default function ArtListItem(props) {
    // Destructuring props:
    const {data} = props;
    //console.log(data);

  return (
        <li>
            <div className='frame'>
                <img src={"https://boolean-api-server.fly.dev" + data.imageURL} />
            </div>
            <h3>{data.title}</h3>
            <p>{data.artist}</p>
            <h4>Publication History:</h4>
            <ul>
                {data.publicationHistory.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </li>
      
    
    )
}

