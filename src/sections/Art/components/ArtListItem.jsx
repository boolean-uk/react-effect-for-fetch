import PublicationHistoryList from "./PublicationHistoryList"

function ArtListItem({data}){
    console.log(data)
    return(
        <li key={data.id}>
            <div className="frame">
                <img
                src={"https://boolean-uk-api-server.fly.dev"+data.imageURL}
                />
            </div>
            <h3>{data.title}</h3>
            <p>Artist: {data.artist}</p>
            <p>meow</p>
            <PublicationHistoryList data={data.publicationHistory}/>
        </li>
    )
}

export default ArtListItem