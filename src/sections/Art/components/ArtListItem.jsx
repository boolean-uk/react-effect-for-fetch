function ArtListItem({info:{imageURL, artist, title, publicationHistory}})
{
    let serverurl = `https://boolean-api-server.fly.dev/`;
    let url = serverurl + imageURL;
    return(
        <li>
          <div className="frame">
            <img src={url}/>
          </div>
          <h3>{title}</h3>
          <p>{artist}</p>
          <h4>Publication History:</h4>
          <ul>
          {publicationHistory.map((pub,index)=>(
              <PublicationItem key={index} item={pub}/>
            ))}
            </ul>
        </li>
      )
    }

    export default ArtListItem
    
    function PublicationItem({item}){
      return(
        <li><p>{item}</p></li>
      )
    }