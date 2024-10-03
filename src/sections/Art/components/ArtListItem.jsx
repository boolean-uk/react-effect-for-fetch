
export default function ArtListItem({artObject}){

    return(
        <li>
            <div className="frame">
                <img src={'https://boolean-uk-api-server.fly.dev' + artObject.imageURL}/>
            </div>
            <h3>{artObject.title}</h3>
            <p>{artObject.artist}</p>
            <h4>Publication History:</h4>
            <ul>
                {artObject.publicationHistory.map((history,index) =>(
                    <li key={index}>
                        {history}
                    </li >
                ))}
            </ul>
        </li>
    );

}