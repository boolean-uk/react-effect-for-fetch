import ArtListItem from './ArtListItem'

function ArtList({dataList}){
    if(dataList){
    return(
    <ul className="art-list">
        {dataList.map((dataItem,index)=>( <ArtListItem key={index} info={dataItem}/>))}
    </ul>
    )
}
}

export default ArtList