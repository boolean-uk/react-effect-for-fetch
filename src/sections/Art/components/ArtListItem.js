function ArtListItem(props) {
    //console.log("ArtListItem props:", props)
    return (
        <li key={props.art.id}>
        <div className="frame">
          <img src={props.imgURL+"/"+props.art.image_id+"/full/843,/0/default.jpg"} alt=" ..."/>
        </div>
        <h3>{props.art.title}</h3>
        <h4>Artist: {props.art.artist_title}</h4>
        <h4>Type: {props.art.artwork_type_title}</h4>
        <ul> 
          <li><b> Department:</b> {props.art.department_title}</li>
          <li><b> Date:</b> {props.art.date_display}  </li>
          <li><b> Credit:</b> {props.art.credit_line} </li>
          <li><b> Subjects:</b> <ul> {props.art.subject_titles.map(item => { return <li>{item} </li>;
            })} 
            </ul>
            
          </li>
        </ul>
      </li>
    )
}

export default ArtListItem