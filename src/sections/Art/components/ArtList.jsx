export default function ArtList(props) {
  return (
    <ul className="art-list">{props.artData.map( (item) => 
    <li>
      <div class="frame">
        <img src="https://www.artic.edu/iiif/2/0330a6dd-774e-eff1-0073-2be5f85b81d0/full/843,/0/default.jpg" />
      </div>
      <h3>{item.title}</h3>
      <p>Artist: Morris Kantor</p>
      <h4>Artistic Subjects:</h4>
      <ul>
        <li>architecture</li>
        <li>Century of Progress</li>
        <li>world's fairs</li>
        <li>Chicago World's Fairs</li>
      </ul>
    </li>)}
    </ul>
  );
}
